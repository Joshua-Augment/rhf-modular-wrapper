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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var react_hook_form_1 = require("react-hook-form");
var styled_components_1 = __importDefault(require("styled-components"));
var InputChooser_1 = __importDefault(require("../../core/InputChooser"));
var fa_1 = require("react-icons/fa");
var index_1 = require("../../core/index");
var Row = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"])));
var Col = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 0 0 ", ";\n  width: ", ";\n  padding-right: 5px;\n"], ["\n  flex: 0 0 ", ";\n  width: ", ";\n  padding-right: 5px;\n"])), function (_a) {
    var g = _a.g;
    return "".concat(((g !== null && g !== void 0 ? g : 12) * 100) / 12, "%");
}, function (_a) {
    var g = _a.g;
    return "".concat(((g !== null && g !== void 0 ? g : 12) * 100) / 12, "%");
});
var iconStyle = {
    fontSize: "30px",
    cursor: "pointer",
    textAlign: "right",
};
var FormList = function (props) {
    var _a;
    return ((0, jsx_runtime_1.jsx)(index_1.InputWrapper, __assign({ disableController: true, empty: [], type: (_a = props.type) !== null && _a !== void 0 ? _a : "list" }, props, { noBorder: true }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ style: { width: "100%" } }, { children: (0, jsx_runtime_1.jsx)(_FormWrapper, __assign({}, props)) })) })));
};
var _FormWrapper = function (props) {
    var error = props.error;
    var _a = (0, react_hook_form_1.useFieldArray)({ name: props.name }), fields = _a.fields, append = _a.append, insert = _a.insert, remove = _a.remove;
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
    (0, react_1.useEffect)(function () {
        if (fields.length === 0) {
            append(emptyRow);
        }
    }, []);
    var bodygenerator = (0, react_1.useMemo)(function () {
        var templateConverter = function (children, i) {
            return react_1.default.Children.map(children, function (child) {
                var _a;
                // console.log("[TemplateConverter - ] -props ",child.props)
                // For the Inputs
                if (child.props["data-name"] !== undefined) {
                    var input = props.items.filter(function (x) { return x.name === child.props["data-name"]; });
                    if (input === undefined || input.length === 0) {
                        return child;
                    }
                    else {
                        return (0, jsx_runtime_1.jsx)(InputChooser_1.default, __assign({}, input[0], { noBorder: true, name: "".concat(props.name, ".").concat(i, ".").concat(input[0].name) }));
                    }
                }
                if (((_a = child.props) === null || _a === void 0 ? void 0 : _a["data-add"]) === true) {
                    return react_1.default.cloneElement(child, {
                        onClick: function () {
                            if (!(props.maxItems && fields.length >= props.maxItems)) {
                                insert(i + 1, emptyRow);
                            }
                        },
                        isEnd: props.maxItems && fields.length >= props.maxItems,
                    });
                }
                if (child.props["data-remove"] !== undefined) {
                    return react_1.default.cloneElement(child, {
                        onClick: function () {
                            if (fields.length > 1) {
                                remove(i);
                            }
                        },
                        isEnd: fields.length > 1,
                    });
                }
                if (child.props["data-index"] !== undefined) {
                    return react_1.default.cloneElement(child, {
                        children: i + 1,
                    });
                }
                if (child.props.children) {
                    return react_1.default.cloneElement(child, {
                        children: templateConverter(child.props.children, i),
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
                var bodyTemplateWithProps = react_1.default.cloneElement(props.bodyTemplate(__assign({ fields: field, index: i }, props)), __assign({ fields: field, index: i }, props));
                return templateConverter((_a = bodyTemplateWithProps.props) === null || _a === void 0 ? void 0 : _a.children, i);
            }
            else {
                return ((0, jsx_runtime_1.jsxs)(Row, { children: [props.showIndex === true && (0, jsx_runtime_1.jsx)(Col, __assign({ g: 1 }, { children: i + 1 })), props.items.map(function (item, iT) {
                            var _a;
                            return ((0, jsx_runtime_1.jsx)(Col, __assign({ g: (_a = item.grid) !== null && _a !== void 0 ? _a : 12 / (props.items.length + (props.showIndex ? 1 : 0) + (props.fixed !== true ? 1 : 0)) }, { children: (0, jsx_runtime_1.jsx)(InputChooser_1.default, __assign({}, item, { noBorder: true, name: "".concat(props.name, ".").concat(i, ".").concat(item.name) })) }), "fw-".concat(props.name, "-").concat(i, "-").concat(iT, "-iew")));
                        }), props.fixed !== true && ((0, jsx_runtime_1.jsxs)(Col, __assign({ g: 1 }, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaPlusSquare, { style: __assign(__assign({}, iconStyle), { color: props.maxItems && fields.length >= props.maxItems ? "olive" : "green" }), onClick: function () {
                                        if (!(props.maxItems && fields.length >= props.maxItems)) {
                                            insert(i + 1, emptyRow);
                                        }
                                    } }), " ", (0, jsx_runtime_1.jsx)(fa_1.FaMinusSquare, { style: __assign(__assign({}, iconStyle), { color: fields.length > 1 ? "red" : "maroon" }), onClick: function () {
                                        if (fields.length > 1) {
                                            remove(i);
                                        }
                                    } })] })))] }, "fw-".concat(props.name, "-").concat(i)));
            }
        });
    }, [fields, error]);
    return (0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: bodygenerator }, "fl-".concat(props.name, "-bg"));
};
exports.default = FormList;
var templateObject_1, templateObject_2;
//# sourceMappingURL=FormList.js.map