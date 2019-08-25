import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { Deck, experimental } from '@deck.gl/core';
var memoize = experimental.memoize;
import extractJSXLayers from './utils/extract-jsx-layers';
import positionChildrenUnderViews from './utils/position-children-under-views';
var propTypes = Deck.getPropTypes(PropTypes);
var defaultProps = Deck.defaultProps;

var DeckGL = function (_React$Component) {
  _inherits(DeckGL, _React$Component);

  function DeckGL(props) {
    var _this;

    _classCallCheck(this, DeckGL);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DeckGL).call(this, props));
    _this.viewports = null;
    _this.children = null;
    _this._needsRedraw = null;
    _this.pickObject = _this.pickObject.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.pickMultipleObjects = _this.pickMultipleObjects.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.pickObjects = _this.pickObjects.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._extractJSXLayers = memoize(extractJSXLayers);
    _this._positionChildrenUnderViews = memoize(positionChildrenUnderViews);
    return _this;
  }

  _createClass(DeckGL, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var DeckClass = this.props.Deck || Deck;
      this.deck = this.deck || new DeckClass(Object.assign({}, this.props, {
        canvas: this.deckCanvas,
        _customRender: this._customRender.bind(this)
      }));

      this._updateFromProps(this.props);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      this._updateFromProps(nextProps);

      var childrenChanged = this.children !== this._parseJSX(nextProps).children;

      var viewsChanged = this.deck.viewManager && this.deck.viewManager.needsRedraw();
      return childrenChanged && !viewsChanged;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._redrawDeck();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.deck.finalize();
    }
  }, {
    key: "pickObject",
    value: function pickObject(opts) {
      return this.deck.pickObject(opts);
    }
  }, {
    key: "pickMultipleObjects",
    value: function pickMultipleObjects(opts) {
      return this.deck.pickMultipleObjects(opts);
    }
  }, {
    key: "pickObjects",
    value: function pickObjects(opts) {
      return this.deck.pickObjects(opts);
    }
  }, {
    key: "_redrawDeck",
    value: function _redrawDeck() {
      if (this._needsRedraw) {
        this.deck._drawLayers(this._needsRedraw);

        this._needsRedraw = null;
      }
    }
  }, {
    key: "_customRender",
    value: function _customRender(redrawReason) {
      this._needsRedraw = redrawReason;
      var viewports = this.deck.viewManager.getViewports();

      if (viewports !== this.viewports) {
        this.forceUpdate();
      } else {
        this._redrawDeck();
      }
    }
  }, {
    key: "_parseJSX",
    value: function _parseJSX(props) {
      return this._extractJSXLayers({
        layers: props.layers,
        views: props.views,
        children: props.children
      });
    }
  }, {
    key: "_updateFromProps",
    value: function _updateFromProps(props) {
      var _this$_parseJSX = this._parseJSX(props),
          layers = _this$_parseJSX.layers,
          views = _this$_parseJSX.views;

      var deckProps = Object.assign({}, props, {
        layers: layers,
        views: views
      });
      this.deck.setProps(deckProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _ref = this.deck || {},
          viewManager = _ref.viewManager;

      this.viewports = viewManager && viewManager.getViewports();
      this.children = this._parseJSX(this.props).children;

      var children = this._positionChildrenUnderViews({
        children: this.children,
        viewports: this.viewports,
        deck: this.deck,
        ContextProvider: this.props.ContextProvider
      });

      var style = Object.assign({}, {
        position: 'absolute',
        left: 0,
        top: 0
      }, this.props.style);
      var canvas = createElement('canvas', {
        ref: function ref(c) {
          return _this2.deckCanvas = c;
        },
        key: 'deck-canvas',
        id: this.props.id,
        style: style
      });
      return createElement('div', {
        id: 'deckgl-wrapper'
      }, [children, canvas]);
    }
  }]);

  return DeckGL;
}(React.Component);

export { DeckGL as default };
DeckGL.propTypes = propTypes;
DeckGL.defaultProps = defaultProps;
//# sourceMappingURL=deckgl.js.map