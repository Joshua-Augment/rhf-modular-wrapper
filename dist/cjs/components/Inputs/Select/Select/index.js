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
const react_select_1 = __importDefault(require("react-select"));
const creatable_1 = __importDefault(require("react-select/creatable"));
const core_1 = require("../../../core");
const react_hook_form_1 = require("react-hook-form");
const Select = (props) => {
    var _a;
    const [options, setOptions] = (0, react_1.useState)((_a = props.options) !== null && _a !== void 0 ? _a : []);
    // Watch for changed options
    (0, react_1.useEffect)(() => {
        console.log("[options] - ", props.options);
        setOptions(props.options);
    }, [props.options]);
    const { watch, setValue } = (0, react_hook_form_1.useFormContext)();
    const _val = watch(props.name);
    const val = (0, react_1.useMemo)(() => _val, [_val]);
    const createNew = (a) => {
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
    };
    const SelectElems = (0, react_1.useMemo)(() => {
        console.log("[SelectElems] -rendered", options);
        return react_1.default.createElement(core_1.InputWrapper, Object.assign({}, props, { noBorder: true, options: options }), props.isCreatable !== undefined ?
            react_1.default.createElement(creatable_1.default, Object.assign({ onCreateOption: createNew }, props, props.rsOptions, { options: options, value: val, onChange: (a) => setValue(props.name, a) })) :
            react_1.default.createElement(react_select_1.default, Object.assign({}, props, props.rsOptions, { options: options, value: val, onChange: (a) => setValue(props.name, a) })));
    }, [options]);
    return (SelectElems);
};
exports.default = Select;
//# sourceMappingURL=index.js.map