"use strict";

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _RadioGroup = _interopRequireDefault(require("../RadioGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(_react2.cleanup);
var props = {
  defaultValue: 2,
  onChange: jest.fn(),
  disabled: [1],
  options: [{
    label: "radiobtn 1",
    value: 1
  }, {
    label: "radiobtn 2",
    value: 2
  }, {
    label: "radiobtn 3",
    value: 3
  }]
};
test("RadioGroup: test onChange", function () {
  var _render = (0, _react2.render)((0, _core.jsx)(_RadioGroup.default, props)),
      container = _render.container,
      getByText = _render.getByText,
      getByTestId = _render.getByTestId;

  expect(getByTestId("unchecked-radio 3")).toBeInTheDocument();
  var label = props.options[2].label;
  (0, _react2.waitForElement)(function () {
    return getByText(label);
  });

  _react2.fireEvent.click(getByText(label));

  expect(props.onChange).toHaveBeenCalled();
  expect(props.onChange).toHaveBeenCalledWith(3);
  expect(props.onChange.mock.calls.length).toBe(1);
  expect(getByTestId("checked-radio 3")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
test("RadioGroup: tests defaultValue", function () {
  var _render2 = (0, _react2.render)((0, _core.jsx)(_RadioGroup.default, props)),
      getByTestId = _render2.getByTestId;

  expect(getByTestId("checked-radio 2")).toBeInTheDocument();
});
test("RadioGroup: Disabled tests ", function () {
  var _render3 = (0, _react2.render)((0, _core.jsx)(_RadioGroup.default, props)),
      getByTestId = _render3.getByTestId;

  expect(getByTestId("disabled")).toBeInTheDocument();
});