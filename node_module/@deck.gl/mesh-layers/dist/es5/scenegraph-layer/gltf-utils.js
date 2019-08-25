"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForGLTFAssets = waitForGLTFAssets;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function waitForGLTFAssets(_x) {
  return _waitForGLTFAssets.apply(this, arguments);
}

function _waitForGLTFAssets() {
  _waitForGLTFAssets = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(gltfObjects) {
    var remaining;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            remaining = [];
            gltfObjects.scenes.forEach(function (scene) {
              scene.traverse(function (model) {
                Object.values(model.model.program.uniforms).forEach(function (uniform) {
                  if (uniform.loaded === false) {
                    remaining.push(uniform);
                  }
                });
              });
            });
            _context.next = 4;
            return waitWhileCondition(function () {
              return remaining.some(function (uniform) {
                return !uniform.loaded;
              });
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _waitForGLTFAssets.apply(this, arguments);
}

function waitWhileCondition(_x2) {
  return _waitWhileCondition.apply(this, arguments);
}

function _waitWhileCondition() {
  _waitWhileCondition = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2(condition) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!condition()) {
              _context2.next = 5;
              break;
            }

            _context2.next = 3;
            return new Promise(function (resolve) {
              return requestAnimationFrame(resolve);
            });

          case 3:
            _context2.next = 0;
            break;

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _waitWhileCondition.apply(this, arguments);
}
//# sourceMappingURL=gltf-utils.js.map