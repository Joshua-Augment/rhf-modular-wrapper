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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var html_react_parser_1 = __importDefault(require("html-react-parser"));
var react_hook_form_1 = require("react-hook-form");
var fa_1 = require("react-icons/fa");
var index_1 = require("../Text/index");
var useInputValnError_1 = require("../../core/hook/useInputValnError");
var Table = styled_components_1.default.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  margin-top:5px;\n  margin-bottom: 5px;\n"], ["\n  width: 100%;\n  margin-top:5px;\n  margin-bottom: 5px;\n"])));
var InputListToTable = function (props) {
    var _a;
    var _b = (0, react_1.useState)(false), editMode = _b[0], setEditMode = _b[1];
    var _c = (0, useInputValnError_1.useInputValAndError)(props.name), value = _c.value, getValues = _c.getValues, setValue = _c.setValue, watch = _c.watch, resetField = _c.resetField, trigger = _c.trigger;
    var _d = (0, react_hook_form_1.useFieldArray)({ name: props.name }), fields = _d.fields, append = _d.append, move = _d.move, remove = _d.remove, update = _d.update;
    var __idWatch = watch("".concat(props.inputName, ".__id"));
    var inputNameCheck = watch(props.inputName);
    // useEffect(()=> unregister(props.inputName) ,[])
    (0, react_1.useEffect)(function () {
        setEditMode(__idWatch !== undefined && __idWatch !== null ? true : false);
    }, [__idWatch]);
    var edit = function (i) {
        setEditMode(true);
        var data = getValues(props.name);
        // console.log('[data[i]] - ',data[i])
        if (data[i] !== undefined) {
            setValue(props.inputName, __assign(__assign({}, data[i]), { __id: i }));
        }
    };
    var bodyGenerator = function () {
        var createMoveArrows = function (i, max) {
            return ((0, jsx_runtime_1.jsxs)("span", __assign({ className: "ms-1" }, { children: [i !== 0 && (0, jsx_runtime_1.jsx)(fa_1.FaArrowUp, { style: { margin: '2px', borderRadius: '10px' }, onClick: function () { return move(i, i - 1); } }), i < (max - 1) && (0, jsx_runtime_1.jsx)(fa_1.FaArrowDown, { style: { margin: '2px', borderRadius: '10px' }, onClick: function () { return move(i, i + 1); } })] })));
        };
        var ActionsWrapper = function (i, A, children) {
            var prepareButtons = function () {
                var _a, _b;
                var REM = (_a = props.tableButtons) === null || _a === void 0 ? void 0 : _a.remove;
                var RemoveButton = REM ? react_1.default.cloneElement(REM, __assign(__assign({}, REM.props), { onClick: function () { setEditMode(false); remove(i); } })) : (0, jsx_runtime_1.jsx)("button", __assign({ type: "button", onClick: function () { setEditMode(false); remove(i); } }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaTrash, {}) }));
                var EDIT = (_b = props.tableButtons) === null || _b === void 0 ? void 0 : _b.edit;
                var EditButton = EDIT ? react_1.default.cloneElement(EDIT, __assign(__assign({}, EDIT.props), { onClick: function () { return edit(i); } })) : (0, jsx_runtime_1.jsx)("button", __assign({ type: "button", onClick: function () { return edit(i); } }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaEdit, {}) }));
                var buttons = [];
                if (props.fixed !== true) {
                    buttons.push(RemoveButton);
                }
                buttons.push(EditButton);
                buttons.push(createMoveArrows(i, fields.length));
                return buttons;
            };
            if (A) {
                return (0, jsx_runtime_1.jsx)(A, { children: prepareButtons() });
            }
            return (0, jsx_runtime_1.jsx)("div", { children: prepareButtons() });
        };
        var parseValue = function (value, extKey, type) {
            var _a;
            // console.log(`ParseValue - [type: ${type}] Value : `,value)
            if (value === undefined || value === null) {
                return "-";
            }
            if (type !== undefined) {
                switch (type) {
                    case "text":
                        return value;
                    case "number":
                        return value;
                    case "checkbox":
                        return value ? "Yes" : "No";
                    case "select":
                        return value.label;
                    case "select_async":
                        return value.label;
                    case "textarea":
                        return value;
                    case "wysiwyg":
                        (0, html_react_parser_1.default)(value);
                    default:
                        switch (typeof value) {
                            case "boolean":
                                return value ? "Yes" : "No";
                            case "object":
                                if (extKey !== undefined) {
                                    return (_a = value === null || value === void 0 ? void 0 : value[extKey]) !== null && _a !== void 0 ? _a : value;
                                }
                                else if (value instanceof Date) {
                                    return value.toLocaleDateString();
                                }
                                else if ((value === null || value === void 0 ? void 0 : value.label) !== undefined) {
                                    return value.label;
                                }
                                else if ((value === null || value === void 0 ? void 0 : value.name) !== undefined) {
                                    return value === null || value === void 0 ? void 0 : value.name;
                                }
                                else if ((value === null || value === void 0 ? void 0 : value.value) !== undefined) {
                                    return value.value;
                                }
                                else {
                                    return JSON.stringify(value);
                                }
                            default:
                                return value;
                        }
                }
            }
        };
        // const captions = props.items.map((item) => item.caption);
        return fields.map(function (f, i) {
            var _a;
            return (0, jsx_runtime_1.jsxs)("tr", { children: [props.showIndex !== false && (0, jsx_runtime_1.jsx)("td", { children: i + 1 }), props.items.map(function (it, itI) { return (0, jsx_runtime_1.jsx)("td", { children: parseValue(f[it.name], it === null || it === void 0 ? void 0 : it.extKey, it === null || it === void 0 ? void 0 : it.type) }); }), (0, jsx_runtime_1.jsx)("td", { children: ActionsWrapper(i, (_a = props.tableWrappers) === null || _a === void 0 ? void 0 : _a.tableActionsWrapper) })] }, "iltt-rw-".concat(props.name, "-").concat(i));
        });
    };
    var generateNewRow = function () { return __awaiter(void 0, void 0, void 0, function () {
        var check, vals, keys, newObject_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, trigger(props.inputName)
                    // unregister(props.inputName, {keepError :false})
                ];
                case 1:
                    check = _a.sent();
                    // unregister(props.inputName, {keepError :false})
                    if (check) {
                        vals = getValues(props.inputName);
                        keys = vals !== undefined && vals !== null && typeof vals === 'object' ? Object.keys(vals) : [];
                        if ((vals === null || vals === void 0 ? void 0 : vals.__id) !== undefined && (vals === null || vals === void 0 ? void 0 : vals.__id) !== null) {
                            update(vals.__id, vals);
                        }
                        else {
                            // Set values
                            append(vals);
                        }
                        newObject_1 = {};
                        keys.forEach(function (key) { return newObject_1[key] = null; });
                        // console.log('[newObject]- ',newObject)
                        resetField(props.inputName, { defaultValue: __assign(__assign({}, newObject_1), { __id: null }) });
                        setValue(props.inputName, __assign(__assign({}, newObject_1), { __id: null }));
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var headerGenerator = (0, react_1.useMemo)(function () {
        var _a;
        return (_a = props.headerTemplate) !== null && _a !== void 0 ? _a : (0, jsx_runtime_1.jsxs)("tr", { children: [props.showIndex === true && (0, jsx_runtime_1.jsx)("th", {}), props.items.map(function (item, key) { return (0, jsx_runtime_1.jsx)("th", { children: item.label }, "tl-".concat(props.name, "-").concat(item.name, "-th-").concat(key)); }), (0, jsx_runtime_1.jsx)("th", {})] });
    }, []);
    var footerGenerator = (0, react_1.useMemo)(function () { var _a; return (_a = props.footerTemplate) !== null && _a !== void 0 ? _a : headerGenerator; }, []);
    var AddButton = (0, react_1.useMemo)(function () {
        var _a, _b;
        var buttonWrapper = function (onClick, Wrapper, ElemA) {
            if (Wrapper) {
                return (0, jsx_runtime_1.jsx)(Wrapper, { children: ElemA ? (0, jsx_runtime_1.jsx)(ElemA, __assign({ isEdit: editMode, onClick: function () { return onClick(); }, type: "button" }, { children: ElemA.children })) :
                        (0, jsx_runtime_1.jsxs)("button", __assign({ onClick: function () { return onClick(); }, type: "button" }, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaPlus, {}), editMode ? 'Edit Row' : 'New Row'] })) });
            }
            else {
                return (0, jsx_runtime_1.jsx)("div", __assign({ style: { marginTop: '10px', textAlign: 'right' } }, { children: ElemA ? (0, jsx_runtime_1.jsx)(ElemA, __assign({ isEdit: editMode, onClick: function () { return onClick(); }, type: "button" }, { children: ElemA.children })) :
                        (0, jsx_runtime_1.jsxs)("button", __assign({ onClick: function () { return onClick(); }, type: "button" }, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaPlus, {}), editMode ? 'Edit Row' : 'New Row'] })) }));
            }
        };
        return buttonWrapper(function () { return generateNewRow(); }, (_a = props.tableWrappers) === null || _a === void 0 ? void 0 : _a.addButtonWrapper, (_b = props.tableButtons) === null || _b === void 0 ? void 0 : _b.add);
    }, [editMode]);
    var body = (0, react_1.useMemo)(function () {
        return bodyGenerator();
    }, [value]);
    var children = (0, react_1.useMemo)(function () { return props.children; }, [value, editMode, props.children, inputNameCheck]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: { width: '100%' } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ style: { margin: '10px 0px', padding: '10px', border: editMode ? '1px solid green' : 'none' } }, { children: [editMode && (0, jsx_runtime_1.jsx)("p", { children: (_a = props.editingCaption) !== null && _a !== void 0 ? _a : "Editing Item ".concat(__idWatch + 1) }), (0, jsx_runtime_1.jsx)(index_1.Line, { name: "".concat(props.inputName, ".__id"), type: "hidden" }), (0, jsx_runtime_1.jsx)("div", { children: children }), (0, jsx_runtime_1.jsx)("div", { children: AddButton })] })), (0, jsx_runtime_1.jsxs)(Table, { children: [(0, jsx_runtime_1.jsx)("thead", { children: props.header !== "bottom" && headerGenerator }), (0, jsx_runtime_1.jsx)("tbody", { children: body }), (0, jsx_runtime_1.jsx)("tfoot", { children: props.header !== "top" && props.header !== undefined && footerGenerator })] })] })));
};
exports.default = InputListToTable;
var templateObject_1;
//# sourceMappingURL=InputListToTable.js.map