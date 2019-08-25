import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React, { createElement } from 'react';
import { inheritsFrom } from './inherits-from';
import { Layer, View } from '@deck.gl/core';

function wrapInView(node) {
  if (!node) {
    return node;
  }

  if (typeof node === 'function') {
    return createElement(View, {}, node);
  }

  if (Array.isArray(node)) {
    return node.map(wrapInView);
  }

  if (inheritsFrom(node.type, View)) {
    return node;
  }

  return node;
}

export default function extractJSXLayers(_ref) {
  var children = _ref.children,
      layers = _ref.layers,
      views = _ref.views;
  var reactChildren = [];
  var jsxLayers = [];
  var jsxViews = {};
  React.Children.forEach(wrapInView(children), function (reactElement) {
    if (reactElement) {
      var ElementType = reactElement.type;

      if (inheritsFrom(ElementType, Layer)) {
        var layer = createLayer(ElementType, reactElement.props);
        jsxLayers.push(layer);
      } else {
        reactChildren.push(reactElement);
      }

      if (ElementType !== View && inheritsFrom(ElementType, View) && reactElement.props.id) {
        var view = new ElementType(reactElement.props);
        jsxViews[view.id] = view;
      }
    }
  });

  if (Object.keys(jsxViews).length > 0) {
    if (Array.isArray(views)) {
      views.forEach(function (view) {
        jsxViews[view.id] = view;
      });
    } else if (views) {
      jsxViews[views.id] = views;
    }

    views = Object.values(jsxViews);
  }

  layers = jsxLayers.length > 0 ? [].concat(jsxLayers, _toConsumableArray(layers)) : layers;
  return {
    layers: layers,
    children: reactChildren,
    views: views
  };
}

function createLayer(LayerType, reactProps) {
  var props = {};
  var defaultProps = LayerType.defaultProps || {};

  for (var key in reactProps) {
    if (defaultProps[key] !== reactProps[key]) {
      props[key] = reactProps[key];
    }
  }

  return new LayerType(props);
}
//# sourceMappingURL=extract-jsx-layers.js.map