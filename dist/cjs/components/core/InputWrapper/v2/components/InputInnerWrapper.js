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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Logger_1 = __importDefault(require("../../../Logger"));
const react_hook_form_1 = require("react-hook-form");
const DefaultInputWrapper_1 = __importDefault(require("./DefaultInputWrapper"));
const useInputValnError_1 = require("../../../hook/useInputValnError");
const InputInnerWrapper = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const _r = (0, useInputValnError_1.useInputValAndError)(props.name), { value, error, formState } = _r, methods = __rest(_r, ["value", "error", "formState"]);
    const { inputWrapper: _propsInputWrapper, name: _propsName, options: _propsOptions, items: _propsItems, label: _propsLabel, noLabel: _propsNoLabel, type: _propsType, helperText: _propsHelperText, } = props;
    const firstUpdate = (0, react_1.useRef)(true);
    Logger_1.default.info(`First Update : ${firstUpdate.current}`, `${_propsName} - InputWrapperv2`);
    const watchCalculated = (0, react_hook_form_1.useWatch)({
        name: ((_a = props === null || props === void 0 ? void 0 : props.calculatedField) === null || _a === void 0 ? void 0 : _a.find) !== undefined ? props.calculatedField.find : `#_#_noinputtofind_#_#`,
    });
    Logger_1.default.info(`Watching Calculated : ${String(watchCalculated)}`, `${_propsName} - InputWrapperv2`);
    // console.log(`For ${props.name}, error : `,rest.error)
    // On Value change
    (0, react_1.useEffect)(() => {
        Logger_1.default.info(`Default Value : ${String(props.defaultValue)}`, `${_propsName} - InputWrapperv2`);
        if (props.defaultValue !== undefined) {
            // console.log(`[Setting] ${props.name} has a defaultValue of ${props.defaultValue} [ Default Value ? ${props.defaultValue === undefined ? 'Undefined' : 'Have'}]`);
            methods.setValue("inputWrapper - DefaultValue", props.defaultValue);
        }
    }, [props.defaultValue]);
    (0, react_1.useEffect)(() => {
        // // Make sure value isnt undefined
        // if (value === undefined) {methods.setValue(props.name, null)}
        // External Field
        if (props.externalStateSetter) {
            Logger_1.default.info(`Setting External State`, `${_propsName} - InputWrapperv2`);
            props.externalStateSetter(value);
        }
        // On Input Change
        if (props.onInputChange && !firstUpdate.current) {
            Logger_1.default.info(`First Time Setting`, `${_propsName} - InputWrapperv2`);
            props.onInputChange(value, _propsName, methods.getValues(), Object.assign({}, props.formMethods));
        }
        firstUpdate.current = false;
    }, [value]);
    (0, react_1.useEffect)(() => {
        // Calculated Fields
        if (props.calculatedField) {
            Logger_1.default.info(`Setting External State`, `${_propsName} - calculatedField`, "start");
            if (props.calculatedField.isPromise === true) {
                Logger_1.default.info(`Promise expected`, `${_propsName} - calculatedField`);
                props.calculatedField
                    .calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues())
                    // .then(data => { contextSetValue(props.name, data) })
                    .then((data) => {
                    Logger_1.default.info(`Calculated Data : ${String(data)}`, `${_propsName} - calculatedField`);
                    Logger_1.default.info(null, null, "end");
                    // console.log(`[Setting] Setting value for ${props.name} by calculation (async)`)
                    methods.setValue(props.name, data);
                });
            }
            else {
                const _result = props.calculatedField.calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues());
                Logger_1.default.info(`No Promise expected. Value Expected : ${String(_result)}`, `${_propsName} - calculatedField`);
                // console.log(`[Setting] Setting value for ${props.name} by calculation`)
                methods.setValue(props.name, _result);
                Logger_1.default.info(null, null, "end");
            }
        }
    }, [watchCalculated]);
    const WrapperMaker = (A, B, children) => {
        if (A) {
            return react_1.default.createElement(A, null, children);
        }
        if (B) {
            return react_1.default.createElement(B, null, children);
        }
        return react_1.default.createElement("div", { style: { display: "flex", flexDirection: "row" } }, children);
    };
    Logger_1.default.info(`Setting Left Wrapper`, `${_propsName} - InputWrapperv2`);
    const WrapperElementLeft = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d, _e, _f;
        Logger_1.default.info(`useMemo`, `WrapperElementLeft`, "start");
        Logger_1.default.info(null, null, "end");
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.left)
            ? WrapperMaker((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.left, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.left) ? props.buttons.left(value, props.name, methods.getValues) : null)
            : null;
    }, [(_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.left, (_d = (_c = props === null || props === void 0 ? void 0 : props.buttons) === null || _c === void 0 ? void 0 : _c.wrapper) === null || _d === void 0 ? void 0 : _d.left, (_f = (_e = props === null || props === void 0 ? void 0 : props.buttons) === null || _e === void 0 ? void 0 : _e.wrapper) === null || _f === void 0 ? void 0 : _f.all]);
    Logger_1.default.info(`Setting Right Wrapper`, `${_propsName} - InputWrapperv2`);
    const WrapperElementRight = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d, _e, _f;
        Logger_1.default.info(`useMemo`, `WrapperElementRight`, "start");
        Logger_1.default.info(null, null, "end");
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.right)
            ? WrapperMaker((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.right, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.right) ? props.buttons.right(value, props.name, methods.getValues) : null)
            : null;
    }, [(_g = props === null || props === void 0 ? void 0 : props.buttons) === null || _g === void 0 ? void 0 : _g.right, (_j = (_h = props === null || props === void 0 ? void 0 : props.buttons) === null || _h === void 0 ? void 0 : _h.wrapper) === null || _j === void 0 ? void 0 : _j.right, (_l = (_k = props === null || props === void 0 ? void 0 : props.buttons) === null || _k === void 0 ? void 0 : _k.wrapper) === null || _l === void 0 ? void 0 : _l.all]);
    Logger_1.default.info(`Setting Chosen Element`, `${_propsName} - InputWrapperv2`);
    const ChosenElement = (0, react_1.useMemo)(() => {
        Logger_1.default.info(`useMemo`, `Chosen Element`, "start");
        const _chosenElement = props.inputElement;
        Logger_1.default.info(null, null, "end");
        return _chosenElement;
    }, [props.inputElement]);
    const Wrapper = (0, react_1.useMemo)(() => _propsInputWrapper, [_propsInputWrapper]);
    // const ChildComponent = useMemo(
    //   () => (
    //     <React.Fragment key={props.name}>
    //       {WrapperElementLeft}
    //       {ChosenElement
    //         ? ChosenElement({
    //             ...props.children?.props,
    //             ...methods,
    //             disabled: props.disabled,
    //             type: props?.type ?? "line",
    //             onChange: (a) => methods.setValue(props.name, a),
    //             value: value,
    //             error: error,
    //             // error: formState.errors?.[field.name],
    //             source: "InputWrapper",
    //           })
    //         : React.cloneElement(props.children, {
    //             ...props.children?.props,
    //             ...methods,
    //             disabled: props.disabled,
    //             type: props?.type ?? "line",
    //             onChange: (a) => methods.setValue(props.name, a),
    //             value: value,
    //             error: error,
    //             // error: formState.errors?.[field.name],
    //             source: "InputWrapper",
    //           })}
    //       {/* childrenInjected */}
    //       {WrapperElementRight}
    //     </React.Fragment>
    //   ),
    //   [value, props.options, props.items, props.label]
    // );
    const ChildComponent = react_1.default.createElement(react_1.default.Fragment, { key: props.name },
        WrapperElementLeft,
        ChosenElement
            ? ChosenElement(Object.assign(Object.assign(Object.assign({}, (_m = props.children) === null || _m === void 0 ? void 0 : _m.props), methods), { disabled: props.disabled, type: (_o = props === null || props === void 0 ? void 0 : props.type) !== null && _o !== void 0 ? _o : "line", onChange: (a) => methods.setValue(props.name, a), value: value, error: error, 
                // error: formState.errors?.[field.name],
                source: "InputWrapper" }))
            : react_1.default.cloneElement(props.children, Object.assign(Object.assign(Object.assign({}, (_p = props.children) === null || _p === void 0 ? void 0 : _p.props), methods), { disabled: props.disabled, type: (_q = props === null || props === void 0 ? void 0 : props.type) !== null && _q !== void 0 ? _q : "line", onChange: (a) => methods.setValue(props.name, a), value: value, error: error, 
                // error: formState.errors?.[field.name],
                source: "InputWrapper" })),
        WrapperElementRight);
    // const WrapElem = useMemo(
    //   () =>
    //     Wrapper !== null && Wrapper !== undefined ? (
    //       <Wrapper {...props} value={value} {...props.formMethods} children={ChildComponent} />
    //     ) : <DefaultInputWrapper {...props}>{ChildComponent}</DefaultInputWrapper>,
    //   [props.label, props.noLabel, value  ]
    // );
    Logger_1.default.info(null, null, "end");
    // const injectProps = useMemo(()=>({
    //   ...props,
    //   value : value,
    //   theme: null,
    //   ...methods
    // }), [value, props.options, props.items, props.label, props.disabled,props.type])
    const injectProps = Object.assign(Object.assign(Object.assign(Object.assign({}, props), { value: value, theme: null }), methods), { formState });
    return react_1.default.createElement(ChosenWrapper, { Wrapper: Wrapper, Default: DefaultInputWrapper_1.default, props: Object.assign(Object.assign({}, injectProps), { children: ChildComponent }) });
};
const ChosenWrapper = react_1.default.memo(({ Wrapper, Default, props }) => {
    return Wrapper ? react_1.default.createElement(Wrapper, Object.assign({}, props)) : react_1.default.createElement(Default, Object.assign({}, props));
});
exports.default = react_1.default.memo(InputInnerWrapper);
//# sourceMappingURL=InputInnerWrapper.js.map