"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@deck.gl/core");

var _extractJsxLayers = _interopRequireDefault(require("./utils/extract-jsx-layers"));

var _positionChildrenUnderViews = _interopRequireDefault(require("./utils/position-children-under-views"));

var memoize = _core.experimental.memoize;

var propTypes = _core.Deck.getPropTypes(_propTypes.default);

var defaultProps = _core.Deck.defaultProps;

var DeckGL = function (_React$Component) {
  (0, _inherits2.default)(DeckGL, _React$Component);

  function DeckGL(props) {
    var _this;

    (0, _classCallCheck2.default)(this, DeckGL);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DeckGL).call(this, props));
    _this.viewports = null;
    _this.children = null;
    _this._needsRedraw = null;
    _this.pickObject = _this.pickObject.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.pickMultipleObjects = _this.pickMultipleObjects.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.pickObjects = _this.pickObjects.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this._extractJSXLayers = memoize(_extractJsxLayers.default);
    _this._positionChildrenUnderViews = memoize(_positionChildrenUnderViews.default);
    return _this;
  }

  (0, _createClass2.default)(DeckGL, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var DeckClass = this.props.Deck || _core.Deck;
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
      var canvas = (0, _react.createElement)('canvas', {
        ref: function ref(c) {
          return _this2.deckCanvas = c;
        },
        key: 'deck-canvas',
        id: this.props.id,
        style: style
      });
      return (0, _react.createElement)('div', {
        id: 'deckgl-wrapper'
      }, [children, canvas]);
    }
  }]);
  return DeckGL;
}(_react.default.Component);

exports.default = DeckGL;
DeckGL.propTypes = propTypes;
DeckGL.defaultProps = defaultProps;
//# sourceMappingURL=deckgl.js.map