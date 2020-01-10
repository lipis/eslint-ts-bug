"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@emotion/core");

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _react = _interopRequireDefault(require("react"));

var _tokens = _interopRequireDefault(require("@openinvestco/tokens"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioItem = function RadioItem(props) {
  var _props$checked = props.checked,
      checked = _props$checked === void 0 ? false : _props$checked,
      onChange = props.onChange,
      label = props.label,
      disabled = props.disabled,
      value = props.value;

  var handleChange = function handleChange() {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (0, _core.jsx)(_Flex.default, {
    mb: "0.6rem",
    css:
    /*#__PURE__*/
    (0, _css2.default)({
      cursor: disabled ? "not-allowed" : "pointer"
    }, "label:RadioItem;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1JhZGlvR3JvdXAvUmFkaW9JdGVtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQk0iLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUmFkaW9Hcm91cC9SYWRpb0l0ZW0udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRva2VucyBmcm9tIFwiQG9wZW5pbnZlc3Rjby90b2tlbnNcIjtcblxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcbmltcG9ydCBGbGV4IGZyb20gXCIuLi9GbGV4XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uUHJvcHMge1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgb25DaGFuZ2U/OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcbiAgbGFiZWw/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgdmFsdWU/OiBhbnk7XG59XG5cbmNvbnN0IFJhZGlvSXRlbSA9IChwcm9wczogT3B0aW9uUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgY2hlY2tlZCA9IGZhbHNlLCBvbkNoYW5nZSwgbGFiZWwsIGRpc2FibGVkLCB2YWx1ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICghZGlzYWJsZWQgJiYgb25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgbWI9XCIwLjZyZW1cIlxuICAgICAgY3NzPXt7IGN1cnNvcjogZGlzYWJsZWQgPyBcIm5vdC1hbGxvd2VkXCIgOiBcInBvaW50ZXJcIiB9fVxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDaGFuZ2V9XG4gICAgPlxuICAgICAgPEZsZXg+XG4gICAgICAgIHtjaGVja2VkID8gKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBuYW1lPVwiY2hlY2tlZC1yYWRpb1wiXG4gICAgICAgICAgICBkYXRhLXRlc3RpZD17ZGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiBgY2hlY2tlZC1yYWRpbyAke3ZhbHVlfWB9XG4gICAgICAgICAgICBzaXplPXsxOH1cbiAgICAgICAgICAgIGNvbG9yPXtkaXNhYmxlZCA/IHRva2Vucy5jb2xvcnMucmViYXIgOiB0b2tlbnMudGhlbWUucHJpbWFyeX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBuYW1lPVwicmFkaW9cIlxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2Rpc2FibGVkID8gXCJkaXNhYmxlZFwiIDogYHVuY2hlY2tlZC1yYWRpbyAke3ZhbHVlfWB9XG4gICAgICAgICAgICBzaXplPXsxOH1cbiAgICAgICAgICAgIGNvbG9yPXtkaXNhYmxlZCA/IHRva2Vucy5jb2xvcnMucmViYXIgOiB0b2tlbnMudGhlbWUucHJpbWFyeX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9GbGV4PlxuICAgICAge2xhYmVsICYmIChcbiAgICAgICAgPEZsZXggbWFyZ2luTGVmdD1cIjFyZW1cIiBjb2xvcj17ZGlzYWJsZWQgPyB0b2tlbnMuY29sb3JzLnJlYmFyIDogXCJjdXJyZW50Y29sb3JcIn0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICApfVxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvSXRlbTtcbiJdfQ== */")),
    alignItems: "center",
    onClick: handleChange
  }, (0, _core.jsx)(_Flex.default, null, checked ? (0, _core.jsx)(_Icon.default, {
    name: "checked-radio",
    "data-testid": disabled ? "disabled" : "checked-radio " + value,
    size: 18,
    color: disabled ? _tokens.default.colors.rebar : _tokens.default.theme.primary
  }) : (0, _core.jsx)(_Icon.default, {
    name: "radio",
    "data-testid": disabled ? "disabled" : "unchecked-radio " + value,
    size: 18,
    color: disabled ? _tokens.default.colors.rebar : _tokens.default.theme.primary
  })), label && (0, _core.jsx)(_Flex.default, {
    marginLeft: "1rem",
    color: disabled ? _tokens.default.colors.rebar : "currentcolor"
  }, label));
};

var _default = RadioItem;
exports.default = _default;