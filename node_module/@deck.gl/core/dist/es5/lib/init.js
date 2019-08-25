"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@loaders.gl/core");

var _images = require("@loaders.gl/images");

var _globals = require("../utils/globals");

var _log = _interopRequireDefault(require("../utils/log"));

var _jsonLoader = _interopRequireDefault(require("../utils/json-loader"));

var _shaderlib = require("../shaderlib");

var version = typeof "7.2.1" !== 'undefined' ? "7.2.1" : _globals.global.DECK_VERSION || 'untranspiled source';
var STARTUP_MESSAGE = 'set deck.log.priority=1 (or higher) to trace attribute updates';

if (_globals.global.deck && _globals.global.deck.VERSION !== version) {
  throw new Error("deck.gl - multiple versions detected: ".concat(_globals.global.deck.VERSION, " vs ").concat(version));
}

if (!_globals.global.deck) {
  _log.default.log(0, "deck.gl ".concat(version, " - ").concat(STARTUP_MESSAGE))();

  _globals.global.deck = _globals.global.deck || {
    VERSION: version,
    version: version,
    log: _log.default
  };
  (0, _core.registerLoaders)([_jsonLoader.default, _images.HTMLImageLoader]);
  (0, _shaderlib.initializeShaderModules)();
}

var _default = _globals.global.deck;
exports.default = _default;
//# sourceMappingURL=init.js.map