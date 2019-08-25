import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Buffer, Model, Transform, FEATURES, hasFeatures, isWebGL2, readPixelsToBuffer, fp64 as fp64ShaderModule, withParameters } from '@luma.gl/core';
import { log, project64 } from '@deck.gl/core';
import { worldToPixels } from 'viewport-mercator-project';
const fp64ifyMatrix4 = fp64ShaderModule.fp64ifyMatrix4;
import { DEFAULT_CHANGE_FLAGS, DEFAULT_RUN_PARAMS, MAX_32_BIT_FLOAT, MIN_BLEND_EQUATION, MAX_BLEND_EQUATION, MAX_MIN_BLEND_EQUATION, EQUATION_MAP, ELEMENTCOUNT, DEFAULT_WEIGHT_PARAMS, IDENTITY_MATRIX, PIXEL_SIZE, WEIGHT_SIZE } from './gpu-grid-aggregator-constants';
import { AGGREGATION_OPERATION } from '../aggregation-operation-utils';
import AGGREGATE_TO_GRID_VS from './aggregate-to-grid-vs.glsl';
import AGGREGATE_TO_GRID_VS_FP64 from './aggregate-to-grid-vs-64.glsl';
import AGGREGATE_TO_GRID_FS from './aggregate-to-grid-fs.glsl';
import AGGREGATE_ALL_VS_FP64 from './aggregate-all-vs-64.glsl';
import AGGREGATE_ALL_FS from './aggregate-all-fs.glsl';
import TRANSFORM_MEAN_VS from './transform-mean-vs.glsl';
import { getFloatTexture, getFramebuffer, getFloatArray } from './../resource-utils.js';
const BUFFER_NAMES = ['aggregationBuffer', 'maxMinBuffer', 'minBuffer', 'maxBuffer'];
const ARRAY_BUFFER_MAP = {
  maxData: 'maxBuffer',
  minData: 'minBuffer',
  maxMinData: 'maxMinBuffer'
};
export default class GPUGridAggregator {
  static getAggregationData(_ref) {
    let aggregationData = _ref.aggregationData,
        maxData = _ref.maxData,
        minData = _ref.minData,
        maxMinData = _ref.maxMinData,
        pixelIndex = _ref.pixelIndex;
    const index = pixelIndex * PIXEL_SIZE;
    const results = {};

    if (aggregationData) {
      results.cellCount = aggregationData[index + 3];
      results.cellWeight = aggregationData[index];
    }

    if (maxMinData) {
      results.maxCellWieght = maxMinData[0];
      results.minCellWeight = maxMinData[3];
    } else {
      if (maxData) {
        results.maxCellWieght = maxData[0];
        results.totalCount = maxData[3];
      }

      if (minData) {
        results.minCellWeight = minData[0];
        results.totalCount = maxData[3];
      }
    }

    return results;
  }

  static getCellData(_ref2) {
    let countsData = _ref2.countsData,
        _ref2$size = _ref2.size,
        size = _ref2$size === void 0 ? 1 : _ref2$size;
    const numCells = countsData.length / 4;
    const cellWeights = new Float32Array(numCells * size);
    const cellCounts = new Uint32Array(numCells);

    for (let i = 0; i < numCells; i++) {
      for (let sizeIndex = 0; sizeIndex < size; sizeIndex++) {
        cellWeights[i * size + sizeIndex] = countsData[i * 4 + sizeIndex];
      }

      cellCounts[i] = countsData[i * 4 + 3];
    }

    return {
      cellCounts,
      cellWeights
    };
  }

  static isSupported(gl) {
    return isWebGL2(gl) && hasFeatures(gl, FEATURES.BLEND_EQUATION_MINMAX, FEATURES.COLOR_ATTACHMENT_RGBA32F, FEATURES.TEXTURE_FLOAT);
  }

  constructor(gl) {
    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.id = opts.id || 'gpu-grid-aggregator';
    this.shaderCache = opts.shaderCache || null;
    this.gl = gl;
    this.state = {
      weights: null,
      gridPositions: null,
      positionsBuffer: null,
      positions64xyLowBuffer: null,
      vertexCount: 0,
      fp64: null,
      useGPU: null,
      numCol: 0,
      numRow: 0,
      windowSize: null,
      cellSize: null,
      weightAttributes: {},
      textures: {},
      meanTextures: {},
      buffers: {},
      framebuffers: {},
      maxMinFramebuffers: {},
      minFramebuffers: {},
      maxFramebuffers: {},
      equations: {},
      resources: {},
      results: {}
    };
    this._hasGPUSupport = isWebGL2(gl) && hasFeatures(this.gl, FEATURES.BLEND_EQUATION_MINMAX, FEATURES.COLOR_ATTACHMENT_RGBA32F, FEATURES.TEXTURE_FLOAT);
  }

  delete() {
    const gridAggregationModel = this.gridAggregationModel,
          allAggregationModel = this.allAggregationModel,
          meanTransform = this.meanTransform;
    const _this$state = this.state,
          positionsBuffer = _this$state.positionsBuffer,
          positions64xyLowBuffer = _this$state.positions64xyLowBuffer,
          textures = _this$state.textures,
          framebuffers = _this$state.framebuffers,
          maxMinFramebuffers = _this$state.maxMinFramebuffers,
          minFramebuffers = _this$state.minFramebuffers,
          maxFramebuffers = _this$state.maxFramebuffers,
          meanTextures = _this$state.meanTextures,
          resources = _this$state.resources;
    gridAggregationModel && gridAggregationModel.delete();
    allAggregationModel && allAggregationModel.delete();
    meanTransform && meanTransform.delete();
    positionsBuffer && positionsBuffer.delete();
    positions64xyLowBuffer && positions64xyLowBuffer.delete();
    this.deleteResources([framebuffers, textures, maxMinFramebuffers, minFramebuffers, maxFramebuffers, meanTextures, resources]);
  }

  run() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.setState({
      results: {}
    });
    const aggregationParams = this.getAggregationParams(opts);
    this.updateGridSize(aggregationParams);
    const useGPU = aggregationParams.useGPU;

    if (this._hasGPUSupport && useGPU) {
      return this.runAggregationOnGPU(aggregationParams);
    }

    if (useGPU) {
      log.warn('GPUGridAggregator: GPU Aggregation not supported, falling back to CPU')();
    }

    return this.runAggregationOnCPU(aggregationParams);
  }

  getData(weightId) {
    const data = {};
    const results = this.state.results;

    if (!results[weightId].aggregationData) {
      results[weightId].aggregationData = results[weightId].aggregationBuffer.getData();
    }

    data.aggregationData = results[weightId].aggregationData;

    for (const arrayName in ARRAY_BUFFER_MAP) {
      const bufferName = ARRAY_BUFFER_MAP[arrayName];

      if (results[weightId][arrayName] || results[weightId][bufferName]) {
        results[weightId][arrayName] = results[weightId][arrayName] || results[weightId][bufferName].getData();
        data[arrayName] = results[weightId][arrayName];
      }
    }

    return data;
  }

  deleteResources(resources) {
    resources = Array.isArray(resources) ? resources : [resources];
    resources.forEach(obj => {
      for (const name in obj) {
        obj[name].delete();
      }
    });
  }

  getAggregationParams(opts) {
    const aggregationParams = Object.assign({}, DEFAULT_RUN_PARAMS, opts);
    const useGPU = aggregationParams.useGPU,
          gridTransformMatrix = aggregationParams.gridTransformMatrix,
          viewport = aggregationParams.viewport,
          weights = aggregationParams.weights,
          projectPoints = aggregationParams.projectPoints,
          cellSize = aggregationParams.cellSize;

    if (this.state.useGPU !== useGPU) {
      aggregationParams.changeFlags = Object.assign({}, aggregationParams.changeFlags, DEFAULT_CHANGE_FLAGS);
    }

    if (cellSize && (!this.state.cellSize || this.state.cellSize[0] !== cellSize[0] || this.state.cellSize[1] !== cellSize[1])) {
      aggregationParams.changeFlags.cellSizeChanged = true;
      this.setState({
        cellSize
      });
    }

    this.validateProps(aggregationParams, opts);
    this.setState({
      useGPU
    });
    aggregationParams.gridTransformMatrix = (projectPoints ? viewport.viewportMatrix : gridTransformMatrix) || IDENTITY_MATRIX;

    if (weights) {
      aggregationParams.weights = this.normalizeWeightParams(weights);
      this.setState({
        weights: aggregationParams.weights
      });
    }

    return aggregationParams;
  }

  normalizeWeightParams(weights) {
    const result = {};

    for (const id in weights) {
      result[id] = Object.assign({}, DEFAULT_WEIGHT_PARAMS, weights[id]);
    }

    return result;
  }

  setState(updateObject) {
    Object.assign(this.state, updateObject);
  }

  shouldTransformToGrid(opts) {
    const projectPoints = opts.projectPoints,
          changeFlags = opts.changeFlags;

    if (!this.state.gridPositions || changeFlags.dataChanged || projectPoints && changeFlags.viewportChanged) {
        return true;
      }

    return false;
  }

  updateGridSize(opts) {
    const viewport = opts.viewport,
          cellSize = opts.cellSize;
    const width = opts.width || viewport.width;
    const height = opts.height || viewport.height;
    const numCol = Math.ceil(width / cellSize[0]);
    const numRow = Math.ceil(height / cellSize[1]);
    this.setState({
      numCol,
      numRow,
      windowSize: [width, height]
    });
  }

  validateProps(aggregationParams, opts) {
    const changeFlags = aggregationParams.changeFlags,
          projectPoints = aggregationParams.projectPoints,
          gridTransformMatrix = aggregationParams.gridTransformMatrix;
    log.assert(changeFlags.dataChanged || changeFlags.viewportChanged || changeFlags.cellSizeChanged);
    log.assert(!changeFlags.dataChanged || opts.positions && opts.weights && (!opts.projectPositions || opts.viewport) && opts.cellSize);
    log.assert(!changeFlags.cellSizeChanged || opts.cellSize);
    log.assert(!(changeFlags.viewportChanged && projectPoints) || opts.viewport);

    if (projectPoints && gridTransformMatrix) {
      log.warn('projectPoints is true, gridTransformMatrix is ignored')();
    }
  }

  calculateAggregationData(opts) {
    const weights = opts.weights,
          results = opts.results,
          cellIndex = opts.cellIndex,
          posIndex = opts.posIndex;

    for (const id in weights) {
      const _weights$id = weights[id],
            values = _weights$id.values,
            size = _weights$id.size,
            operation = _weights$id.operation;
      const aggregationData = results[id].aggregationData;

      for (let sizeIndex = 0; sizeIndex < size; sizeIndex++) {
        const cellElementIndex = cellIndex + sizeIndex;
        const weightComponent = values[posIndex * WEIGHT_SIZE + sizeIndex];

        if (aggregationData[cellIndex + 3] === 0) {
          aggregationData[cellElementIndex] = weightComponent;
        } else {
          switch (operation) {
            case AGGREGATION_OPERATION.SUM:
            case AGGREGATION_OPERATION.MEAN:
              aggregationData[cellElementIndex] += weightComponent;
              break;

            case AGGREGATION_OPERATION.MIN:
              aggregationData[cellElementIndex] = Math.min(aggregationData[cellElementIndex], weightComponent);
              break;

            case AGGREGATION_OPERATION.MAX:
              aggregationData[cellElementIndex] = Math.max(aggregationData[cellElementIndex], weightComponent);
              break;

            default:
              log.assert(false);
              break;
          }
        }
      }

      aggregationData[cellIndex + 3]++;
    }
  }

  calculateMeanMaxMinData(opts) {
    const validCellIndices = opts.validCellIndices,
          results = opts.results,
          weights = opts.weights;
    validCellIndices.forEach(cellIndex => {
      for (const id in results) {
        const _weights$id2 = weights[id],
              size = _weights$id2.size,
              needMin = _weights$id2.needMin,
              needMax = _weights$id2.needMax,
              operation = _weights$id2.operation;
        const _results$id = results[id],
              aggregationData = _results$id.aggregationData,
              minData = _results$id.minData,
              maxData = _results$id.maxData,
              maxMinData = _results$id.maxMinData;
        const calculateMinMax = needMin || needMax;
        const calculateMean = operation === AGGREGATION_OPERATION.MEAN;
        const combineMaxMin = needMin && needMax && weights[id].combineMaxMin;
        const count = aggregationData[cellIndex + ELEMENTCOUNT - 1];

        for (let sizeIndex = 0; sizeIndex < size && (calculateMinMax || calculateMean); sizeIndex++) {
          const cellElementIndex = cellIndex + sizeIndex;
          let weight = aggregationData[cellElementIndex];

          if (calculateMean) {
            aggregationData[cellElementIndex] /= count;
            weight = aggregationData[cellElementIndex];
          }

          if (combineMaxMin) {
            maxMinData[sizeIndex] = Math.max(maxMinData[sizeIndex], weight);
          } else {
            if (needMin) {
              minData[sizeIndex] = Math.min(minData[sizeIndex], weight);
            }

            if (needMax) {
              maxData[sizeIndex] = Math.max(maxData[sizeIndex], weight);
            }
          }
        }

        if (combineMaxMin) {
          maxMinData[ELEMENTCOUNT - 1] = Math.min(maxMinData[ELEMENTCOUNT - 1], aggregationData[cellIndex + 0]);
        } else {
          if (needMin) {
            minData[ELEMENTCOUNT - 1] += count;
          }

          if (needMax) {
            maxData[ELEMENTCOUNT - 1] += count;
          }
        }
      }
    });
  }

  initCPUResults(opts) {
    const weights = opts.weights || this.state.weights;
    const _this$state2 = this.state,
          numCol = _this$state2.numCol,
          numRow = _this$state2.numRow;
    const results = {};

    for (const id in weights) {
      let _weights$id3 = weights[id],
          aggregationData = _weights$id3.aggregationData,
          minData = _weights$id3.minData,
          maxData = _weights$id3.maxData,
          maxMinData = _weights$id3.maxMinData;
      const _weights$id4 = weights[id],
            needMin = _weights$id4.needMin,
            needMax = _weights$id4.needMax;
      const combineMaxMin = needMin && needMax && weights[id].combineMaxMin;
      const aggregationSize = numCol * numRow * ELEMENTCOUNT;
      aggregationData = getFloatArray(aggregationData, aggregationSize);

      if (combineMaxMin) {
        maxMinData = getFloatArray(maxMinData, ELEMENTCOUNT);
        maxMinData.fill(-Infinity, 0, ELEMENTCOUNT - 1);
        maxMinData[ELEMENTCOUNT - 1] = Infinity;
      } else {
        if (needMin) {
          minData = getFloatArray(minData, ELEMENTCOUNT, Infinity);
          minData[ELEMENTCOUNT - 1] = 0;
        }

        if (needMax) {
          maxData = getFloatArray(maxData, ELEMENTCOUNT, -Infinity);
          maxData[ELEMENTCOUNT - 1] = 0;
        }
      }

      results[id] = Object.assign({}, weights[id], {
        aggregationData,
        minData,
        maxData,
        maxMinData
      });
    }

    return results;
  }

  runAggregationOnCPU(opts) {
    const positions = opts.positions,
          cellSize = opts.cellSize,
          gridTransformMatrix = opts.gridTransformMatrix,
          viewport = opts.viewport,
          projectPoints = opts.projectPoints;
    let weights = opts.weights;
    const _this$state3 = this.state,
          numCol = _this$state3.numCol,
          numRow = _this$state3.numRow;
    const results = this.initCPUResults(opts);
    const gridTransformRequired = this.shouldTransformToGrid(opts);
    let gridPositions;
    const pos = [0, 0, 0];
    log.assert(gridTransformRequired || opts.changeFlags.cellSizeChanged);
    let posCount;

    if (gridTransformRequired) {
      posCount = positions.length / 2;
      gridPositions = new Float64Array(positions.length);
      this.setState({
        gridPositions
      });
    } else {
      gridPositions = this.state.gridPositions;
      weights = this.state.weights;
      posCount = gridPositions.length / 2;
    }

    const validCellIndices = new Set();

    for (let posIndex = 0; posIndex < posCount; posIndex++) {
      let x;
      let y;

      if (gridTransformRequired) {
        pos[0] = positions[posIndex * 2];
        pos[1] = positions[posIndex * 2 + 1];

        if (projectPoints) {
          var _viewport$project = viewport.project(pos);

          var _viewport$project2 = _slicedToArray(_viewport$project, 2);

          x = _viewport$project2[0];
          y = _viewport$project2[1];
        } else {
          var _worldToPixels = worldToPixels(pos, gridTransformMatrix);

          var _worldToPixels2 = _slicedToArray(_worldToPixels, 2);

          x = _worldToPixels2[0];
          y = _worldToPixels2[1];
        }

        gridPositions[posIndex * 2] = x;
        gridPositions[posIndex * 2 + 1] = y;
      } else {
        x = gridPositions[posIndex * 2];
        y = gridPositions[posIndex * 2 + 1];
      }

      const colId = Math.floor(x / cellSize[0]);
      const rowId = Math.floor(y / cellSize[1]);

      if (colId >= 0 && colId < numCol && rowId >= 0 && rowId < numRow) {
        const cellIndex = (colId + rowId * numCol) * ELEMENTCOUNT;
        validCellIndices.add(cellIndex);
        this.calculateAggregationData({
          weights,
          results,
          cellIndex,
          posIndex
        });
      }
    }

    this.calculateMeanMaxMinData({
      validCellIndices,
      results,
      weights
    });
    this.updateAggregationBuffers(opts, results);
    this.setState({
      results
    });
    return results;
  }

  updateCPUResultBuffer(_ref3) {
    let gl = _ref3.gl,
        bufferName = _ref3.bufferName,
        id = _ref3.id,
        data = _ref3.data,
        result = _ref3.result;
    const resources = this.state.resources;
    const resourceName = `cpu-result-${id}-${bufferName}`;
    result[bufferName] = result[bufferName] || resources[resourceName];

    if (result[bufferName]) {
      result[bufferName].setData({
        data
      });
    } else {
      resources[resourceName] = new Buffer(gl, data);
      result[bufferName] = resources[resourceName];
    }
  }

  updateAggregationBuffers(opts, results) {
    if (!opts.createBufferObjects) {
      return;
    }

    const weights = opts.weights || this.state.weights;

    for (const id in results) {
      const _results$id2 = results[id],
            aggregationData = _results$id2.aggregationData,
            minData = _results$id2.minData,
            maxData = _results$id2.maxData,
            maxMinData = _results$id2.maxMinData;
      const _weights$id5 = weights[id],
            needMin = _weights$id5.needMin,
            needMax = _weights$id5.needMax;
      const combineMaxMin = needMin && needMax && weights[id].combineMaxMin;
      this.updateCPUResultBuffer({
        gl: this.gl,
        bufferName: 'aggregationBuffer',
        id,
        data: aggregationData,
        result: results[id]
      });

      if (combineMaxMin) {
        this.updateCPUResultBuffer({
          gl: this.gl,
          bufferName: 'maxMinBuffer',
          id,
          data: maxMinData,
          result: results[id]
        });
      } else {
        if (needMin) {
          this.updateCPUResultBuffer({
            gl: this.gl,
            bufferName: 'minBuffer',
            id,
            data: minData,
            result: results[id]
          });
        }

        if (needMax) {
          this.updateCPUResultBuffer({
            gl: this.gl,
            bufferName: 'maxBuffer',
            id,
            data: maxData,
            result: results[id]
          });
        }
      }
    }
  }

  getAggregateData(opts) {
    const results = {};
    const _this$state4 = this.state,
          textures = _this$state4.textures,
          framebuffers = _this$state4.framebuffers,
          maxMinFramebuffers = _this$state4.maxMinFramebuffers,
          minFramebuffers = _this$state4.minFramebuffers,
          maxFramebuffers = _this$state4.maxFramebuffers,
          weights = _this$state4.weights;

    for (const id in weights) {
      results[id] = {};
      const _weights$id6 = weights[id],
            needMin = _weights$id6.needMin,
            needMax = _weights$id6.needMax,
            combineMaxMin = _weights$id6.combineMaxMin;
      results[id].aggregationTexture = textures[id];
      results[id].aggregationBuffer = readPixelsToBuffer(framebuffers[id], {
        target: weights[id].aggregationBuffer,
        sourceType: 5126
      });

      if (needMin && needMax && combineMaxMin) {
        results[id].maxMinBuffer = readPixelsToBuffer(maxMinFramebuffers[id], {
          target: weights[id].maxMinBuffer,
          sourceType: 5126
        });
      } else {
        if (needMin) {
          results[id].minBuffer = readPixelsToBuffer(minFramebuffers[id], {
            target: weights[id].minBuffer,
            sourceType: 5126
          });
        }

        if (needMax) {
          results[id].maxBuffer = readPixelsToBuffer(maxFramebuffers[id], {
            target: weights[id].maxBuffer,
            sourceType: 5126
          });
        }
      }
    }

    this.trackGPUResultBuffers(results, weights);
    return results;
  }

  getAggregationModel() {
    let fp64 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const gl = this.gl,
          shaderCache = this.shaderCache;
    return new Model(gl, {
      id: 'Gird-Aggregation-Model',
      vs: fp64 ? AGGREGATE_TO_GRID_VS_FP64 : AGGREGATE_TO_GRID_VS,
      fs: AGGREGATE_TO_GRID_FS,
      modules: fp64 ? [project64] : ['project32'],
      shaderCache,
      vertexCount: 0,
      drawMode: 0
    });
  }

  getAllAggregationModel() {
    const gl = this.gl,
          shaderCache = this.shaderCache;
    const _this$state5 = this.state,
          numCol = _this$state5.numCol,
          numRow = _this$state5.numRow;
    return new Model(gl, {
      id: 'All-Aggregation-Model',
      vs: AGGREGATE_ALL_VS_FP64,
      fs: AGGREGATE_ALL_FS,
      modules: [fp64ShaderModule],
      shaderCache,
      vertexCount: 1,
      drawMode: 0,
      isInstanced: true,
      instanceCount: numCol * numRow,
      attributes: {
        position: [0, 0]
      }
    });
  }

  getMeanTransform(opts) {
    if (this.meanTransform) {
      this.meanTransform.update(opts);
    } else {
      this.meanTransform = new Transform(this.gl, Object.assign({}, {
        vs: TRANSFORM_MEAN_VS,
        _targetTextureVarying: 'meanValues'
      }, opts));
    }

    return this.meanTransform;
  }

  renderAggregateData(opts) {
    const cellSize = opts.cellSize,
          viewport = opts.viewport,
          gridTransformMatrix = opts.gridTransformMatrix,
          projectPoints = opts.projectPoints;
    const _this$state6 = this.state,
          numCol = _this$state6.numCol,
          numRow = _this$state6.numRow,
          windowSize = _this$state6.windowSize,
          maxMinFramebuffers = _this$state6.maxMinFramebuffers,
          minFramebuffers = _this$state6.minFramebuffers,
          maxFramebuffers = _this$state6.maxFramebuffers,
          weights = _this$state6.weights;
    const uProjectionMatrixFP64 = fp64ifyMatrix4(gridTransformMatrix);
    const gridSize = [numCol, numRow];
    const parameters = {
      blend: true,
      depthTest: false,
      blendFunc: [1, 1]
    };
    const moduleSettings = {
      viewport
    };
    const uniforms = {
      windowSize,
      cellSize,
      gridSize,
      uProjectionMatrix: gridTransformMatrix,
      uProjectionMatrixFP64,
      projectPoints
    };

    for (const id in weights) {
      const _weights$id7 = weights[id],
            needMin = _weights$id7.needMin,
            needMax = _weights$id7.needMax;
      const combineMaxMin = needMin && needMax && weights[id].combineMaxMin;
      this.renderToWeightsTexture({
        id,
        parameters,
        moduleSettings,
        uniforms,
        gridSize
      });

      if (combineMaxMin) {
        this.renderToMaxMinTexture({
          id,
          parameters: Object.assign({}, parameters, {
            blendEquation: MAX_MIN_BLEND_EQUATION
          }),
          gridSize,
          minOrMaxFb: maxMinFramebuffers[id],
          clearParams: {
            clearColor: [0, 0, 0, MAX_32_BIT_FLOAT]
          },
          combineMaxMin
        });
      } else {
        if (needMin) {
          this.renderToMaxMinTexture({
            id,
            parameters: Object.assign({}, parameters, {
              blendEquation: MIN_BLEND_EQUATION
            }),
            gridSize,
            minOrMaxFb: minFramebuffers[id],
            clearParams: {
              clearColor: [MAX_32_BIT_FLOAT, MAX_32_BIT_FLOAT, MAX_32_BIT_FLOAT, 0]
            },
            combineMaxMin
          });
        }

        if (needMax) {
          this.renderToMaxMinTexture({
            id,
            parameters: Object.assign({}, parameters, {
              blendEquation: MAX_BLEND_EQUATION
            }),
            gridSize,
            minOrMaxFb: maxFramebuffers[id],
            combineMaxMin
          });
        }
      }
    }
  }

  renderToMaxMinTexture(opts) {
    const id = opts.id,
          parameters = opts.parameters,
          gridSize = opts.gridSize,
          minOrMaxFb = opts.minOrMaxFb,
          combineMaxMin = opts.combineMaxMin,
          _opts$clearParams = opts.clearParams,
          clearParams = _opts$clearParams === void 0 ? {} : _opts$clearParams;
    const framebuffers = this.state.framebuffers;
    const gl = this.gl,
          allAggregationModel = this.allAggregationModel;
    minOrMaxFb.bind();
    gl.viewport(0, 0, gridSize[0], gridSize[1]);
    withParameters(gl, clearParams, () => {
      gl.clear(16384);
    });
    allAggregationModel.draw({
      parameters,
      uniforms: {
        uSampler: framebuffers[id].texture,
        gridSize,
        combineMaxMin
      }
    });
    minOrMaxFb.unbind();
  }

  renderToWeightsTexture(opts) {
    const id = opts.id,
          parameters = opts.parameters,
          moduleSettings = opts.moduleSettings,
          uniforms = opts.uniforms,
          gridSize = opts.gridSize;
    const _this$state7 = this.state,
          framebuffers = _this$state7.framebuffers,
          equations = _this$state7.equations,
          weightAttributes = _this$state7.weightAttributes,
          weights = _this$state7.weights;
    const gl = this.gl,
          gridAggregationModel = this.gridAggregationModel;
    const operation = weights[id].operation;
    framebuffers[id].bind();
    gl.viewport(0, 0, gridSize[0], gridSize[1]);
    const clearColor = operation === AGGREGATION_OPERATION.MIN ? [MAX_32_BIT_FLOAT, MAX_32_BIT_FLOAT, MAX_32_BIT_FLOAT, 0] : [0, 0, 0, 0];
    withParameters(gl, {
      clearColor
    }, () => {
      gl.clear(16384);
    });
    const attributes = {
      weights: weightAttributes[id]
    };
    gridAggregationModel.draw({
      parameters: Object.assign({}, parameters, {
        blendEquation: equations[id]
      }),
      moduleSettings,
      uniforms,
      attributes
    });
    framebuffers[id].unbind();

    if (operation === AGGREGATION_OPERATION.MEAN) {
      const _this$state8 = this.state,
            meanTextures = _this$state8.meanTextures,
            textures = _this$state8.textures;
      const transformOptions = {
        _sourceTextures: {
          aggregationValues: meanTextures[id]
        },
        _targetTexture: textures[id],
        elementCount: textures[id].width * textures[id].height
      };
      const meanTransform = this.getMeanTransform(transformOptions);
      meanTransform.run({
        parameters: {
          blend: false,
          depthTest: false
        }
      });
      framebuffers[id].attach({
        [36064]: textures[id]
      });
    }
  }

  runAggregationOnGPU(opts) {
    this.updateModels(opts);
    this.setupFramebuffers(opts);
    this.renderAggregateData(opts);
    const results = this.getAggregateData(opts);
    this.setState({
      results
    });
    return results;
  }

  setupFramebuffers(opts) {
    const _this$state9 = this.state,
          numCol = _this$state9.numCol,
          numRow = _this$state9.numRow,
          textures = _this$state9.textures,
          framebuffers = _this$state9.framebuffers,
          maxMinFramebuffers = _this$state9.maxMinFramebuffers,
          minFramebuffers = _this$state9.minFramebuffers,
          maxFramebuffers = _this$state9.maxFramebuffers,
          resources = _this$state9.resources,
          meanTextures = _this$state9.meanTextures,
          equations = _this$state9.equations,
          weights = _this$state9.weights;
    const framebufferSize = {
      width: numCol,
      height: numRow
    };

    for (const id in weights) {
      const _weights$id8 = weights[id],
            needMin = _weights$id8.needMin,
            needMax = _weights$id8.needMax,
            combineMaxMin = _weights$id8.combineMaxMin,
            operation = _weights$id8.operation;
      textures[id] = weights[id].aggregationTexture || textures[id] || getFloatTexture(this.gl, {
        id: `${id}-texture`,
        width: numCol,
        height: numRow
      });
      textures[id].resize(framebufferSize);
      let texture = textures[id];

      if (operation === AGGREGATION_OPERATION.MEAN) {
        meanTextures[id] = meanTextures[id] || getFloatTexture(this.gl, {
          id: `${id}-mean-texture`,
          width: numCol,
          height: numRow
        });
        meanTextures[id].resize(framebufferSize);
        texture = meanTextures[id];
      }

      if (framebuffers[id]) {
        framebuffers[id].attach({
          [36064]: texture
        });
      } else {
        framebuffers[id] = getFramebuffer(this.gl, {
          id: `${id}-fb`,
          width: numCol,
          height: numRow,
          texture
        });
      }

      framebuffers[id].resize(framebufferSize);
      equations[id] = EQUATION_MAP[operation];

      if (needMin || needMax) {
        if (needMin && needMax && combineMaxMin) {
          if (!maxMinFramebuffers[id]) {
            resources[`${id}-maxMin`] = getFloatTexture(this.gl, {
              id: `${id}-maxMinTex`
            });
            maxMinFramebuffers[id] = getFramebuffer(this.gl, {
              id: `${id}-maxMinFb`,
              texture: resources[`${id}-maxMin`]
            });
          }
        } else {
          if (needMin) {
            if (!minFramebuffers[id]) {
              resources[`${id}-min`] = getFloatTexture(this.gl, {
                id: `${id}-minTex`
              });
              minFramebuffers[id] = getFramebuffer(this.gl, {
                id: `${id}-minFb`,
                texture: resources[`${id}-min`]
              });
            }
          }

          if (needMax) {
            if (!maxFramebuffers[id]) {
              resources[`${id}-max`] = getFloatTexture(this.gl, {
                id: `${id}-maxTex`
              });
              maxFramebuffers[id] = getFramebuffer(this.gl, {
                id: `${id}-maxFb`,
                texture: resources[`${id}-max`]
              });
            }
          }
        }
      }
    }
  }

  setupModels() {
    let fp64 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (this.gridAggregationModel) {
      this.gridAggregationModel.delete();
    }

    this.gridAggregationModel = this.getAggregationModel(fp64);

    if (!this.allAggregationModel) {
      this.allAggregationModel = this.getAllAggregationModel();
    }
  }

  setupWeightAttributes(opts) {
    const _this$state10 = this.state,
          weightAttributes = _this$state10.weightAttributes,
          vertexCount = _this$state10.vertexCount,
          weights = _this$state10.weights,
          resources = _this$state10.resources;

    for (const id in weights) {
      const values = weights[id].values;

      if (Array.isArray(values) || values.constructor === Float32Array) {
        log.assert(values.length / 3 === vertexCount);
        const typedArray = Array.isArray(values) ? new Float32Array(values) : values;

        if (weightAttributes[id] instanceof Buffer) {
          weightAttributes[id].setData(typedArray);
        } else {
          resources[`${id}-buffer`] = new Buffer(this.gl, typedArray);
          weightAttributes[id] = resources[`${id}-buffer`];
        }
      } else {
        log.assert(values instanceof Buffer);
        weightAttributes[id] = values;
      }
    }
  }

  trackGPUResultBuffers(results, weights) {
    const resources = this.state.resources;

    for (const id in results) {
      if (results[id]) {
        for (const bufferName of BUFFER_NAMES) {
          if (results[id][bufferName] && weights[id][bufferName] !== results[id][bufferName]) {
            const name = `gpu-result-${id}-${bufferName}`;

            if (resources[name]) {
              resources[name].delete();
            }

            resources[name] = results[id][bufferName];
          }
        }
      }
    }
  }

  updateModels(opts) {
    const gl = this.gl;
    const positions = opts.positions,
          positions64xyLow = opts.positions64xyLow,
          changeFlags = opts.changeFlags;
    const _this$state11 = this.state,
          numCol = _this$state11.numCol,
          numRow = _this$state11.numRow;
    const aggregationModelAttributes = {};
    let modelDirty = false;

    if (opts.fp64 !== this.state.fp64) {
      this.setupModels(opts.fp64);
      this.setState({
        fp64: opts.fp64
      });
      modelDirty = true;
    }

    if (changeFlags.dataChanged || !this.state.positionsBuffer) {
      let _this$state12 = this.state,
          positionsBuffer = _this$state12.positionsBuffer,
          positions64xyLowBuffer = _this$state12.positions64xyLowBuffer;

      if (positionsBuffer) {
        positionsBuffer.delete();
      }

      if (positions64xyLowBuffer) {
        positions64xyLowBuffer.delete();
      }

      const vertexCount = positions.length / 2;
      positionsBuffer = new Buffer(gl, new Float32Array(positions));
      positions64xyLowBuffer = new Buffer(gl, {
        data: new Float32Array(positions64xyLow),
        accessor: {
          size: 2
        }
      });
      this.setState({
        positionsBuffer,
        positions64xyLowBuffer,
        vertexCount
      });
      this.setupWeightAttributes(opts);
      modelDirty = true;
    }

    if (modelDirty) {
      const _this$state13 = this.state,
            vertexCount = _this$state13.vertexCount,
            positionsBuffer = _this$state13.positionsBuffer,
            positions64xyLowBuffer = _this$state13.positions64xyLowBuffer;
      aggregationModelAttributes.positions = positionsBuffer;

      if (opts.fp64) {
        aggregationModelAttributes.positions64xyLow = positions64xyLowBuffer;
      }

      this.gridAggregationModel.setVertexCount(vertexCount);
      this.gridAggregationModel.setAttributes(aggregationModelAttributes);
    }

    if (changeFlags.cellSizeChanged || changeFlags.viewportChanged) {
      this.allAggregationModel.setInstanceCount(numCol * numRow);
    }
  }

}
//# sourceMappingURL=gpu-grid-aggregator.js.map