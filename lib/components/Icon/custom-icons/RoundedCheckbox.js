"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RoundedCheckbox = function RoundedCheckbox(_ref) {
  var size = _ref.size,
      color = _ref.color,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "color"]);

  return (0, _core.jsx)("svg", _extends({
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 25 25"
  }, props), (0, _core.jsx)("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M12 24.7c6.627 0 12-5.147 12-11.494 0-6.347-5.373-11.493-12-11.493S0 6.859 0 13.206s5.373 11.493 12 11.493z",
    clipRule: "evenodd"
  }), (0, _core.jsx)("path", {
    stroke: "#fff",
    d: "M6 14.175l4.025 3.529 7.998-7.058"
  }));
};

var _default = RoundedCheckbox;
exports.default = _default;