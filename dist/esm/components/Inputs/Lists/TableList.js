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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useMemo, useEffect } from "react";
import { useFieldArray } from "react-hook-form";
import InputChooser from "../../core/InputChooser";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import styled from "styled-components";
import { InputWrapper } from "../../core/index";
var Table = styled.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"], ["\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"])));
var TableHead = styled.thead(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var TableBody = styled.tbody(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var TableTH = styled.th(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: sticky;\n  top: 0;\n  background-color: gainsboro;\n  z-index: 1;\n  padding: 5px;\n"], ["\n  position: sticky;\n  top: 0;\n  background-color: gainsboro;\n  z-index: 1;\n  padding: 5px;\n"])));
var TableTD = styled.td(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var TableTR = styled.tr(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
var TableHeaderTR = styled.tr(templateObject_7 || (templateObject_7 = __makeTemplateObject([""], [""])));
var IconUp = styled(FaPlusSquare)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: green;\n  font-size: 1.5em;\n  margin: 2px 5px;\n  transition: 0.2s all ease-in-out;\n  &:hover {\n    filter: brightness(110%);\n    box-shadow: 1px 1px 10px 1px green;\n  }\n"], ["\n  color: green;\n  font-size: 1.5em;\n  margin: 2px 5px;\n  transition: 0.2s all ease-in-out;\n  &:hover {\n    filter: brightness(110%);\n    box-shadow: 1px 1px 10px 1px green;\n  }\n"])));
var IconDown = styled(FaMinusSquare)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: red;\n  font-size: 1.5em;\n  margin: 2px 5px;\n  transition: 0.2s all ease-in-out;\n  &:hover {\n    filter: brightness(110%);\n    box-shadow: 1px 1px 10px 1px red;\n  }\n"], ["\n  color: red;\n  font-size: 1.5em;\n  margin: 2px 5px;\n  transition: 0.2s all ease-in-out;\n  &:hover {\n    filter: brightness(110%);\n    box-shadow: 1px 1px 10px 1px red;\n  }\n"])));
var TableList = function (props) {
    var _a;
    var emptyRow = useMemo(function () {
        if (props.emptyRow) {
            return props.emptyRow;
        }
        else {
            var obj_1 = {};
            props.items.forEach(function (i) { return (obj_1[i.name] = ""); });
            return obj_1;
        }
    }, []);
    return (_jsx(InputWrapper, __assign({ disableController: true, empty: [emptyRow], type: (_a = props.type) !== null && _a !== void 0 ? _a : "tablelist" }, props, { children: _jsx(_Table, __assign({}, props, { emptyRow: emptyRow })) })));
};
var _Table = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var _k = useFieldArray({ name: props.name }), fields = _k.fields, append = _k.append, insert = _k.insert, remove = _k.remove;
    console.log("TABLELIST_FIELDS", fields);
    var TableTemplate = (_a = props.elemTable) !== null && _a !== void 0 ? _a : Table;
    var TableHeadTemplate = (_b = props.elemTableHead) !== null && _b !== void 0 ? _b : TableHead;
    var TableBodyTemplate = (_c = props.elemTableBody) !== null && _c !== void 0 ? _c : TableBody;
    var TableHeaderTRTemplate = (_d = props.elemTR) !== null && _d !== void 0 ? _d : TableHeaderTR;
    var TableTRTemplate = (_e = props.elemTR) !== null && _e !== void 0 ? _e : TableTR;
    var TableTHTemplate = (_f = props.elemTH) !== null && _f !== void 0 ? _f : TableTH;
    var TableTDTemplate = (_g = props.elemTD) !== null && _g !== void 0 ? _g : TableTD;
    var IconAdd = (_h = props.iconAdd) !== null && _h !== void 0 ? _h : IconUp;
    var IconRemove = (_j = props.iconRemove) !== null && _j !== void 0 ? _j : IconDown;
    var Row = React.memo(function (_a) {
        var field = _a.field, index = _a.index, items = _a.items, emptyRow = _a.emptyRow, insert = _a.insert, remove = _a.remove, showIndex = _a.showIndex;
        return (_jsxs(TableTRTemplate, { children: [showIndex && _jsx(TableTDTemplate, { children: index + 1 }), items.map(function (item, iT) {
                    var _a, _b;
                    return (_jsx(TableTDTemplate, __assign({ style: __assign({}, ((_a = item === null || item === void 0 ? void 0 : item.cellProps) !== null && _a !== void 0 ? _a : {})) }, { children: _jsx(InputChooser, __assign({ fields: (_b = field[item.name]) !== null && _b !== void 0 ? _b : null }, item, { noLabel: true, name: "".concat(props.name, ".").concat(index, ".").concat(item.name) })) }), "td-".concat(field.id, "-").concat(iT)));
                }), props.fixed !== true && (_jsxs(TableTDTemplate, { children: [_jsx(IconAdd, { onClick: function () { return insert(index + 1, emptyRow); } }), _jsx(IconRemove, { onClick: function () { return remove(index); } })] }))] }, "tr-".concat(field.id, "-").concat(index)));
    });
    useEffect(function () {
        if (fields.length === 0) {
            append(props.emptyRow);
        }
    }, []);
    var headerGenerator = useMemo(function () {
        return props.headerTemplate ? (props.headerTemplate(props, fields)) : (_jsx(TableHeadTemplate, { children: _jsxs(TableHeaderTRTemplate, { children: [props.showIndex === true && _jsx(TableTHTemplate, {}), props.items.map(function (item, key) {
                        var _a, _b;
                        return (_jsx(TableTHTemplate, __assign({ style: __assign(__assign({}, ((_a = item === null || item === void 0 ? void 0 : item.cellProps) !== null && _a !== void 0 ? _a : {})), ((_b = item === null || item === void 0 ? void 0 : item.headerProps) !== null && _b !== void 0 ? _b : {})) }, { children: item.label }), "tl-".concat(props.name, "-").concat(item.name, "-th-").concat(key)));
                    }), props.fixed !== true && _jsx(TableTHTemplate, {})] }) }));
    }, [props.headerTemplate, fields]);
    // const footerGenerator = useMemo(
    //   () => (props.footerTemplate ? props.footerTemplate(props, fields) : headerGenerator),
    //   [props.footerTemplate, fields]
    // );
    var footerGenerator = props.footerTemplate ? props.footerTemplate(props, fields) : headerGenerator;
    var bodyGenerator = fields.map(function (field, i) { return (_jsx(Row, { field: field, index: i, items: props.items, emptyRow: props.emptyRow, insert: insert, remove: remove, showIndex: props.showIndex }, "row-".concat(field.id))); });
    return (_jsxs(TableTemplate, { children: [(props.header === undefined || props.header === "top" || props.header === "both" || props.header === "header_footer") && headerGenerator, _jsxs(TableBodyTemplate, { children: [bodyGenerator, props.add_element && !props.fixed && _jsx(TableTR, { children: _jsx(TableTH, __assign({ colSpan: props.items.length + (props.showIndex !== false ? 1 : 0) }, { children: _jsx(props.add_element, { onClick: function () { insert(fields.length, props.emptyRow); } }) })) })] }), props.header === "footer" || props.header === "header_footer"
                ? footerGenerator
                : (props.header === "bottom" || props.header === "both") && headerGenerator] }));
};
export default TableList;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=TableList.js.map