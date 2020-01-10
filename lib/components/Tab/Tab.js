"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _tokens = _interopRequireDefault(require("@openinvestco/tokens"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "vyxnfc-Tab",
  styles: "display:inline-flex;label:Tab;"
} : {
  name: "vyxnfc-Tab",
  styles: "display:inline-flex;label:Tab;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYi9UYWIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFYyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UYWIvVGFiLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnQsXG4gIENoaWxkcmVuIGFzIFJlYWN0Q2hpbGRyZW4sXG4gIGlzVmFsaWRFbGVtZW50LFxuICBjbG9uZUVsZW1lbnQsXG4gIFJlYWN0Tm9kZSxcbiAgU0ZDLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0b2tlbnMgZnJvbSBcIkBvcGVuaW52ZXN0Y28vdG9rZW5zXCI7XG5pbXBvcnQgRmxleCBmcm9tIFwiLi4vRmxleFwiO1xuXG5pbnRlcmZhY2UgVGFiUGFuZVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc2hvdWxkUmVuZGVyPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuaW50ZXJmYWNlIFRhYlByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgZGVmYXVsdEFjdGl2ZVRhYjogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVGFiU3RhdGUge1xuICBhY3RpdmVUYWI6IHN0cmluZztcbn1cblxuY2xhc3MgVGFiIGV4dGVuZHMgQ29tcG9uZW50PFRhYlByb3BzLCBUYWJTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIFRhYlBhbmU6IFNGQzxUYWJQYW5lUHJvcHM+ID0gKHtcbiAgICBzaG91bGRSZW5kZXIgPSBmYWxzZSxcbiAgICBjaGlsZHJlbixcbiAgfTogVGFiUGFuZVByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsID0+IDxGcmFnbWVudD57c2hvdWxkUmVuZGVyID8gY2hpbGRyZW4gOiBudWxsfTwvRnJhZ21lbnQ+O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IocHJvcHM6IFRhYlByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBkZWZhdWx0QWN0aXZlVGFiIH0gPSBwcm9wcztcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVUYWI6IGRlZmF1bHRBY3RpdmVUYWIsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVGFiQ2hhbmdlID0gKGFjdGl2ZVRhYjogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVUYWIsXG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFjdGl2ZVRhYiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RmxleCBoZWlnaHQ9XCIxMDAlXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIGhlaWdodD1cIjY0cHhcIlxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI3cHhcIlxuICAgICAgICAgICAgICBwYWRkaW5nPVwiMCAxNnB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPVwiMTZweFwiXG4gICAgICAgICAgICAgIGJveFNoYWRvdz1cIjBweCAxcHggMTZweCByZ2JhKDE4MCwgMTg2LCAxOTUsIDAuNzQ4MTMyKVwiXG4gICAgICAgICAgICAgIGNzcz17eyBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1JlYWN0Q2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoZWxlbWVudDogUmVhY3ROb2RlKTogSlNYLkVsZW1lbnQgfCBudWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUgfTogYW55ID0gZWxlbWVudC5wcm9wcztcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3A9XCIzcHggc29saWQgdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbT1cIjNweCBzb2xpZCB0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPT09IGFjdGl2ZVRhYiA/IGAke3Rva2Vucy50aGVtZS5wcmltYXJ5fWAgOiBcInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9XCIxNjBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9XCIwIDE2cHhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17eyBjdXJzb3I6IFwicG9pbnRlclwiLCB0cmFuc2l0aW9uOiBcImFsbCAuM3MgZWFzZVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk6IHZvaWQgPT4gdGhpcy5oYW5kbGVUYWJDaGFuZ2UodGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICB7UmVhY3RDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChlbGVtZW50OiBSZWFjdE5vZGUpOiBKU1guRWxlbWVudCB8IG51bGwgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRpdGxlIH06IGFueSA9IGVsZW1lbnQucHJvcHM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXI6IHRpdGxlID09PSBhY3RpdmVUYWIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgPC9GbGV4PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiO1xuIl19 */"
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1c5o0cm-Tab",
  styles: "cursor:pointer;transition:all .3s ease;label:Tab;"
} : {
  name: "1c5o0cm-Tab",
  styles: "cursor:pointer;transition:all .3s ease;label:Tab;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYi9UYWIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGc0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVGFiL1RhYi50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEZyYWdtZW50LFxuICBDaGlsZHJlbiBhcyBSZWFjdENoaWxkcmVuLFxuICBpc1ZhbGlkRWxlbWVudCxcbiAgY2xvbmVFbGVtZW50LFxuICBSZWFjdE5vZGUsXG4gIFNGQyxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdG9rZW5zIGZyb20gXCJAb3BlbmludmVzdGNvL3Rva2Vuc1wiO1xuaW1wb3J0IEZsZXggZnJvbSBcIi4uL0ZsZXhcIjtcblxuaW50ZXJmYWNlIFRhYlBhbmVQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNob3VsZFJlbmRlcj86IGJvb2xlYW47XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmludGVyZmFjZSBUYWJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIGRlZmF1bHRBY3RpdmVUYWI6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRhYlN0YXRlIHtcbiAgYWN0aXZlVGFiOiBzdHJpbmc7XG59XG5cbmNsYXNzIFRhYiBleHRlbmRzIENvbXBvbmVudDxUYWJQcm9wcywgVGFiU3RhdGU+IHtcbiAgcHVibGljIHN0YXRpYyBUYWJQYW5lOiBTRkM8VGFiUGFuZVByb3BzPiA9ICh7XG4gICAgc2hvdWxkUmVuZGVyID0gZmFsc2UsXG4gICAgY2hpbGRyZW4sXG4gIH06IFRhYlBhbmVQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCA9PiA8RnJhZ21lbnQ+e3Nob3VsZFJlbmRlciA/IGNoaWxkcmVuIDogbnVsbH08L0ZyYWdtZW50PjtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHByb3BzOiBUYWJQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgZGVmYXVsdEFjdGl2ZVRhYiB9ID0gcHJvcHM7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlVGFiOiBkZWZhdWx0QWN0aXZlVGFiLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVRhYkNoYW5nZSA9IChhY3RpdmVUYWI6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlVGFiLFxuICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhY3RpdmVUYWIgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZsZXggaGVpZ2h0PVwiMTAwJVwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICBoZWlnaHQ9XCI2NHB4XCJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiN3B4XCJcbiAgICAgICAgICAgICAgcGFkZGluZz1cIjAgMTZweFwiXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT1cIjE2cHhcIlxuICAgICAgICAgICAgICBib3hTaGFkb3c9XCIwcHggMXB4IDE2cHggcmdiYSgxODAsIDE4NiwgMTk1LCAwLjc0ODEzMilcIlxuICAgICAgICAgICAgICBjc3M9e3sgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtSZWFjdENoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGVsZW1lbnQ6IFJlYWN0Tm9kZSk6IEpTWC5FbGVtZW50IHwgbnVsbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IHRpdGxlIH06IGFueSA9IGVsZW1lbnQucHJvcHM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wPVwiM3B4IHNvbGlkIHRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b209XCIzcHggc29saWQgdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbUNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID09PSBhY3RpdmVUYWIgPyBgJHt0b2tlbnMudGhlbWUucHJpbWFyeX1gIDogXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoPVwiMTYwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPVwiMCAxNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICBjc3M9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiwgdHJhbnNpdGlvbjogXCJhbGwgLjNzIGVhc2VcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpOiB2b2lkID0+IHRoaXMuaGFuZGxlVGFiQ2hhbmdlKHRpdGxlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAge1JlYWN0Q2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoZWxlbWVudDogUmVhY3ROb2RlKTogSlNYLkVsZW1lbnQgfCBudWxsID0+IHtcbiAgICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aXRsZSB9OiBhbnkgPSBlbGVtZW50LnByb3BzO1xuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgc2hvdWxkUmVuZGVyOiB0aXRsZSA9PT0gYWN0aXZlVGFiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgIDwvRmxleD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYjtcbiJdfQ== */"
};

var Tab =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Tab, _Component);

  function Tab(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleTabChange = function (activeTab) {
      _this.setState({
        activeTab: activeTab
      });
    };

    var defaultActiveTab = props.defaultActiveTab;
    _this.state = {
      activeTab: defaultActiveTab
    };
    return _this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var children = this.props.children;
    var activeTab = this.state.activeTab;
    return (0, _core.jsx)(_Flex.default, {
      height: "100%",
      flexDirection: "column"
    }, (0, _core.jsx)(_react.Fragment, null, (0, _core.jsx)("div", null, (0, _core.jsx)(_Flex.default, {
      height: "64px",
      borderRadius: "7px",
      padding: "0 16px",
      marginBottom: "16px",
      boxShadow: "0px 1px 16px rgba(180, 186, 195, 0.748132)",
      css: _ref
    }, _react.Children.map(children, function (element) {
      if ((0, _react.isValidElement)(element)) {
        var title = element.props.title;
        return (0, _core.jsx)(_Flex.default, {
          key: title,
          borderTop: "3px solid transparent",
          borderBottom: "3px solid transparent",
          borderBottomColor: title === activeTab ? "" + _tokens.default.theme.primary : "transparent",
          minWidth: "160px",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 16px",
          css: _ref2,
          onClick: function onClick() {
            return _this2.handleTabChange(title);
          }
        }, title);
      }

      return null;
    }))), (0, _core.jsx)(_react.Fragment, null, _react.Children.map(children, function (element) {
      if ((0, _react.isValidElement)(element)) {
        var title = element.props.title;
        return (0, _react.cloneElement)(element, {
          // @ts-ignore
          shouldRender: title === activeTab
        });
      }

      return null;
    }))));
  };

  return Tab;
}(_react.Component);

Tab.TabPane = function (_ref3) {
  var _ref3$shouldRender = _ref3.shouldRender,
      shouldRender = _ref3$shouldRender === void 0 ? false : _ref3$shouldRender,
      children = _ref3.children;
  return (0, _core.jsx)(_react.Fragment, null, shouldRender ? children : null);
};

var _default = Tab;
exports.default = _default;