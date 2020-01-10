"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Button = _interopRequireDefault(require("../Button"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getModalWrapper = function getModalWrapper(id) {
  var modalWrapper = document.querySelector("#" + id);

  if (!modalWrapper) {
    modalWrapper = document.createElement("div");
    modalWrapper.setAttribute("id", id);
    document.body.appendChild(modalWrapper);
    return modalWrapper;
  }

  return modalWrapper;
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "c2yjq3-Modal",
  styles: "top:0;right:0;label:Modal;"
} : {
  name: "c2yjq3-Modal",
  styles: "top:0;right:0;label:Modal;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RFkiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b25cIjtcbmltcG9ydCBGbGV4LCB7IEZsZXhQcm9wcyB9IGZyb20gXCIuLi9GbGV4XCI7XG5cbmNvbnN0IGdldE1vZGFsV3JhcHBlciA9IChpZDogc3RyaW5nKTogRWxlbWVudCA9PiB7XG4gIGxldCBtb2RhbFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcblxuICBpZiAoIW1vZGFsV3JhcHBlcikge1xuICAgIG1vZGFsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxXcmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsV3JhcHBlcik7XG4gICAgcmV0dXJuIG1vZGFsV3JhcHBlcjtcbiAgfVxuICByZXR1cm4gbW9kYWxXcmFwcGVyO1xufTtcblxuaW50ZXJmYWNlIE1vZGFsUHJvcHMgZXh0ZW5kcyBGbGV4UHJvcHMge1xuICBjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdO1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBNb2RhbDogUmVhY3QuU0ZDPE1vZGFsUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGlzT3BlbixcbiAgb25DbG9zZSxcbiAgLi4ucHJvcHNcbn06IE1vZGFsUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwgPT4ge1xuICBpZiAoaXNPcGVuKSB7XG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAgIDxGbGV4XG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGJhY2tncm91bmQ9XCJyZ2JhKDIxLCAyOSwgNDEsIDAuNilcIlxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgIC8vIFRPRE86IHVzZSB6LWluZGV4IHZpYSB0b2tlbnNcbiAgICAgICAgekluZGV4PXs5OTk5fVxuICAgICAgICBsZWZ0PXswfVxuICAgICAgICB0b3A9ezB9XG4gICAgICA+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgYmFja2dyb3VuZD1cIiNmZmZcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHhcIlxuICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgIHBhZGRpbmc9XCIzMnB4XCJcbiAgICAgICAgICBtaW5IZWlnaHQ9XCIxMDBweFwiXG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjbG91ZFwiXG4gICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgIG1hcmdpbj1cIjI0cHhcIlxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RnJhZ21lbnQ+e2NoaWxkcmVufTwvRnJhZ21lbnQ+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRmxleD4sXG4gICAgICBnZXRNb2RhbFdyYXBwZXIoXCJtYXR0ZXItLW1vZGFsLXJvb3RcIiksXG4gICAgKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl19 */"
};

var Modal = function Modal(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "isOpen", "onClose"]);

  if (isOpen) {
    return _reactDom.default.createPortal((0, _core.jsx)(_Flex.default, {
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(21, 29, 41, 0.6)",
      width: "100%",
      height: "100%",
      position: "fixed" // TODO: use z-index via tokens
      ,
      zIndex: 9999,
      left: 0,
      top: 0
    }, (0, _core.jsx)(_Flex.default, _extends({
      flexDirection: "column",
      background: "#fff",
      borderRadius: "10px",
      position: "relative",
      padding: "32px",
      minHeight: "100px"
    }, props), (0, _core.jsx)(_Button.default, {
      onClick: onClose,
      variant: "cloud",
      icon: "cancel",
      margin: "24px",
      position: "absolute",
      css: _ref2
    }), (0, _core.jsx)(_react.Fragment, null, children))), getModalWrapper("matter--modal-root"));
  }

  return null;
};

var _default = Modal;
exports.default = _default;