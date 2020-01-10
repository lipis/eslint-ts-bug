"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _styledSystem = require("styled-system");

var _tokens = _interopRequireDefault(require("@openinvestco/tokens"));

var _ParagraphTypes = _interopRequireDefault(require("./ParagraphTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paragraph = (
/*#__PURE__*/
0, _styledBase.default)("p", {
  target: "e1lvaifo0",
  label: "Paragraph"
})("font-size:", function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "body" : _ref$type;
  return _ParagraphTypes.default[type].fontSize;
}, ";line-height:", function (_ref2) {
  var _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? "body" : _ref2$type;
  return _ParagraphTypes.default[type].lineHeight;
}, ";color:", _tokens.default.theme.text, ";", _styledSystem.typography, ";", _styledSystem.color, ";", _styledSystem.space, ";", _styledSystem.border, ";", _styledSystem.layout, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BhcmFncmFwaC9QYXJhZ3JhcGgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0QiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUGFyYWdyYXBoL1BhcmFncmFwaC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7XG4gIHR5cG9ncmFwaHksXG4gIGNvbG9yLFxuICBzcGFjZSxcbiAgYm9yZGVyLFxuICBsYXlvdXQsXG4gIExheW91dFByb3BzLFxuICBCb3JkZXJQcm9wcyxcbiAgU3BhY2VQcm9wcyxcbiAgVHlwb2dyYXBoeVByb3BzLFxuICBDb2xvclN0eWxlUHJvcHMsXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5pbXBvcnQgdG9rZW5zIGZyb20gXCJAb3BlbmludmVzdGNvL3Rva2Vuc1wiO1xuXG5pbXBvcnQgUGFyYWdyYXBoVHlwZXMgZnJvbSBcIi4vUGFyYWdyYXBoVHlwZXNcIjtcblxuaW50ZXJmYWNlIFBhcmFncmFwaFByb3BzXG4gIGV4dGVuZHMgU3BhY2VQcm9wcyxcbiAgICBUeXBvZ3JhcGh5UHJvcHMsXG4gICAgQ29sb3JTdHlsZVByb3BzLFxuICAgIEJvcmRlclByb3BzLFxuICAgIExheW91dFByb3BzIHtcbiAgLyoqIFZhbGlkIEpTWCAob3IpIFN0cmluZyB0byByZW5kZXIgaW5zaWRlIHRoZSBQYXJhZ3JhcGggY29tcG9uZW50ICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xuICAvKiogUGFyYWdyYXBoIHR5cGVcbiAgICogQGRlZmF1bHQgXCJib2R5XCJcbiAgICovXG4gIHR5cGU/OiBcImJvZHlcIiB8IFwiZW1waGFzaXNcIiB8IFwiY2FwdGlvblwiIHwgXCJkYW5nZXItc21hbGxcIiB8IFwibGlzdFwiO1xuICBhcz86IHN0cmluZztcbn1cblxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkPFwicFwiLCBQYXJhZ3JhcGhQcm9wcz4oXCJwXCIpYFxuICBmb250LXNpemU6ICR7KHsgdHlwZSA9IFwiYm9keVwiIH06IFBhcmFncmFwaFByb3BzKTogc3RyaW5nID0+IFBhcmFncmFwaFR5cGVzW3R5cGVdLmZvbnRTaXplfTtcbiAgbGluZS1oZWlnaHQ6ICR7KHsgdHlwZSA9IFwiYm9keVwiIH06IFBhcmFncmFwaFByb3BzKTogc3RyaW5nID0+IFBhcmFncmFwaFR5cGVzW3R5cGVdLmxpbmVIZWlnaHR9O1xuICBjb2xvcjogJHt0b2tlbnMudGhlbWUudGV4dH07XG4gICR7dHlwb2dyYXBoeX07XG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbiAgJHtib3JkZXJ9O1xuICAke2xheW91dH07XG5gO1xuXG5QYXJhZ3JhcGguZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiBcImJvZHlcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaDtcbiJdfQ== */"));
Paragraph.defaultProps = {
  type: "body"
};
var _default = Paragraph;
exports.default = _default;