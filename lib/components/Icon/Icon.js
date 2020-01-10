"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _icons = _interopRequireDefault(require("@openinvestco/icons"));

var _RoundedCheckbox = _interopRequireDefault(require("./custom-icons/RoundedCheckbox"));

var _Checkbox = _interopRequireDefault(require("./custom-icons/Checkbox"));

var _EmptyCheckbox = _interopRequireDefault(require("./custom-icons/EmptyCheckbox"));

var _Warning = _interopRequireDefault(require("./custom-icons/Warning"));

var _RadioBtn = _interopRequireDefault(require("./custom-icons/RadioBtn"));

var _CheckedRadioBtn = _interopRequireDefault(require("./custom-icons/CheckedRadioBtn"));

var _DownSelector = _interopRequireDefault(require("./custom-icons/DownSelector"));

var _UpSelector = _interopRequireDefault(require("./custom-icons/UpSelector"));

var _Selector = _interopRequireDefault(require("./custom-icons/Selector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// map of custom icon components
// since our current icon bundling only works reliably for line-icons
var CUSTOM_ICONS = {
  "rounded-checkbox": _RoundedCheckbox.default,
  warning: _Warning.default,
  radio: _RadioBtn.default,
  "checked-radio": _CheckedRadioBtn.default,
  checkbox: _Checkbox.default,
  "empty-checkbox": _EmptyCheckbox.default,
  "sort-down": _DownSelector.default,
  "sort-up": _UpSelector.default,
  sort: _Selector.default
};

var Icon = function Icon(_ref) {
  var name = _ref.name,
      size = _ref.size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "currentColor" : _ref$color,
      props = _objectWithoutPropertiesLoose(_ref, ["name", "size", "color"]);

  var icon = _icons.default[name];

  if (CUSTOM_ICONS[name]) {
    return CUSTOM_ICONS[name](_extends({
      size: size,
      color: color
    }, props));
  }

  return (0, _core.jsx)("svg", _extends({
    width: size,
    height: size,
    viewBox: icon.viewBox,
    fill: "none"
  }, props), icon.paths.map(function (path, index) {
    return (0, _core.jsx)("path", {
      key: "path-" + (index + 1),
      d: path,
      stroke: color,
      strokeWidth: icon.strokeWidth,
      strokeLinejoin: icon.strokeLinejoin,
      strokeMiterlimit: icon.strokeMiterLimit,
      strokeLinecap: icon.strokeLinecap
    });
  }));
};

var _default = Icon;
exports.default = _default;