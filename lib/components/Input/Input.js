"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@emotion/core");

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _tokens = _interopRequireDefault(require("@openinvestco/tokens"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _Paragraph = _interopRequireDefault(require("../Paragraph"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledLabel = (0, _styledBase.default)("label", {
  target: "ekb6ckq0",
  label: "StyledLabel"
})(process.env.NODE_ENV === "production" ? {
  name: "14u04we",
  styles: "width:100%;display:flex;position:relative;border-radius:0.25rem;flex-direction:column;"
} : {
  name: "14u04we",
  styles: "width:100%;display:flex;position:relative;border-radius:0.25rem;flex-direction:column;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0lucHV0L0lucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRZ0MiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSW5wdXQvSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHRva2VucyBmcm9tIFwiQG9wZW5pbnZlc3Rjby90b2tlbnNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5pbXBvcnQgRmxleCBmcm9tIFwiLi4vRmxleFwiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi4vUGFyYWdyYXBoXCI7XG5pbXBvcnQgeyBJbnB1dFByb3BzIH0gZnJvbSBcIi4vSW5wdXRQcm9wc1wiO1xuXG5jb25zdCBTdHlsZWRMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IElucHV0ID0gKHByb3BzOiBJbnB1dFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCB7XG4gICAgbGFiZWwsXG4gICAgdmFsdWUsXG4gICAgZGVmYXVsdFZhbHVlLFxuICAgIHR5cGUgPSBcInRleHRcIixcbiAgICBvbkJsdXIsXG4gICAgb25DaGFuZ2UsXG4gICAgb25Gb2N1cyxcbiAgICBlcnJvcixcbiAgICBpbnN0cnVjdGlvbnMsXG4gICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICBpY29uLFxuICAgIGxhYmVsU3R5bGVzLFxuICAgIGlucHV0U3R5bGVzLFxuICAgIHN0eWxlcyxcbiAgICBndXR0ZXJTdHlsZXMsXG4gICAgLi4ub3RoZXJQcm9wc1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGd1dHRlckNvbnRlbnQgPSBlcnJvciB8fCBpbnN0cnVjdGlvbnM7XG4gIGNvbnN0IGluaXRpYWxMYWJlbFZhbHVlID0gb3RoZXJQcm9wcy5hdXRvRm9jdXMgfHwgISFkZWZhdWx0VmFsdWUgfHwgISF2YWx1ZSB8fCBmYWxzZTtcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGUodmFsdWUgfHwgZGVmYXVsdFZhbHVlIHx8IFwiXCIpO1xuICBjb25zdCBbaXNMYWJlbFJhaXNlZCwgdG9nZ2xlTGFiZWxQb3NpdGlvbl0gPSB1c2VTdGF0ZShpbml0aWFsTGFiZWxWYWx1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpOiB2b2lkID0+IHtcbiAgICBzZXRMb2NhbFZhbHVlKHZhbHVlIHx8IGRlZmF1bHRWYWx1ZSB8fCBcIlwiKTtcbiAgfSwgW3ZhbHVlXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRMb2NhbFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25CbHVyRm4gPSAoZXZlbnQ6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcbiAgICBpZiAobG9jYWxWYWx1ZSkge1xuICAgICAgdG9nZ2xlTGFiZWxQb3NpdGlvbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9nZ2xlTGFiZWxQb3NpdGlvbihmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKG9uQmx1cikge1xuICAgICAgb25CbHVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uRm9jdXNGbiA9IChldmVudDogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgIHRvZ2dsZUxhYmVsUG9zaXRpb24odHJ1ZSk7XG4gICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgIG9uRm9jdXMoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGJvcmRlckNvbG9yPXtlcnJvciAmJiAhbG9jYWxWYWx1ZSA/IFwiI2VhNGUzY1wiIDogXCIjYmZjNGM5XCJ9XG4gICAgICBwYWRkaW5nPVwiMC41cmVtXCJcbiAgICAgIGJvcmRlclJhZGl1cz1cIjAuMjVyZW1cIlxuICAgICAgYm9yZGVyU3R5bGU9XCJzb2xpZFwiXG4gICAgICBib3JkZXJXaWR0aD1cIjFweFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGVycm9yICYmICFsb2NhbFZhbHVlID8gXCIjZmZkZmRmXCIgOiBcIiNmZmZcIixcbiAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8U3R5bGVkTGFiZWxcbiAgICAgICAgaHRtbEZvcj17YGlucHV0LSR7bGFiZWx9YH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAuLi5sYWJlbFN0eWxlcyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFBhcmFncmFwaFxuICAgICAgICAgIHR5cGU9XCJlbXBoYXNpc1wiXG4gICAgICAgICAgcGFkZGluZz1cIjAgMC4zcmVtXCJcbiAgICAgICAgICBtYXJnaW49XCIwXCJcbiAgICAgICAgICBjb2xvcj17ZXJyb3IgJiYgIWxvY2FsVmFsdWUgPyBcIiNlYTRlM2NcIiA6IFwiIzhhOTI5ZVwifVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIwIDAuM3JlbVwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ0b3AgLjNzLCB0cmFuc2Zvcm0gLjNzXCIsXG4gICAgICAgICAgICB0b3A6IGlzTGFiZWxSYWlzZWQgPyBcIi0uOXJlbVwiIDogXCIuNnJlbVwiLFxuICAgICAgICAgICAgbGVmdDogaXNMYWJlbFJhaXNlZCA/IFwiLjdyZW1cIiA6IFwiLjdyZW1cIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaXNMYWJlbFJhaXNlZCA/IFwic2NhbGUoLjYpXCIgOiBcInNjYWxlKDEpXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwidG9wIGxlZnRcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZXJyb3IgJiYgIWxvY2FsVmFsdWUgPyBcIiNmZmRmZGZcIiA6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgY29sb3I6IGVycm9yICYmICFsb2NhbFZhbHVlID8gXCIjZWE0ZTNjXCIgOiBcIiM4YTkyOWVcIixcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IGlzTGFiZWxSYWlzZWQgPyBcInVwcGVyY2FzZVwiIDogXCJjYXBpdGFsaXplXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPXtgaW5wdXQtJHtsYWJlbH1gfVxuICAgICAgICAgIGRhdGEtdGVzdGlkPXtkaXNhYmxlZCA/IFwiZGlzYWJsZWRcIiA6IGBpbnB1dC0ke2xhYmVsfWB9XG4gICAgICAgICAgbmFtZT17bGFiZWx9XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICB2YWx1ZT17bG9jYWxWYWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uQmx1cj17b25CbHVyRm59XG4gICAgICAgICAgb25Gb2N1cz17b25Gb2N1c0ZufVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcGFkZGluZzogXCIwIDAuNXJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjIuNHJlbVwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlcnJvciAmJiAhbG9jYWxWYWx1ZSA/IFwiI2ZmZGZkZlwiIDogXCIjZmZmXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gICAgICAgICAgICAuLi5pbnB1dFN0eWxlcyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRMYWJlbD5cbiAgICAgIHtpY29uICYmIDxJY29uIHNpemU9ezIwfSBuYW1lPXtpY29ufSBjb2xvcj17dG9rZW5zLnRoZW1lLnByaW1hcnl9IC8+fVxuICAgICAge2d1dHRlckNvbnRlbnQgJiYgIWxvY2FsVmFsdWUgJiYgKFxuICAgICAgICA8RmxleFxuICAgICAgICAgIGZvbnRTaXplPVwiMC42MHJlbVwiXG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgYm90dG9tPXswfVxuICAgICAgICAgIHBhZGRpbmc9XCIwLjE1cmVtIDFyZW1cIlxuICAgICAgICAgIGNvbG9yPXtlcnJvciAmJiAhbG9jYWxWYWx1ZSA/IFwiI2VhNGUzY1wiIDogXCJcIn1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgICAgIC4uLmd1dHRlclN0eWxlcyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2d1dHRlckNvbnRlbnR9XG4gICAgICAgIDwvRmxleD5cbiAgICAgICl9XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0= */"
});

var Input = function Input(props) {
  var label = props.label,
      value = props.value,
      defaultValue = props.defaultValue,
      _props$type = props.type,
      type = _props$type === void 0 ? "text" : _props$type,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      error = props.error,
      instructions = props.instructions,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      icon = props.icon,
      labelStyles = props.labelStyles,
      inputStyles = props.inputStyles,
      styles = props.styles,
      gutterStyles = props.gutterStyles,
      otherProps = _objectWithoutPropertiesLoose(props, ["label", "value", "defaultValue", "type", "onBlur", "onChange", "onFocus", "error", "instructions", "disabled", "icon", "labelStyles", "inputStyles", "styles", "gutterStyles"]);

  var gutterContent = error || instructions;
  var initialLabelValue = otherProps.autoFocus || !!defaultValue || !!value || false;

  var _useState = (0, _react.useState)(value || defaultValue || ""),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var _useState2 = (0, _react.useState)(initialLabelValue),
      isLabelRaised = _useState2[0],
      toggleLabelPosition = _useState2[1];

  (0, _react.useEffect)(function () {
    setLocalValue(value || defaultValue || "");
  }, [value]);

  var handleChange = function handleChange(event) {
    var newValue = event.target.value;

    if (value === undefined) {
      setLocalValue(newValue);
    }

    if (onChange !== undefined) {
      onChange(newValue);
    }
  };

  var onBlurFn = function onBlurFn(event) {
    if (localValue) {
      toggleLabelPosition(true);
    } else {
      toggleLabelPosition(false);
    }

    if (onBlur) {
      onBlur(event.target.value);
    }
  };

  var onFocusFn = function onFocusFn(event) {
    toggleLabelPosition(true);

    if (onFocus) {
      onFocus(event.target.value);
    }
  };

  return (0, _core.jsx)(_Flex.default, {
    position: "relative",
    alignItems: "center",
    borderColor: error && !localValue ? "#ea4e3c" : "#bfc4c9",
    padding: "0.5rem",
    borderRadius: "0.25rem",
    borderStyle: "solid",
    borderWidth: "1px",
    style: _extends({
      backgroundColor: error && !localValue ? "#ffdfdf" : "#fff"
    }, styles)
  }, (0, _core.jsx)(StyledLabel, {
    htmlFor: "input-" + label,
    style: _extends({}, labelStyles)
  }, (0, _core.jsx)(_Paragraph.default, {
    type: "emphasis",
    padding: "0 0.3rem",
    margin: "0",
    color: error && !localValue ? "#ea4e3c" : "#8a929e",
    style: {
      position: "absolute",
      padding: "0 0.3rem",
      transition: "top .3s, transform .3s",
      top: isLabelRaised ? "-.9rem" : ".6rem",
      left: isLabelRaised ? ".7rem" : ".7rem",
      transform: isLabelRaised ? "scale(.6)" : "scale(1)",
      transformOrigin: "top left",
      backgroundColor: error && !localValue ? "#ffdfdf" : "#fff",
      color: error && !localValue ? "#ea4e3c" : "#8a929e",
      textTransform: isLabelRaised ? "uppercase" : "capitalize"
    }
  }, label), (0, _core.jsx)("input", _extends({
    id: "input-" + label,
    "data-testid": disabled ? "disabled" : "input-" + label,
    name: label,
    type: type,
    value: localValue,
    onChange: handleChange,
    onBlur: onBlurFn,
    onFocus: onFocusFn,
    disabled: disabled,
    style: _extends({
      padding: "0 0.5rem",
      height: "2.4rem",
      border: "none",
      outline: "none",
      backgroundColor: error && !localValue ? "#ffdfdf" : "#fff",
      fontSize: "1rem"
    }, inputStyles)
  }, otherProps))), icon && (0, _core.jsx)(_Icon.default, {
    size: 20,
    name: icon,
    color: _tokens.default.theme.primary
  }), gutterContent && !localValue && (0, _core.jsx)(_Flex.default, {
    fontSize: "0.60rem",
    position: "absolute",
    bottom: 0,
    padding: "0.15rem 1rem",
    color: error && !localValue ? "#ea4e3c" : "",
    style: _extends({
      textTransform: "uppercase"
    }, gutterStyles)
  }, gutterContent));
};

var _default = Input;
exports.default = _default;