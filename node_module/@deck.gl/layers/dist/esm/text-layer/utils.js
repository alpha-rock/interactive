import { log } from '@deck.gl/core';
var MISSING_CHAR_WIDTH = 32;
export function nextPowOfTwo(number) {
  return Math.pow(2, Math.ceil(Math.log2(number)));
}
export function buildMapping(_ref) {
  var characterSet = _ref.characterSet,
      getFontWidth = _ref.getFontWidth,
      fontHeight = _ref.fontHeight,
      buffer = _ref.buffer,
      maxCanvasWidth = _ref.maxCanvasWidth,
      _ref$mapping = _ref.mapping,
      mapping = _ref$mapping === void 0 ? {} : _ref$mapping,
      _ref$xOffset = _ref.xOffset,
      xOffset = _ref$xOffset === void 0 ? 0 : _ref$xOffset,
      _ref$yOffset = _ref.yOffset,
      yOffset = _ref$yOffset === void 0 ? 0 : _ref$yOffset;
  var row = 0;
  var x = xOffset;
  Array.from(characterSet).forEach(function (char, i) {
    if (!mapping[char]) {
      var width = getFontWidth(char, i);

      if (x + width + buffer * 2 > maxCanvasWidth) {
        x = 0;
        row++;
      }

      mapping[char] = {
        x: x + buffer,
        y: yOffset + row * (fontHeight + buffer * 2) + buffer,
        width: width,
        height: fontHeight,
        mask: true
      };
      x += width + buffer * 2;
    }
  });
  var rowHeight = fontHeight + buffer * 2;
  return {
    mapping: mapping,
    xOffset: x,
    yOffset: yOffset + row * rowHeight,
    canvasHeight: nextPowOfTwo(yOffset + (row + 1) * rowHeight)
  };
}
export function transformRow(row, iconMapping, lineHeight) {
  var offsetLeft = 0;
  var rowHeight = 0;
  var characters = Array.from(row);
  characters = characters.map(function (character, i) {
    var datum = {
      text: character,
      offsetLeft: offsetLeft
    };
    var frame = iconMapping[character];

    if (frame) {
      offsetLeft += frame.width;

      if (!rowHeight) {
        rowHeight = frame.height * lineHeight;
      }
    } else {
      log.warn("Missing character: ".concat(character))();
      offsetLeft += MISSING_CHAR_WIDTH;
    }

    return datum;
  });
  return {
    characters: characters,
    rowWidth: offsetLeft,
    rowHeight: rowHeight
  };
}
export function transformParagraph(paragraph, lineHeight, iconMapping, transformCharacter, transformedData) {
  var rows = paragraph.split('\n');
  var size = [0, 0];
  var offsetTop = 0;
  rows.forEach(function (row) {
    var _transformRow = transformRow(row, iconMapping, lineHeight),
        characters = _transformRow.characters,
        rowWidth = _transformRow.rowWidth,
        rowHeight = _transformRow.rowHeight;

    var rowSize = [rowWidth, rowHeight];
    characters.forEach(function (datum) {
      datum.offsetTop = offsetTop;
      datum.size = size;
      datum.rowSize = rowSize;
      transformedData.push(transformCharacter(datum));
    });
    offsetTop = offsetTop + rowHeight;
    size[0] = Math.max(size[0], rowWidth);
  });
  size[1] = offsetTop;
}
//# sourceMappingURL=utils.js.map