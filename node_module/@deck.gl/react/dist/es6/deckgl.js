import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { Deck, experimental } from '@deck.gl/core';
const memoize = experimental.memoize;
import extractJSXLayers from './utils/extract-jsx-layers';
import positionChildrenUnderViews from './utils/position-children-under-views';
const propTypes = Deck.getPropTypes(PropTypes);
const defaultProps = Deck.defaultProps;
export default class DeckGL extends React.Component {
  constructor(props) {
    super(props);
    this.viewports = null;
    this.children = null;
    this._needsRedraw = null;
    this.pickObject = this.pickObject.bind(this);
    this.pickMultipleObjects = this.pickMultipleObjects.bind(this);
    this.pickObjects = this.pickObjects.bind(this);
    this._extractJSXLayers = memoize(extractJSXLayers);
    this._positionChildrenUnderViews = memoize(positionChildrenUnderViews);
  }

  componentDidMount() {
    const DeckClass = this.props.Deck || Deck;
    this.deck = this.deck || new DeckClass(Object.assign({}, this.props, {
      canvas: this.deckCanvas,
      _customRender: this._customRender.bind(this)
    }));

    this._updateFromProps(this.props);
  }

  shouldComponentUpdate(nextProps) {
    this._updateFromProps(nextProps);

    const childrenChanged = this.children !== this._parseJSX(nextProps).children;

    const viewsChanged = this.deck.viewManager && this.deck.viewManager.needsRedraw();
    return childrenChanged && !viewsChanged;
  }

  componentDidUpdate() {
    this._redrawDeck();
  }

  componentWillUnmount() {
    this.deck.finalize();
  }

  pickObject(opts) {
    return this.deck.pickObject(opts);
  }

  pickMultipleObjects(opts) {
    return this.deck.pickMultipleObjects(opts);
  }

  pickObjects(opts) {
    return this.deck.pickObjects(opts);
  }

  _redrawDeck() {
    if (this._needsRedraw) {
      this.deck._drawLayers(this._needsRedraw);

      this._needsRedraw = null;
    }
  }

  _customRender(redrawReason) {
    this._needsRedraw = redrawReason;
    const viewports = this.deck.viewManager.getViewports();

    if (viewports !== this.viewports) {
      this.forceUpdate();
    } else {
      this._redrawDeck();
    }
  }

  _parseJSX(props) {
    return this._extractJSXLayers({
      layers: props.layers,
      views: props.views,
      children: props.children
    });
  }

  _updateFromProps(props) {
    const _this$_parseJSX = this._parseJSX(props),
          layers = _this$_parseJSX.layers,
          views = _this$_parseJSX.views;

    const deckProps = Object.assign({}, props, {
      layers,
      views
    });
    this.deck.setProps(deckProps);
  }

  render() {
    const _ref = this.deck || {},
          viewManager = _ref.viewManager;

    this.viewports = viewManager && viewManager.getViewports();
    this.children = this._parseJSX(this.props).children;

    const children = this._positionChildrenUnderViews({
      children: this.children,
      viewports: this.viewports,
      deck: this.deck,
      ContextProvider: this.props.ContextProvider
    });

    const style = Object.assign({}, {
      position: 'absolute',
      left: 0,
      top: 0
    }, this.props.style);
    const canvas = createElement('canvas', {
      ref: c => this.deckCanvas = c,
      key: 'deck-canvas',
      id: this.props.id,
      style
    });
    return createElement('div', {
      id: 'deckgl-wrapper'
    }, [children, canvas]);
  }

}
DeckGL.propTypes = propTypes;
DeckGL.defaultProps = defaultProps;
//# sourceMappingURL=deckgl.js.map