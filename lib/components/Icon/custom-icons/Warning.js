"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Warning = function Warning(_ref) {
  var size = _ref.size,
      color = _ref.color,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "color"]);

  return (0, _core.jsx)("svg", _extends({
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18"
  }, props), (0, _core.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.971 17H1L8.98549 1.02905L16.971 17Z",
    stroke: color,
    strokeWidth: "1.42274",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0, _core.jsx)("path", {
    d: "M8.98566 7.56274V11.9175",
    stroke: color,
    strokeWidth: "1.42274",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0, _core.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.98524 13.3705C8.5833 13.3705 8.25989 13.6966 8.25989 14.0959C8.25989 14.4978 8.5833 14.8226 8.98524 14.8226C9.38584 14.8226 9.71058 14.4978 9.71058 14.0959C9.71058 13.6966 9.38584 13.3705 8.98524 13.3705Z",
    fill: color
  }));
};

var _default = Warning;
exports.default = _default;