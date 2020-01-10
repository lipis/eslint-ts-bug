"use strict";

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _Input = _interopRequireDefault(require("../Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(_react2.cleanup);
var props = {
  defaultValue: "lorem ipsum",
  label: "test",
  disabled: false
};
test("Input: test onChange", function () {
  var _render = (0, _react2.render)((0, _core.jsx)(_Input.default, props)),
      container = _render.container,
      getByTestId = _render.getByTestId;

  var input = getByTestId("input-test");
  expect(input.value).toBe("lorem ipsum");

  _react2.fireEvent.change(input, {
    target: {
      value: "hi"
    }
  });

  expect(input.value).toBe("hi");
  expect(container).toMatchSnapshot();
});
test("Input: Disabled behavior tests ", function () {
  props.disabled = true;

  var _render2 = (0, _react2.render)((0, _core.jsx)(_Input.default, props)),
      getByTestId = _render2.getByTestId;

  expect(getByTestId("disabled")).toBeInTheDocument();
});