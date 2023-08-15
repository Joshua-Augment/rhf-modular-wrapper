"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const useInputValnError_1 = require("../../core/hook/useInputValnError");
const Lines = (props) => {
    var _a, _b, _c, _d;
    // const {watch, setValue} = useFormContext()
    const { value, setValue } = (0, useInputValnError_1.useInputValAndError)(props.name);
    // const _val = watch(props.name)
    // const val = useMemo(() => _val ,[_val])
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'lines' }, props),
        react_1.default.createElement("textarea", { id: props.name, className: (_c = (_b = props === null || props === void 0 ? void 0 : props.customClasses) === null || _b === void 0 ? void 0 : _b.inputClassName) !== null && _c !== void 0 ? _c : "", name: props.name, value: value !== undefined && value !== null ? value : '', onChange: (a) => setValue(props.name, a.target.value), placeholder: props.placeholder, rows: (_d = props.rows) !== null && _d !== void 0 ? _d : 3, cols: props.cols })));
};
exports.default = Lines;
//# sourceMappingURL=Lines.js.map