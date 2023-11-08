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
const InputElemWrapper_1 = __importDefault(require("./InputElemWrapper"));
const useInputValnError_1 = require("./hook/useInputValnError");
const InputWrapper = (props) => {
    var _a;
    const firstUpdate = (0, react_1.useRef)(true);
    const _b = (0, useInputValnError_1.useInputValAndError)(props.name), { value, error, setValue, getValues, watch } = _b, rest = __rest(_b, ["value", "error", "setValue", "getValues", "watch"]);
    const watchCalculated = ((_a = props === null || props === void 0 ? void 0 : props.calculatedField) === null || _a === void 0 ? void 0 : _a.find) !== undefined ? watch(props.calculatedField.find) : null;
    // console.log(`For ${props.name}, error : `,rest.error)
    // On Value change
    (0, react_1.useEffect)(() => {
        if (props.defaultValue !== undefined) {
            // console.log(`[Setting] ${props.name} has a defaultValue of ${props.defaultValue} [${props.defaultValue === undefined ? 'Undefined' : 'Have'}]`);
            setValue(props.name, props.defaultValue);
        }
    }, [props.defaultValue]);
    (0, react_1.useEffect)(() => {
        // External Field
        if (props.externalStateSetter) {
            props.externalStateSetter(value);
        }
        // On Input Change
        if (props.onInputChange && !firstUpdate.current) {
            props.onInputChange(value, props.name, getValues(), Object.assign(Object.assign({}, rest), { getValues, watch, setValue }));
        }
        firstUpdate.current = false;
    }, [value]);
    (0, react_1.useEffect)(() => {
        // if(props.externalStateSetter) {props.externalStateSetter(watchValue ?? value)}
        // Calculated Fields
        if (props.calculatedField) {
            if (props.calculatedField.isPromise === true) {
                props.calculatedField.calculate(value, props.name, getValues(props.calculatedField.find), getValues())
                    // .then(data => { contextSetValue(props.name, data) })
                    .then(data => {
                    // console.log(`[Setting] Setting value for ${props.name} by calculation (async)`)
                    setValue(props.name, data);
                });
            }
            else {
                // console.log(`[Setting] Setting value for ${props.name} by calculation`)
                setValue(props.name, props.calculatedField.calculate(value, props.name, getValues(props.calculatedField.find), getValues()));
            }
        }
    }, [watchCalculated]);
    // const [_value, _setValue] = useState(null)
    // const methods = props.contextless === true ? {control:undefined, watch : (a:string) => null } : useFormContext();
    const child = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const Wrapper = (A, B, children) => {
            if (A) {
                return react_1.default.createElement(A, null, children);
            }
            if (B) {
                return react_1.default.createElement(B, null, children);
            }
            return react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'row' } }, children);
        };
        const WrapperElementLeft = ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.left) ? Wrapper((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.left, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.left) ? props.buttons.left(value, props.name, getValues) : null) : null;
        const WrapperElementRight = ((_g = props === null || props === void 0 ? void 0 : props.buttons) === null || _g === void 0 ? void 0 : _g.right) ? Wrapper((_j = (_h = props === null || props === void 0 ? void 0 : props.buttons) === null || _h === void 0 ? void 0 : _h.wrapper) === null || _j === void 0 ? void 0 : _j.right, (_l = (_k = props === null || props === void 0 ? void 0 : props.buttons) === null || _k === void 0 ? void 0 : _k.wrapper) === null || _l === void 0 ? void 0 : _l.all, ((_m = props === null || props === void 0 ? void 0 : props.buttons) === null || _m === void 0 ? void 0 : _m.right) ? props.buttons.right(value, props.name, getValues) : null) : null;
        const childrenInjected = react_1.default.cloneElement(props.children, Object.assign(Object.assign({}, (_o = props.children) === null || _o === void 0 ? void 0 : _o.props), { disabled: props.disabled, type: (_p = props === null || props === void 0 ? void 0 : props.type) !== null && _p !== void 0 ? _p : 'line' }));
        // console.log(`Input ${props.name} - value : ${value}`)
        return react_1.default.createElement(InputElemWrapper_1.default, Object.assign({}, props, { disabled: props.disabled, value: value }),
            react_1.default.createElement(react_1.default.Fragment, null,
                WrapperElementLeft,
                childrenInjected,
                WrapperElementRight));
    }, [value, props === null || props === void 0 ? void 0 : props.options, error]);
    return child;
};
exports.default = InputWrapper;
//# sourceMappingURL=InputWrapper.js.map