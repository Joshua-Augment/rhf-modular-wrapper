"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Form_1 = require("../../Form");
const Logger_1 = __importDefault(require("../../Logger"));
const InputInnerWrapper_1 = __importDefault(require("./components/InputInnerWrapper"));
const InputWrapperv2 = (props) => {
    var _a, _b, _c, _d;
    Logger_1.default.info(`Value - ${typeof props.value === 'object' ? JSON.stringify(props.value) : props.value}`, `${props.name} - InputWrapperv2`, "start");
    Logger_1.default.info(props, `${props.name} - InputWrapperv2`);
    const { inputTemplate, elements } = (0, react_1.useContext)(Form_1.ThemeContext);
    return (0, jsx_runtime_1.jsx)(InputInnerWrapper_1.default, Object.assign({}, props, { inputWrapper: (_b = (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : inputTemplate) !== null && _b !== void 0 ? _b : undefined, inputElement: (_d = elements === null || elements === void 0 ? void 0 : elements[((_c = props === null || props === void 0 ? void 0 : props.type) !== null && _c !== void 0 ? _c : 'line')]) !== null && _d !== void 0 ? _d : null }, { children: props.children }));
};
exports.default = InputWrapperv2;
//# sourceMappingURL=index.js.map