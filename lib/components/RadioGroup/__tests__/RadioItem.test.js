"use strict";

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _RadioItem = _interopRequireDefault(require("../RadioItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(_react2.cleanup);
var props = {
  checked: false,
  onChange: function onChange() {},
  label: "label",
  value: 1,
  disabled: false
};
test("RadioItem: Unchecked radio input tests", function () {
  var _render = (0, _react2.render)((0, _core.jsx)(_RadioItem.default, props)),
      getByTestId = _render.getByTestId;

  expect(getByTestId("unchecked-radio 1")).toBeInTheDocument();
});
test("RadioItem: Checked radio input tests ", function () {
  props.checked = true;

  var _render2 = (0, _react2.render)((0, _core.jsx)(_RadioItem.default, props)),
      getByTestId = _render2.getByTestId;

  expect(getByTestId("checked-radio 1")).toBeInTheDocument();
});
test("RadioItem: Disabled behavior tests ", function () {
  props.disabled = true;

  var _render3 = (0, _react2.render)((0, _core.jsx)(_RadioItem.default, props)),
      getByTestId = _render3.getByTestId;

  expect(getByTestId("disabled")).toBeInTheDocument();
});