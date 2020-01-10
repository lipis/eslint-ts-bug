"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _tokens = _interopRequireDefault(require("@openinvestco/tokens"));

var _reactTable = _interopRequireDefault(require("react-table"));

var _reactTableHocFixedColumns = _interopRequireDefault(require("react-table-hoc-fixed-columns"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _Flex = _interopRequireDefault(require("../Flex"));

require("react-table/react-table.css");

require("react-table-hoc-fixed-columns/lib/styles.css");

var _Pagination = _interopRequireDefault(require("../Pagination"));

var _TableHead = _interopRequireDefault(require("./TableHead"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _InputFilterTableHead = _interopRequireDefault(require("./InputFilterTableHead"));

var _DropDownFilterTableHead = _interopRequireDefault(require("./DropDownFilterTableHead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ReactTableFixedColumns = (0, _reactTableHocFixedColumns.default)(_reactTable.default);
var headerComponents = {
  text: _InputFilterTableHead.default,
  dropdown: _DropDownFilterTableHead.default,
  default: _TableHead.default
};

var getIconName = function getIconName(isDescending) {
  switch (isDescending) {
    case true:
      return "sort-down";

    default:
      return "sort-up";
  }
};

var Table = function Table(props) {
  var filtered = props.filtered,
      columns = props.columns,
      data = props.data,
      className = props.className,
      _getTheadProps = props.getTheadProps,
      _getTdProps = props.getTdProps,
      _getTrProps = props.getTrProps,
      _props$getTheadThProp = props.getTheadThProps,
      _getTheadThProps = _props$getTheadThProp === void 0 ? function () {} : _props$getTheadThProp,
      tableStyle = props.tableStyle,
      style = props.style,
      minRows = props.minRows,
      _props$dropdownMenuPo = props.dropdownMenuPosition,
      dropdownMenuPosition = _props$dropdownMenuPo === void 0 ? "bottom" : _props$dropdownMenuPo,
      rest = _objectWithoutPropertiesLoose(props, ["filtered", "columns", "data", "className", "getTheadProps", "getTdProps", "getTrProps", "getTheadThProps", "tableStyle", "style", "minRows", "dropdownMenuPosition"]);

  var initialState = [];

  var _useState = (0, _react.useState)(initialState),
      localFiltered = _useState[0],
      setLocalFiltered = _useState[1];

  var _useState2 = (0, _react.useState)({
    id: "",
    desc: false
  }),
      sortedColumn = _useState2[0],
      setColumn = _useState2[1];

  var filterColumn = function filterColumn(columnId, value) {
    var newFilter = {
      id: columnId,
      value: value
    };
    var filtersWithOutNew = localFiltered.filter(function (item) {
      return item.id !== columnId;
    });
    setLocalFiltered([].concat(filtersWithOutNew, [newFilter]));
  };

  var getFilterValue = function getFilterValue(filterId) {
    return (0, _get2.default)(localFiltered.find(function (_ref) {
      var id = _ref.id;
      return id === filterId;
    }), "value", "");
  };

  var columnsWithHeader = columns.map(function (_ref2) {
    var title = _ref2.title,
        _ref2$align = _ref2.align,
        align = _ref2$align === void 0 ? "flex-start" : _ref2$align,
        filterType = _ref2.filterType,
        options = _ref2.options,
        columnProps = _objectWithoutPropertiesLoose(_ref2, ["title", "align", "filterType", "options"]);

    var HeaderComponent = filterType ? headerComponents[filterType] : headerComponents.default;
    return _extends({
      Header: (0, _core.jsx)(HeaderComponent, {
        align: align,
        title: title,
        onChange: function onChange(value) {
          filterColumn(columnProps.id, value);
        },
        currentFilterValue: getFilterValue(columnProps.id),
        options: options
      }, (0, _core.jsx)(_Flex.default, null, title, columnProps.sortable && (0, _core.jsx)(_Icon.default, {
        style: {
          marginLeft: 20
        },
        size: 12,
        color: _tokens.default.theme.primary,
        name: sortedColumn.id && sortedColumn.id === columnProps.id ? getIconName(sortedColumn.desc) : "sort"
      }))),
      sortable: false,
      align: align
    }, columnProps);
  });
  return (0, _core.jsx)(ReactTableFixedColumns, _extends({
    PaginationComponent: function PaginationComponent(paginationProps) {
      return (0, _core.jsx)(_Pagination.default, _extends({}, paginationProps, {
        dropdownMenuPosition: dropdownMenuPosition
      }));
    },
    filtered: localFiltered || filtered,
    columns: columnsWithHeader,
    data: data,
    minRows: minRows || 0,
    defaultPageSize: 10,
    Header: _TableHead.default,
    css:
    /*#__PURE__*/
    (0, _core.css)("box-shadow:rgba(211,216,223,0.75) 0 11px 19px 0;border-radius:0.5rem;.rt-resizer{width:0;padding-left:1rem;right:-9px;}.rt-thead .rt-resizable-header:last-child{overflow:visible;}.rt-thead .rt-resizable-header-content{overflow:visible;}div.rt-thead.-headerGroups,div.rt-thead.-header{flex-shrink:0 !important;z-index:2 !important;border-bottom:1px solid ", _tokens.default.colors.haze, ";}div.rt-thead .rt-th:last-child{border:0 !important;}.rt-tr-group{flex:0;}.rthfc-td-fixed-left-last{border-right:1px solid ", _tokens.default.colors.haze, " !important;}.rt-tbody{background-color:#f7f7f7;}.rt-tbody .rt-tr-group{border:0;}.pagination-bottom{border-top:1px solid ", _tokens.default.colors.haze, ";}label:Table;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySGMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHRva2VucyBmcm9tIFwiQG9wZW5pbnZlc3Rjby90b2tlbnNcIjtcbmltcG9ydCBSZWFjdFRhYmxlIGZyb20gXCJyZWFjdC10YWJsZVwiO1xuaW1wb3J0IHdpdGhGaXhlZENvbHVtbnMgZnJvbSBcInJlYWN0LXRhYmxlLWhvYy1maXhlZC1jb2x1bW5zXCI7XG5pbXBvcnQgX2dldCBmcm9tIFwibG9kYXNoL2dldFwiO1xuaW1wb3J0IEZsZXggZnJvbSBcIi4uL0ZsZXhcIlxuXG5pbXBvcnQgXCJyZWFjdC10YWJsZS9yZWFjdC10YWJsZS5jc3NcIjtcbmltcG9ydCBcInJlYWN0LXRhYmxlLWhvYy1maXhlZC1jb2x1bW5zL2xpYi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9QYWdpbmF0aW9uXCI7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gXCIuL1RhYmxlSGVhZFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcbmltcG9ydCBJbnB1dEZpbHRlclRhYmxlSGVhZCBmcm9tIFwiLi9JbnB1dEZpbHRlclRhYmxlSGVhZFwiO1xuaW1wb3J0IERyb3BEb3duRmlsdGVyVGFibGVIZWFkIGZyb20gXCIuL0Ryb3BEb3duRmlsdGVyVGFibGVIZWFkXCI7XG5pbXBvcnQgeyBUYWJsZVByb3BzLCBIZWFkZXJDb21wb25lbnRTaGFwZSB9IGZyb20gXCIuL1RhYmxlUHJvcHMuZFwiO1xuXG5jb25zdCBSZWFjdFRhYmxlRml4ZWRDb2x1bW5zID0gd2l0aEZpeGVkQ29sdW1ucyhSZWFjdFRhYmxlKTtcblxuY29uc3QgaGVhZGVyQ29tcG9uZW50czogSGVhZGVyQ29tcG9uZW50U2hhcGUgPSB7XG4gIHRleHQ6IElucHV0RmlsdGVyVGFibGVIZWFkLFxuICBkcm9wZG93bjogRHJvcERvd25GaWx0ZXJUYWJsZUhlYWQsXG4gIGRlZmF1bHQ6IFRhYmxlSGVhZCxcbn07XG5cbmNvbnN0IGdldEljb25OYW1lID0gKGlzRGVzY2VuZGluZzogYm9vbGVhbik6IHN0cmluZyA9PiB7XG4gIHN3aXRjaCAoaXNEZXNjZW5kaW5nKSB7XG4gICAgY2FzZSB0cnVlOlxuICAgICAgcmV0dXJuIFwic29ydC1kb3duXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcInNvcnQtdXBcIjtcbiAgfVxufTtcblxuY29uc3QgVGFibGUgPSAocHJvcHM6IFRhYmxlUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWx0ZXJlZCxcbiAgICBjb2x1bW5zLFxuICAgIGRhdGEsXG4gICAgY2xhc3NOYW1lLFxuICAgIGdldFRoZWFkUHJvcHMsXG4gICAgZ2V0VGRQcm9wcyxcbiAgICBnZXRUclByb3BzLFxuICAgIGdldFRoZWFkVGhQcm9wcyA9ICgpOiB2b2lkID0+IHt9LFxuICAgIHRhYmxlU3R5bGUsXG4gICAgc3R5bGUsXG4gICAgbWluUm93cyxcbiAgICBkcm9wZG93bk1lbnVQb3NpdGlvbiA9IFwiYm90dG9tXCIsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZToge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgfVtdID0gW107XG4gIGNvbnN0IFtsb2NhbEZpbHRlcmVkLCBzZXRMb2NhbEZpbHRlcmVkXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IFtzb3J0ZWRDb2x1bW4sIHNldENvbHVtbl0gPSB1c2VTdGF0ZSh7IGlkOiBcIlwiLCBkZXNjOiBmYWxzZSB9KTtcblxuICBjb25zdCBmaWx0ZXJDb2x1bW4gPSAoY29sdW1uSWQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG5ld0ZpbHRlciA9IHtcbiAgICAgIGlkOiBjb2x1bW5JZCxcbiAgICAgIHZhbHVlLFxuICAgIH07XG4gICAgY29uc3QgZmlsdGVyc1dpdGhPdXROZXcgPSBsb2NhbEZpbHRlcmVkLmZpbHRlcigoaXRlbSk6IGJvb2xlYW4gPT4gaXRlbS5pZCAhPT0gY29sdW1uSWQpO1xuXG4gICAgc2V0TG9jYWxGaWx0ZXJlZChbLi4uZmlsdGVyc1dpdGhPdXROZXcsIG5ld0ZpbHRlcl0pO1xuICB9O1xuXG4gIGNvbnN0IGdldEZpbHRlclZhbHVlID0gKGZpbHRlcklkOiBzdHJpbmcpOiBzdHJpbmcgfCBudW1iZXIgPT4ge1xuICAgIHJldHVybiBfZ2V0KGxvY2FsRmlsdGVyZWQuZmluZCgoeyBpZCB9KTogYm9vbGVhbiA9PiBpZCA9PT0gZmlsdGVySWQpLCBcInZhbHVlXCIsIFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNvbHVtbnNXaXRoSGVhZGVyID0gY29sdW1ucy5tYXAoXG4gICAgKHsgdGl0bGUsIGFsaWduID0gXCJmbGV4LXN0YXJ0XCIsIGZpbHRlclR5cGUsIG9wdGlvbnMsIC4uLmNvbHVtblByb3BzIH06IGFueSk6IGFueSA9PiB7XG4gICAgICBjb25zdCBIZWFkZXJDb21wb25lbnQgPSBmaWx0ZXJUeXBlID8gaGVhZGVyQ29tcG9uZW50c1tmaWx0ZXJUeXBlXSA6IGhlYWRlckNvbXBvbmVudHMuZGVmYXVsdDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgSGVhZGVyOiAoXG4gICAgICAgICAgPEhlYWRlckNvbXBvbmVudFxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgIGZpbHRlckNvbHVtbihjb2x1bW5Qcm9wcy5pZCwgdmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXJWYWx1ZT17Z2V0RmlsdGVyVmFsdWUoY29sdW1uUHJvcHMuaWQpfVxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICB7Y29sdW1uUHJvcHMuc29ydGFibGUgJiYgKFxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyMCB9fVxuICAgICAgICAgICAgICAgICAgc2l6ZT17MTJ9XG4gICAgICAgICAgICAgICAgICBjb2xvcj17dG9rZW5zLnRoZW1lLnByaW1hcnl9XG4gICAgICAgICAgICAgICAgICBuYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkQ29sdW1uLmlkICYmIHNvcnRlZENvbHVtbi5pZCA9PT0gY29sdW1uUHJvcHMuaWRcbiAgICAgICAgICAgICAgICAgICAgICA/IGdldEljb25OYW1lKHNvcnRlZENvbHVtbi5kZXNjKVxuICAgICAgICAgICAgICAgICAgICAgIDogXCJzb3J0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvSGVhZGVyQ29tcG9uZW50PlxuICAgICAgICApLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgIGFsaWduLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcyxcbiAgICAgIH07XG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdFRhYmxlRml4ZWRDb2x1bW5zXG4gICAgICBQYWdpbmF0aW9uQ29tcG9uZW50PXsocGFnaW5hdGlvblByb3BzOiBhbnkpOiBKU1guRWxlbWVudCA9PiAoXG4gICAgICAgIDxQYWdpbmF0aW9uIHsuLi5wYWdpbmF0aW9uUHJvcHN9IGRyb3Bkb3duTWVudVBvc2l0aW9uPXtkcm9wZG93bk1lbnVQb3NpdGlvbn0gLz5cbiAgICAgICl9XG4gICAgICBmaWx0ZXJlZD17bG9jYWxGaWx0ZXJlZCB8fCBmaWx0ZXJlZH1cbiAgICAgIGNvbHVtbnM9e2NvbHVtbnNXaXRoSGVhZGVyfVxuICAgICAgZGF0YT17ZGF0YX1cbiAgICAgIG1pblJvd3M9e21pblJvd3MgfHwgMH1cbiAgICAgIGRlZmF1bHRQYWdlU2l6ZT17MTB9XG4gICAgICBIZWFkZXI9e1RhYmxlSGVhZH1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDIxMSwgMjE2LCAyMjMsIDAuNzUpIDAgMTFweCAxOXB4IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgLnJ0LXJlc2l6ZXIge1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgICAgICByaWdodDogLTlweDtcbiAgICAgICAgfVxuICAgICAgICAucnQtdGhlYWQgLnJ0LXJlc2l6YWJsZS1oZWFkZXI6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgLnJ0LXRoZWFkIC5ydC1yZXNpemFibGUtaGVhZGVyLWNvbnRlbnQge1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgIGRpdi5ydC10aGVhZC4taGVhZGVyR3JvdXBzLFxuICAgICAgICBkaXYucnQtdGhlYWQuLWhlYWRlciB7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB6LWluZGV4OiAyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dG9rZW5zLmNvbG9ycy5oYXplfTtcbiAgICAgICAgfVxuICAgICAgICBkaXYucnQtdGhlYWQgLnJ0LXRoOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5ydC10ci1ncm91cCB7XG4gICAgICAgICAgZmxleDogMDtcbiAgICAgICAgfVxuICAgICAgICAucnRoZmMtdGQtZml4ZWQtbGVmdC1sYXN0IHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke3Rva2Vucy5jb2xvcnMuaGF6ZX0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAucnQtdGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgIH1cbiAgICAgICAgLnJ0LXRib2R5IC5ydC10ci1ncm91cCB7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5wYWdpbmF0aW9uLWJvdHRvbSB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7dG9rZW5zLmNvbG9ycy5oYXplfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17YC1zdHJpcGVkICR7Y2xhc3NOYW1lfWB9XG4gICAgICBnZXRQcm9wcz17KCk6IG9iamVjdCA9PiAoe1xuICAgICAgICBzdHlsZTogeyBib3JkZXI6IDAsIGN1cnNvcjogXCJwb2ludGVyXCIsIC4uLnRhYmxlU3R5bGUgfSxcbiAgICAgIH0pfVxuICAgICAgZ2V0VGhlYWRQcm9wcz17KCk6IG9iamVjdCA9PiAoe1xuICAgICAgICBzdHlsZTogeyBmbGV4OiAwLCBib3hTaGFkb3c6IFwibm9uZVwiIH0sXG4gICAgICAgIC4uLihnZXRUaGVhZFByb3BzID8gZ2V0VGhlYWRQcm9wcygpIDoge30pLFxuICAgICAgfSl9XG4gICAgICBnZXRUZFByb3BzPXsoc3RhdGU6IGFueSwgcm93OiBhbnksIGNvbHVtbjogYW55KTogb2JqZWN0ID0+ICh7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgIG1pbkhlaWdodDogXCI1NnB4XCIsXG4gICAgICAgICAgcGFkZGluZzogXCIwIDI0cHhcIixcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBjb2x1bW4uYWxpZ24gfHwgXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLihnZXRUZFByb3BzID8gZ2V0VGRQcm9wcyhzdGF0ZSwgcm93LCBjb2x1bW4pIDoge30pLFxuICAgICAgfSl9XG4gICAgICBnZXRUclByb3BzPXsoc3RhdGU6IGFueSwgcm93OiBhbnkpOiBvYmplY3QgPT4gKHtcbiAgICAgICAgc3R5bGU6IHsgZmxleDogMCwgcGFkZGluZzogXCIwXCIgfSxcbiAgICAgICAgLi4uKGdldFRyUHJvcHMgPyBnZXRUclByb3BzKHN0YXRlLCByb3cpIDoge30pLFxuICAgICAgfSl9XG4gICAgICBnZXRUaGVhZFRoUHJvcHM9eygpOiBvYmplY3QgPT4ge1xuICAgICAgICBjb25zdCB7IHN0eWxlOiB0SGVhZFRoUHJvcFN0eWxlLCAuLi5nYXRoZXIgfSA9IGdldFRoZWFkVGhQcm9wcygpIHx8IHt9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4IDI0cHhcIixcbiAgICAgICAgICAgIGJvcmRlclJpZ2h0OiBgMXB4IHNvbGlkICR7dG9rZW5zLmNvbG9ycy5oYXplfWAsXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgLi4udEhlYWRUaFByb3BTdHlsZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLmdhdGhlcixcbiAgICAgICAgfTtcbiAgICAgIH19XG4gICAgICBkZWZhdWx0RmlsdGVyTWV0aG9kPXsoZmlsdGVyOiBhbnksIHJvdzogYW55KTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gZmlsdGVyLnBpdm90SWQgfHwgZmlsdGVyLmlkO1xuICAgICAgICByZXR1cm4gcm93W2lkXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBTdHJpbmcocm93W2lkXSlcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgLmluY2x1ZGVzKGZpbHRlci52YWx1ZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgIDogdHJ1ZTtcbiAgICAgIH19XG4gICAgICBvblNvcnRlZENoYW5nZT17KG5ld1NvcnRlZDogeyBpZDogc3RyaW5nOyBkZXNjOiBib29sZWFuIH1bXSk6IHZvaWQgPT4gc2V0Q29sdW1uKG5ld1NvcnRlZFswXSl9XG4gICAgICB7Li4ucmVzdH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG4iXX0= */")),
    style: style,
    className: "-striped " + className,
    getProps: function getProps() {
      return {
        style: _extends({
          border: 0,
          cursor: "pointer"
        }, tableStyle)
      };
    },
    getTheadProps: function getTheadProps() {
      return _extends({
        style: {
          flex: 0,
          boxShadow: "none"
        }
      }, _getTheadProps ? _getTheadProps() : {});
    },
    getTdProps: function getTdProps(state, row, column) {
      return _extends({
        style: {
          border: 0,
          minHeight: "56px",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: column.align || "flex-start"
        }
      }, _getTdProps ? _getTdProps(state, row, column) : {});
    },
    getTrProps: function getTrProps(state, row) {
      return _extends({
        style: {
          flex: 0,
          padding: "0"
        }
      }, _getTrProps ? _getTrProps(state, row) : {});
    },
    getTheadThProps: function getTheadThProps() {
      var _ref3 = _getTheadThProps() || {},
          tHeadThPropStyle = _ref3.style,
          gather = _objectWithoutPropertiesLoose(_ref3, ["style"]);

      return _extends({
        style: _extends({
          border: 0,
          padding: "6px 24px",
          borderRight: "1px solid " + _tokens.default.colors.haze,
          boxShadow: "none"
        }, tHeadThPropStyle)
      }, gather);
    },
    defaultFilterMethod: function defaultFilterMethod(filter, row) {
      var id = filter.pivotId || filter.id;
      return row[id] !== undefined ? String(row[id]).toLowerCase().includes(filter.value.toLowerCase()) : true;
    },
    onSortedChange: function onSortedChange(newSorted) {
      return setColumn(newSorted[0]);
    }
  }, rest));
};

var _default = Table;
exports.default = _default;