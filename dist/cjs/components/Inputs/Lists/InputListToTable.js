"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const html_react_parser_1 = __importDefault(require("html-react-parser"));
const react_hook_form_1 = require("react-hook-form");
const fa_1 = require("react-icons/fa");
const Text_1 = require("../Text");
const useInputValnError_1 = require("../../core/hook/useInputValnError");
const Table = styled_components_1.default.table `
  width: 100%;
  margin-top:5px;
  margin-bottom: 5px;
`;
const InputListToTable = (props) => {
    var _a;
    const [editMode, setEditMode] = (0, react_1.useState)(false);
    const { value, /* register, unregister, */ getValues, setValue, watch, resetField, trigger } = (0, useInputValnError_1.useInputValAndError)(props.name);
    const { fields, append, move, remove, update } = (0, react_hook_form_1.useFieldArray)({ name: props.name });
    const __idWatch = watch(`${props.inputName}.__id`);
    const inputNameCheck = watch(props.inputName);
    // useEffect(()=> unregister(props.inputName) ,[])
    (0, react_1.useEffect)(() => {
        setEditMode(__idWatch !== undefined && __idWatch !== null ? true : false);
    }, [__idWatch]);
    const edit = (i) => {
        setEditMode(true);
        const data = getValues(props.name);
        // console.log('[data[i]] - ',data[i])
        if (data[i] !== undefined) {
            setValue(props.inputName, Object.assign(Object.assign({}, data[i]), { __id: i }));
        }
    };
    const bodyGenerator = () => {
        const createMoveArrows = (i, max) => {
            return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "ms-1" }, { children: [i !== 0 && (0, jsx_runtime_1.jsx)(fa_1.FaArrowUp, { style: { margin: '2px', borderRadius: '10px' }, onClick: () => move(i, i - 1) }), i < (max - 1) && (0, jsx_runtime_1.jsx)(fa_1.FaArrowDown, { style: { margin: '2px', borderRadius: '10px' }, onClick: () => move(i, i + 1) })] })));
        };
        const ActionsWrapper = (i, A, children) => {
            const prepareButtons = () => {
                var _a, _b;
                const REM = (_a = props.tableButtons) === null || _a === void 0 ? void 0 : _a.remove;
                const RemoveButton = REM ? react_1.default.cloneElement(REM, Object.assign(Object.assign({}, REM.props), { onClick: () => { setEditMode(false); remove(i); } })) : (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", onClick: () => { setEditMode(false); remove(i); } }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaTrash, {}) }));
                const EDIT = (_b = props.tableButtons) === null || _b === void 0 ? void 0 : _b.edit;
                const EditButton = EDIT ? react_1.default.cloneElement(EDIT, Object.assign(Object.assign({}, EDIT.props), { onClick: () => edit(i) })) : (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", onClick: () => edit(i) }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaEdit, {}) }));
                const buttons = [];
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
        const parseValue = (value, extKey, type) => {
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
        return fields.map((f, i) => {
            var _a;
            return (0, jsx_runtime_1.jsxs)("tr", { children: [props.showIndex !== false && (0, jsx_runtime_1.jsx)("td", { children: i + 1 }), props.items.map((it, itI) => (0, jsx_runtime_1.jsx)("td", { children: parseValue(f[it.name], it === null || it === void 0 ? void 0 : it.extKey, it === null || it === void 0 ? void 0 : it.type) })), (0, jsx_runtime_1.jsx)("td", { children: ActionsWrapper(i, (_a = props.tableWrappers) === null || _a === void 0 ? void 0 : _a.tableActionsWrapper) })] }, `iltt-rw-${props.name}-${i}`);
        });
    };
    const generateNewRow = () => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(`getValues : ${props.inputName} - `,getValues(props.inputName))
        // register(props.inputName)
        // console.log('Trigger - ',trigger(props.inputName))
        // const check = true
        const check = yield trigger(props.inputName);
        // unregister(props.inputName, {keepError :false})
        if (check) {
            const vals = getValues(props.inputName);
            const keys = vals !== undefined && vals !== null && typeof vals === 'object' ? Object.keys(vals) : [];
            if ((vals === null || vals === void 0 ? void 0 : vals.__id) !== undefined && (vals === null || vals === void 0 ? void 0 : vals.__id) !== null) {
                update(vals.__id, vals);
            }
            else {
                // Set values
                append(vals);
            }
            let newObject = {};
            keys.forEach(key => newObject[key] = null);
            // console.log('[newObject]- ',newObject)
            resetField(props.inputName, { defaultValue: Object.assign(Object.assign({}, newObject), { __id: null }) });
            setValue(props.inputName, Object.assign(Object.assign({}, newObject), { __id: null }));
        }
    });
    const headerGenerator = (0, react_1.useMemo)(() => {
        var _a;
        return (_a = props.headerTemplate) !== null && _a !== void 0 ? _a : (0, jsx_runtime_1.jsxs)("tr", { children: [props.showIndex === true && (0, jsx_runtime_1.jsx)("th", {}), props.items.map((item, key) => (0, jsx_runtime_1.jsx)("th", { children: item.label }, `tl-${props.name}-${item.name}-th-${key}`)), (0, jsx_runtime_1.jsx)("th", {})] });
    }, []);
    const footerGenerator = (0, react_1.useMemo)(() => { var _a; return (_a = props.footerTemplate) !== null && _a !== void 0 ? _a : headerGenerator; }, []);
    const AddButton = (0, react_1.useMemo)(() => {
        var _a, _b;
        const buttonWrapper = (onClick, Wrapper, ElemA) => {
            if (Wrapper) {
                return (0, jsx_runtime_1.jsx)(Wrapper, { children: ElemA ? (0, jsx_runtime_1.jsx)(ElemA, Object.assign({ isEdit: editMode, onClick: () => onClick(), type: "button" }, { children: ElemA.children })) :
                        (0, jsx_runtime_1.jsxs)("button", Object.assign({ onClick: () => onClick(), type: "button" }, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaPlus, {}), editMode ? 'Edit Row' : 'New Row'] })) });
            }
            else {
                return (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { marginTop: '10px', textAlign: 'right' } }, { children: ElemA ? (0, jsx_runtime_1.jsx)(ElemA, Object.assign({ isEdit: editMode, onClick: () => onClick(), type: "button" }, { children: ElemA.children })) :
                        (0, jsx_runtime_1.jsxs)("button", Object.assign({ onClick: () => onClick(), type: "button" }, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaPlus, {}), editMode ? 'Edit Row' : 'New Row'] })) }));
            }
        };
        return buttonWrapper(() => generateNewRow(), (_a = props.tableWrappers) === null || _a === void 0 ? void 0 : _a.addButtonWrapper, (_b = props.tableButtons) === null || _b === void 0 ? void 0 : _b.add);
    }, [editMode]);
    const body = (0, react_1.useMemo)(() => {
        return bodyGenerator();
    }, [value]);
    const children = (0, react_1.useMemo)(() => props.children, [value, editMode, props.children, inputNameCheck]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { width: '100%' } }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { margin: '10px 0px', padding: '10px', border: editMode ? '1px solid green' : 'none' } }, { children: [editMode && (0, jsx_runtime_1.jsx)("p", { children: (_a = props.editingCaption) !== null && _a !== void 0 ? _a : `Editing Item ${__idWatch + 1}` }), (0, jsx_runtime_1.jsx)(Text_1.Line, { name: `${props.inputName}.__id`, type: "hidden" }), (0, jsx_runtime_1.jsx)("div", { children: children }), (0, jsx_runtime_1.jsx)("div", { children: AddButton })] })), (0, jsx_runtime_1.jsxs)(Table, { children: [(0, jsx_runtime_1.jsx)("thead", { children: props.header !== "bottom" && headerGenerator }), (0, jsx_runtime_1.jsx)("tbody", { children: body }), (0, jsx_runtime_1.jsx)("tfoot", { children: props.header !== "top" && props.header !== undefined && footerGenerator })] })] })));
};
exports.default = InputListToTable;
//# sourceMappingURL=InputListToTable.js.map