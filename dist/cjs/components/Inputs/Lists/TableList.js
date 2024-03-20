"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var InputChooser_1 = __importDefault(require("../../core/InputChooser"));
var fa_1 = require("react-icons/fa");
var styled_components_1 = __importDefault(require("styled-components"));
var index_1 = require("../../core/index");
var Table = styled_components_1.default.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"], ["\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"])));
var TableHead = styled_components_1.default.thead(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var TableBody = styled_components_1.default.tbody(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var TableTH = styled_components_1.default.th(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: sticky;\n  top: 0;\n  background-color: gainsboro;\n  z-index: 1;\n  padding:5px\n"], ["\n  position: sticky;\n  top: 0;\n  background-color: gainsboro;\n  z-index: 1;\n  padding:5px\n"])));
var TableTD = styled_components_1.default.td(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var TableTR = styled_components_1.default.tr(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
var TableHeaderTR = styled_components_1.default.tr(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n"], ["\n"])));
var IconUp = (0, styled_components_1.default)(fa_1.FaPlusSquare)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: green;\n  font-size: 1.5em;\n  margin: 2px 5px;\n  transition: 0.2s all ease-in-out;\n  &:hover {\n    filter: brightness(110%);\n    box-shadow: 1px 1px 10px 1px green;\n  }\n"], ["\n  color: green;\n  font-size: 1.5em;\n  margin: 2px 5px;\n  transition: 0.2s all ease-in-out;\n  &:hover {\n    filter: brightness(110%);\n    box-shadow: 1px 1px 10px 1px green;\n  }\n"])));
var IconDown = (0, styled_components_1.default)(fa_1.FaMinusSquare)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: red;\n  font-size: 1.5em;\n  margin: 2px 5px;\n  transition: 0.2s all ease-in-out;\n  &:hover {\n    filter: brightness(110%);\n    box-shadow: 1px 1px 10px 1px red;\n  }\n"], ["\n  color: red;\n  font-size: 1.5em;\n  margin: 2px 5px;\n  transition: 0.2s all ease-in-out;\n  &:hover {\n    filter: brightness(110%);\n    box-shadow: 1px 1px 10px 1px red;\n  }\n"])));
var TableList = function (props) {
    var _a;
    var emptyRow = (0, react_1.useMemo)(function () {
        if (props.emptyRow) {
            return props.emptyRow;
        }
        else {
            var obj_1 = {};
            props.items.forEach(function (i) { return (obj_1[i.name] = ""); });
            return obj_1;
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)(index_1.InputWrapper, __assign({ empty: [emptyRow], type: (_a = props.type) !== null && _a !== void 0 ? _a : "tablelist" }, props, { children: (0, jsx_runtime_1.jsx)(_Table, __assign({}, props, { emptyRow: emptyRow })) })));
};
var _Table = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var _h = (0, react_hook_form_1.useFieldArray)({ name: props.name }), fields = _h.fields, append = _h.append, insert = _h.insert, remove = _h.remove;
    var TableTemplate = (_a = props.elemTable) !== null && _a !== void 0 ? _a : Table;
    var TableHeadTemplate = (_b = props.elemTableHead) !== null && _b !== void 0 ? _b : TableHead;
    var TableBodyTemplate = (_c = props.elemTableBody) !== null && _c !== void 0 ? _c : TableBody;
    var TableHeaderTRTemplate = (_d = props.elemTR) !== null && _d !== void 0 ? _d : TableHeaderTR;
    var TableTRTemplate = (_e = props.elemTR) !== null && _e !== void 0 ? _e : TableTR;
    var TableTHTemplate = (_f = props.elemTH) !== null && _f !== void 0 ? _f : TableTH;
    var TableTDTemplate = (_g = props.elemTD) !== null && _g !== void 0 ? _g : TableTD;
    (0, react_1.useEffect)(function () {
        if (fields.length === 0) {
            append(props.emptyRow);
        }
    });
    var headerGenerator = (0, react_1.useMemo)(function () {
        var _a;
        return (_a = props.headerTemplate) !== null && _a !== void 0 ? _a : ((0, jsx_runtime_1.jsx)(TableHeadTemplate, { children: (0, jsx_runtime_1.jsxs)(TableHeaderTRTemplate, { children: [props.showIndex === true && (0, jsx_runtime_1.jsx)(TableTHTemplate, {}), props.items.map(function (item, key) { return ((0, jsx_runtime_1.jsx)(TableTHTemplate, { children: item.label }, "tl-".concat(props.name, "-").concat(item.name, "-th-").concat(key))); }), props.fixed !== true && (0, jsx_runtime_1.jsx)(TableTHTemplate, {})] }) }));
    }, [props.headerTemplate]);
    var footerGenerator = (0, react_1.useMemo)(function () { var _a; return (_a = props.footerTemplate) !== null && _a !== void 0 ? _a : headerGenerator; }, [props.footerTemplate]);
    var bodyGenerator = fields.map(function (field, i) { return ((0, jsx_runtime_1.jsxs)(TableTRTemplate, { children: [props.showIndex === true && (0, jsx_runtime_1.jsx)(TableTDTemplate, { children: i + 1 }), props.items.map(function (item, iT) {
                var _a, _b;
                return ((0, jsx_runtime_1.jsx)(TableTDTemplate, { children: (0, jsx_runtime_1.jsx)(InputChooser_1.default, __assign({ fields: (_b = (_a = field === null || field === void 0 ? void 0 : field[i]) === null || _a === void 0 ? void 0 : _a[item.name]) !== null && _b !== void 0 ? _b : null }, item, { noLabel: true, name: "".concat(props.name, ".").concat(i, ".").concat(item.name) })) }, "td-".concat(field === null || field === void 0 ? void 0 : field.id, "-").concat(iT)));
            }), " ", props.fixed !== true && ((0, jsx_runtime_1.jsxs)(TableTDTemplate, { children: [(0, jsx_runtime_1.jsx)(IconUp, { onClick: function () { return insert(i + 1, props.emptyRow); } }), " ", (0, jsx_runtime_1.jsx)(IconDown, { onClick: function () {
                            remove(i);
                        } })] }))] }, "tr-".concat(field.id, "-").concat(i))); });
    return ((0, jsx_runtime_1.jsxs)(TableTemplate, { children: [(props.header === undefined || props.header === "top" || props.header === "both" || props.header === "header_footer") && headerGenerator, (0, jsx_runtime_1.jsx)(TableBodyTemplate, { children: bodyGenerator }), props.header === "footer" || props.header === "header_footer"
                ? footerGenerator
                : (props.header === "bottom" || props.header === "both") && headerGenerator] }));
};
exports.default = TableList;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=TableList.js.map