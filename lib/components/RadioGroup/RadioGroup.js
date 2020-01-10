"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _RadioItem = _interopRequireDefault(require("./RadioItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RadioGroup = function RadioGroup(props) {
  var options = props.options,
      defaultValue = props.defaultValue,
      value = props.value,
      onChange = props.onChange,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? [] : _props$disabled,
      rootProps = _objectWithoutPropertiesLoose(props, ["options", "defaultValue", "value", "onChange", "disabled"]);

  var _useState = (0, _react.useState)(value || defaultValue || null),
      selectedValue = _useState[0],
      setSelectedValue = _useState[1];

  (0, _react.useEffect)(function () {
    setSelectedValue(value || defaultValue || null);
  }, [value]);

  var handleChange = function handleChange(val) {
    if (onChange) {
      onChange(val);
    }

    if (value === undefined) {
      setSelectedValue(val);
    }
  };

  return (0, _core.jsx)(_Flex.default, _extends({
    flexDirection: "column"
  }, rootProps), options.map(function (option) {
    return (0, _core.jsx)(_RadioItem.default, {
      key: option.label,
      label: option.label,
      value: option.value,
      onChange: handleChange,
      checked: option.value === selectedValue,
      disabled: disabled.includes(option.value)
    });
  }));
};

var _default = RadioGroup;
exports.default = _default;