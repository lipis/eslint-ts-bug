"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _tokens = _interopRequireDefault(require("@openinvestco/tokens"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _TableHead = _interopRequireDefault(require("./TableHead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx jsx */
var _ref = process.env.NODE_ENV === "production" ? {
  name: "115h4hc-InputFilterTableHead",
  styles: "height:48px;width:90%;border:none;padding-left:8px;font-size:0.833rem;background-color:transparent;label:InputFilterTableHead;"
} : {
  name: "115h4hc-InputFilterTableHead",
  styles: "height:48px;width:90%;border:none;padding-left:8px;font-size:0.833rem;background-color:transparent;label:InputFilterTableHead;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlL0lucHV0RmlsdGVyVGFibGVIZWFkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2tCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlL0lucHV0RmlsdGVyVGFibGVIZWFkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB0b2tlbnMgZnJvbSBcIkBvcGVuaW52ZXN0Y28vdG9rZW5zXCI7XG5cbmltcG9ydCBGbGV4IGZyb20gXCIuLi9GbGV4XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvblwiO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiLi9UYWJsZUhlYWRcIjtcbmltcG9ydCB7IElucHV0RmlsdGVyVGFibGVIZWFkUHJvcHMgfSBmcm9tIFwiLi9UYWJsZVByb3BzLmRcIjtcblxuY29uc3QgSW5wdXRGaWx0ZXJUYWJsZUhlYWQgPSAoe1xuICBvbkNoYW5nZSxcbiAgdGl0bGUsXG4gIGN1cnJlbnRGaWx0ZXJWYWx1ZSxcbiAgYWxpZ24sXG59OiBJbnB1dEZpbHRlclRhYmxlSGVhZFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbaXNPcGVuLCB0b2dnbGVGaWx0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGlmIChpc09wZW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZsZXhcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGJhY2tncm91bmQ9XCIjZjBmMmY1XCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiOHB4XCJcbiAgICAgICAgcGFkZGluZ1JpZ2h0PVwiOHB4XCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e2N1cnJlbnRGaWx0ZXJWYWx1ZX1cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvbm8tYXV0b2ZvY3VzXG4gICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgb25CbHVyPXsoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmICghZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICB0b2dnbGVGaWx0ZXIoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RpdGxlLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCk6IHZvaWQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODMzcmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgb25LZXlQcmVzcz17KCk6IHZvaWQgPT4ge319XG4gICAgICAgICAgb25DbGljaz17KCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgb25DaGFuZ2UoXCJcIik7XG4gICAgICAgICAgICB0b2dnbGVGaWx0ZXIoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiY2FuY2VsXCIgY29sb3I9e3Rva2Vucy50aGVtZS5wcmltYXJ5fSBzaXplPXsxMn0gLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgb25DbGljaz17KCk6IHZvaWQgPT4gdG9nZ2xlRmlsdGVyKHRydWUpfVxuICAgICAgb25LZXlQcmVzcz17KCk6IHZvaWQgPT4gdG9nZ2xlRmlsdGVyKHRydWUpfVxuICAgID5cbiAgICAgIDxUYWJsZUhlYWQgYWxpZ249e2FsaWdufT5cbiAgICAgICAgPGRpdj57dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAgfX0+XG4gICAgICAgICAgPEljb24gbmFtZT1cInNlYXJjaFwiIGNvbG9yPXt0b2tlbnMudGhlbWUucHJpbWFyeX0gc2l6ZT17MTR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZpbHRlclRhYmxlSGVhZDtcbiJdfQ== */"
};

var InputFilterTableHead = function InputFilterTableHead(_ref2) {
  var _onChange = _ref2.onChange,
      title = _ref2.title,
      currentFilterValue = _ref2.currentFilterValue,
      align = _ref2.align;

  var _useState = (0, _react.useState)(false),
      isOpen = _useState[0],
      toggleFilter = _useState[1];

  if (isOpen) {
    return (0, _core.jsx)(_Flex.default, {
      justifyContent: "space-between",
      alignItems: "center",
      background: "#f0f2f5",
      borderRadius: "8px",
      paddingRight: "8px"
    }, (0, _core.jsx)("input", {
      value: currentFilterValue // eslint-disable-next-line jsx-a11y/no-autofocus
      ,
      autoFocus: true,
      onBlur: function onBlur(event) {
        if (!event.target.value.length) {
          toggleFilter(false);
        }
      },
      placeholder: title.toUpperCase(),
      onChange: function onChange(event) {
        return _onChange(event.target.value);
      },
      type: "text",
      css: _ref
    }), (0, _core.jsx)(_Flex.default, {
      justifyContent: "center",
      alignItems: "center",
      role: "button",
      tabIndex: 0,
      onKeyPress: function onKeyPress() {},
      onClick: function onClick() {
        _onChange("");

        toggleFilter(false);
      }
    }, (0, _core.jsx)(_Icon.default, {
      name: "cancel",
      color: _tokens.default.theme.primary,
      size: 12
    })));
  }

  return (0, _core.jsx)("div", {
    role: "presentation",
    onClick: function onClick() {
      return toggleFilter(true);
    },
    onKeyPress: function onKeyPress() {
      return toggleFilter(true);
    }
  }, (0, _core.jsx)(_TableHead.default, {
    align: align
  }, (0, _core.jsx)("div", null, title), (0, _core.jsx)("div", {
    style: {
      marginLeft: 10
    }
  }, (0, _core.jsx)(_Icon.default, {
    name: "search",
    color: _tokens.default.theme.primary,
    size: 14
  }))));
};

var _default = InputFilterTableHead;
exports.default = _default;