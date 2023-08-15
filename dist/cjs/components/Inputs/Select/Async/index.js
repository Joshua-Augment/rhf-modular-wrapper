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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const async_1 = __importDefault(require("react-select/async"));
const async_creatable_1 = __importDefault(require("react-select/async-creatable"));
const core_1 = require("../../../core");
const react_hook_form_1 = require("react-hook-form");
const AsyncSelect = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const [options, setOptions] = (0, react_1.useState)((_a = props.options) !== null && _a !== void 0 ? _a : []);
    (0, react_1.useEffect)(() => { if (props.options && props.options.length > 0) {
        setOptions(props.options);
    } }, [props.options]);
    const { watch, setValue, getValues } = (0, react_hook_form_1.useFormContext)();
    const _val = watch(props.name);
    const val = (0, react_1.useMemo)(() => _val, [_val]);
    const createNew = (0, react_1.useCallback)((a) => {
        if (props.isCreatable !== undefined) {
            if (props.isCreatable === true) {
                setOptions([{ label: a, value: a }, ...options]);
                // setSelectedOption({ label: a, value: a });
                setValue(props.name, { label: a, value: a });
            }
            else {
                props.isCreatable(a).then((opt) => {
                    setOptions([opt, ...options]);
                    // setSelectedOption(opt);
                    setValue(props.name, opt);
                });
            }
        }
    }, []);
    const _props = Object.assign({}, props);
    delete _props.calculatedField;
    delete _props.externalStateSetter;
    delete _props.onInputChange;
    return react_1.default.createElement(core_1.InputWrapper, Object.assign({ type: (_b = props.type) !== null && _b !== void 0 ? _b : 'select_async' }, props, { noBorder: true }), props.isCreatable !== undefined ? (react_1.default.createElement(async_creatable_1.default, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew }, _props, { options: options, isDisabled: (_e = (_d = (_c = props.rsOptions) === null || _c === void 0 ? void 0 : _c.isDisabled) !== null && _d !== void 0 ? _d : props.disabled) !== null && _e !== void 0 ? _e : false, value: val, onChange: (a) => setValue(props.name, a) }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, getValues(), b) : props.loadOptions(a, b) }))) : (react_1.default.createElement(async_1.default, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, _props, { options: options, isDisabled: (_h = (_g = (_f = props.rsOptions) === null || _f === void 0 ? void 0 : _f.isDisabled) !== null && _g !== void 0 ? _g : props.disabled) !== null && _h !== void 0 ? _h : false, value: val, onChange: (a) => setValue(props.name, a) }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, getValues(), b) : props.loadOptions(a, b) }))));
};
exports.default = AsyncSelect;
//# sourceMappingURL=index.js.map