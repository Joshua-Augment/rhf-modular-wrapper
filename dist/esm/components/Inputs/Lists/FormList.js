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
import React, { useMemo, useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import styled from "styled-components";
import InputChooser from '../../core/InputChooser';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import { InputWrapper } from '../../core/index';
import { useInputValAndError } from '../../core/hook/useInputValnError';
var Row = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display:flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  display:flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"])));
var Col = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 0 0 ", ";\n  width : ", ";\n  padding-right : 5px;\n\n"], ["\n  flex: 0 0 ", ";\n  width : ", ";\n  padding-right : 5px;\n\n"])), function (_a) {
    var g = _a.g;
    return "".concat((g !== null && g !== void 0 ? g : 12) * 100 / 12, "%");
}, function (_a) {
    var g = _a.g;
    return "".concat((g !== null && g !== void 0 ? g : 12) * 100 / 12, "%");
});
var iconStyle = {
    fontSize: '30px',
    cursor: 'pointer',
    textAlign: 'right'
};
var FormList = function (props) {
    var _a;
    var _b = useInputValAndError(props.name), value = _b.value, error = _b.error;
    // const {control} = useFormContext()
    var _c = useFieldArray({ name: props.name }), fields = _c.fields, append = _c.append, insert = _c.insert, remove = _c.remove;
    // const _val = watch(props.name)
    // const value = useMemo(() => _val ,[_val])
    var emptyRow = useMemo(function () {
        if (props.emptyRow) {
            return props.emptyRow;
        }
        else {
            var obj_1 = {};
            props.items.forEach(function (i) { return obj_1[i.name] = ''; });
            return obj_1;
        }
    }, []);
    useEffect(function () { if (fields.length === 0) {
        append(emptyRow);
    } }, []);
    var bodygenerator = useMemo(function () {
        var templateConverter = function (children, i) {
            return React.Children.map(children, function (child) {
                var _a;
                // console.log("[TemplateConverter - ] -props ",child.props)
                // For the Inputs
                if (child.props['data-name'] !== undefined) {
                    var input = props.items.filter(function (x) { return x.name === child.props['data-name']; });
                    if (input === undefined || input.length === 0) {
                        return child;
                    }
                    else {
                        return _jsx(InputChooser, __assign({}, input[0], { noBorder: true, name: "".concat(props.name, ".").concat(i, ".").concat(input[0].name) }));
                    }
                }
                if (((_a = child.props) === null || _a === void 0 ? void 0 : _a['data-add']) === true) {
                    return React.cloneElement(child, {
                        onClick: function () { if (!(props.maxItems && fields.length >= props.maxItems)) {
                            insert(i + 1, emptyRow);
                        } },
                        isEnd: props.maxItems && fields.length >= props.maxItems
                    });
                }
                if (child.props['data-remove'] !== undefined) {
                    return React.cloneElement(child, {
                        onClick: function () { if (fields.length > 1) {
                            remove(i);
                        } },
                        isEnd: fields.length > 1
                    });
                }
                if (child.props['data-index'] !== undefined) {
                    return React.cloneElement(child, {
                        children: i + 1
                    });
                }
                if (child.props.children) {
                    return React.cloneElement(child, {
                        children: templateConverter(child.props.children, i)
                    });
                }
                return child;
            });
        };
        return fields.map(function (field, i) {
            var _a;
            if (props.bodyTemplate !== undefined) {
                var _props = props;
                delete _props.children;
                var bodyTemplateWithProps = React.cloneElement(props.bodyTemplate(__assign({ fields: field, index: i }, props)), __assign({ fields: field, index: i }, props));
                return templateConverter((_a = bodyTemplateWithProps.props) === null || _a === void 0 ? void 0 : _a.children, i);
            }
            else {
                return _jsxs(Row, { children: [props.showIndex === true && _jsx(Col, __assign({ g: 1 }, { children: i + 1 })), props.items.map(function (item, iT) { var _a; return _jsx(Col, __assign({ g: (_a = item.grid) !== null && _a !== void 0 ? _a : 12 / (props.items.length + (props.showIndex ? 1 : 0) + (props.fixed !== true ? 1 : 0)) }, { children: _jsx(InputChooser, __assign({}, item, { noBorder: true, name: "".concat(props.name, ".").concat(i, ".").concat(item.name) })) }), "fw-".concat(props.name, "-").concat(i, "-").concat(iT, "-iew")); }), props.fixed !== true && _jsxs(Col, __assign({ g: 1 }, { children: [_jsx(FaPlusSquare, { style: __assign(__assign({}, iconStyle), { color: props.maxItems && fields.length >= props.maxItems ? 'olive' : 'green' }), onClick: function () { if (!(props.maxItems && fields.length >= props.maxItems)) {
                                        insert(i + 1, emptyRow);
                                    } } }), " ", _jsx(FaMinusSquare, { style: __assign(__assign({}, iconStyle), { color: fields.length > 1 ? 'red' : 'maroon' }), onClick: function () { if (fields.length > 1) {
                                        remove(i);
                                    } } })] }))] }, "fw-".concat(props.name, "-").concat(i));
            }
        });
    }, [value, error]);
    return (_jsx(InputWrapper, __assign({ empty: [emptyRow], type: (_a = props.type) !== null && _a !== void 0 ? _a : 'list' }, props, { noBorder: true }, { children: _jsx("div", __assign({ style: { width: '100%' } }, { children: bodygenerator })) })));
};
export default FormList;
var templateObject_1, templateObject_2;
//# sourceMappingURL=FormList.js.map