"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var UpSelector = function UpSelector(_ref) {
  var size = _ref.size,
      color = _ref.color,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "color"]);

  return (0, _core.jsx)("svg", _extends({
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 7 11"
  }, props), (0, _core.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 11L0 7L7 7L3.5 11Z",
    fill: color,
    fillOpacity: "0.5"
  }), (0, _core.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 0L7 4H0L3.5 0Z",
    fill: color
  }));
};

var _default = UpSelector;
exports.default = _default;