var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useMemo, useState } from 'react';
import styled from "styled-components";
import parse from "html-react-parser";
import { useFieldArray } from 'react-hook-form';
import { FaArrowDown, FaArrowUp, FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { Line } from '../Text';
import { useInputValAndError } from '../../core/hook/useInputValnError';
const Table = styled.table `
  width: 100%;
  margin-top:5px;
  margin-bottom: 5px;
`;
const InputListToTable = (props) => {
    var _a;
    const [editMode, setEditMode] = useState(false);
    const { value, /* register, unregister, */ getValues, setValue, watch, resetField, trigger } = useInputValAndError(props.name);
    const { fields, append, move, remove, update } = useFieldArray({ name: props.name });
    const __idWatch = watch(`${props.inputName}.__id`);
    const inputNameCheck = watch(props.inputName);
    // useEffect(()=> unregister(props.inputName) ,[])
    useEffect(() => {
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
            return (_jsxs("span", Object.assign({ className: "ms-1" }, { children: [i !== 0 && _jsx(FaArrowUp, { style: { margin: '2px', borderRadius: '10px' }, onClick: () => move(i, i - 1) }), i < (max - 1) && _jsx(FaArrowDown, { style: { margin: '2px', borderRadius: '10px' }, onClick: () => move(i, i + 1) })] })));
        };
        const ActionsWrapper = (i, A, children) => {
            const prepareButtons = () => {
                var _a, _b;
                const REM = (_a = props.tableButtons) === null || _a === void 0 ? void 0 : _a.remove;
                const RemoveButton = REM ? React.cloneElement(REM, Object.assign(Object.assign({}, REM.props), { onClick: () => { setEditMode(false); remove(i); } })) : _jsx("button", Object.assign({ type: "button", onClick: () => { setEditMode(false); remove(i); } }, { children: _jsx(FaTrash, {}) }));
                const EDIT = (_b = props.tableButtons) === null || _b === void 0 ? void 0 : _b.edit;
                const EditButton = EDIT ? React.cloneElement(EDIT, Object.assign(Object.assign({}, EDIT.props), { onClick: () => edit(i) })) : _jsx("button", Object.assign({ type: "button", onClick: () => edit(i) }, { children: _jsx(FaEdit, {}) }));
                const buttons = [];
                if (props.fixed !== true) {
                    buttons.push(RemoveButton);
                }
                buttons.push(EditButton);
                buttons.push(createMoveArrows(i, fields.length));
                return buttons;
            };
            if (A) {
                return _jsx(A, { children: prepareButtons() });
            }
            return _jsx("div", { children: prepareButtons() });
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
                        parse(value);
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
            return _jsxs("tr", { children: [props.showIndex !== false && _jsx("td", { children: i + 1 }), props.items.map((it, itI) => _jsx("td", { children: parseValue(f[it.name], it === null || it === void 0 ? void 0 : it.extKey, it === null || it === void 0 ? void 0 : it.type) })), _jsx("td", { children: ActionsWrapper(i, (_a = props.tableWrappers) === null || _a === void 0 ? void 0 : _a.tableActionsWrapper) })] }, `iltt-rw-${props.name}-${i}`);
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
    const headerGenerator = useMemo(() => {
        var _a;
        return (_a = props.headerTemplate) !== null && _a !== void 0 ? _a : _jsxs("tr", { children: [props.showIndex === true && _jsx("th", {}), props.items.map((item, key) => _jsx("th", { children: item.label }, `tl-${props.name}-${item.name}-th-${key}`)), _jsx("th", {})] });
    }, []);
    const footerGenerator = useMemo(() => { var _a; return (_a = props.footerTemplate) !== null && _a !== void 0 ? _a : headerGenerator; }, []);
    const AddButton = useMemo(() => {
        var _a, _b;
        const buttonWrapper = (onClick, Wrapper, ElemA) => {
            if (Wrapper) {
                return _jsx(Wrapper, { children: ElemA ? _jsx(ElemA, Object.assign({ isEdit: editMode, onClick: () => onClick(), type: "button" }, { children: ElemA.children })) :
                        _jsxs("button", Object.assign({ onClick: () => onClick(), type: "button" }, { children: [_jsx(FaPlus, {}), editMode ? 'Edit Row' : 'New Row'] })) });
            }
            else {
                return _jsx("div", Object.assign({ style: { marginTop: '10px', textAlign: 'right' } }, { children: ElemA ? _jsx(ElemA, Object.assign({ isEdit: editMode, onClick: () => onClick(), type: "button" }, { children: ElemA.children })) :
                        _jsxs("button", Object.assign({ onClick: () => onClick(), type: "button" }, { children: [_jsx(FaPlus, {}), editMode ? 'Edit Row' : 'New Row'] })) }));
            }
        };
        return buttonWrapper(() => generateNewRow(), (_a = props.tableWrappers) === null || _a === void 0 ? void 0 : _a.addButtonWrapper, (_b = props.tableButtons) === null || _b === void 0 ? void 0 : _b.add);
    }, [editMode]);
    const body = useMemo(() => {
        return bodyGenerator();
    }, [value]);
    const children = useMemo(() => props.children, [value, editMode, props.children, inputNameCheck]);
    return (_jsxs("div", Object.assign({ style: { width: '100%' } }, { children: [_jsxs("div", Object.assign({ style: { margin: '10px 0px', padding: '10px', border: editMode ? '1px solid green' : 'none' } }, { children: [editMode && _jsx("p", { children: (_a = props.editingCaption) !== null && _a !== void 0 ? _a : `Editing Item ${__idWatch + 1}` }), _jsx(Line, { name: `${props.inputName}.__id`, type: "hidden" }), _jsx("div", { children: children }), _jsx("div", { children: AddButton })] })), _jsxs(Table, { children: [_jsx("thead", { children: props.header !== "bottom" && headerGenerator }), _jsx("tbody", { children: body }), _jsx("tfoot", { children: props.header !== "top" && props.header !== undefined && footerGenerator })] })] })));
};
export default InputListToTable;
//# sourceMappingURL=InputListToTable.js.map