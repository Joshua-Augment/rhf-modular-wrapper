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
const react_select_1 = __importDefault(require("react-select/"));
const creatable_1 = __importDefault(require("react-select/creatable"));
const core_1 = require("../../../core");
const Select = (props) => {
    return (react_1.default.createElement(core_1.InputWrapper, Object.assign({}, props, { noBorder: true }), (IWProps) => {
        console.log(`[Datepickerprops] - ${props.name}`, IWProps);
        return react_1.default.createElement(SelectWrapper, Object.assign({}, IWProps, props));
    }));
};
const SelectWrapper = (props) => {
    var _a;
    const [options, setOptions] = (0, react_1.useState)((_a = props.options) !== null && _a !== void 0 ? _a : []);
    const [selectedOption, setSelectedOption] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => { setOptions(props.options); }, [props.options]);
    const createNew = (0, react_1.useCallback)((a) => {
        if (props.isCreatable !== undefined) {
            if (props.isCreatable === true) {
                setOptions([{ label: a, value: a }, ...options]);
                setSelectedOption({ label: a, value: a });
                props.onChange({ label: a, value: a });
            }
            else {
                props.isCreatable(a).then((opt) => {
                    setOptions([opt, ...options]);
                    setSelectedOption(opt);
                    props.onChange(opt);
                });
            }
        }
    }, []);
    const onChangeHandler = (0, react_1.useCallback)((a) => {
        setSelectedOption(a);
        props.onChange(a);
    }, []);
    return props.isCreatable !== undefined ? (react_1.default.createElement(creatable_1.default, Object.assign({ onCreateOption: createNew }, props, { options: options, value: selectedOption, onChange: onChangeHandler }, props.rsOptions))) : (react_1.default.createElement(react_select_1.default, Object.assign({}, props, { options: options, value: selectedOption, onChange: onChangeHandler }, props.rsOptions)));
};
exports.default = Select;
//# sourceMappingURL=index.js.map