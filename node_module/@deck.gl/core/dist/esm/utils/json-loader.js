function isJSON(text) {
  var firstChar = text[0];
  var lastChar = text[text.length - 1];
  return firstChar === '{' && lastChar === '}' || firstChar === '[' && lastChar === ']';
}

export default {
  name: 'JSON',
  extensions: ['json', 'geojson'],
  testText: isJSON,
  parseTextSync: JSON.parse
};
//# sourceMappingURL=json-loader.js.map