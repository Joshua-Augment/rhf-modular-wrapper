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
const Form_1 = require("../../Form");
const Logger_1 = __importDefault(require("../../Logger"));
const InputInnerWrapper_1 = __importDefault(require("./components/InputInnerWrapper"));
const InputWrapperv2 = (props) => {
    var _a, _b, _c, _d, _e;
    Logger_1.default.info(``, `${props.name} - InputWrapperv2`, "start");
    Logger_1.default.info(props, `${props.name} - InputWrapperv2`);
    const { buttonTemplate, elements } = (0, react_1.useContext)(Form_1.ThemeContext);
    return react_1.default.createElement(InputInnerWrapper_1.default, Object.assign({}, props, { inputWrapper: (_c = (_b = (_a = props.inputTemplate) !== null && _a !== void 0 ? _a : buttonTemplate) !== null && _b !== void 0 ? _b : props.inputWrapper) !== null && _c !== void 0 ? _c : undefined, inputElement: (_e = elements === null || elements === void 0 ? void 0 : elements[((_d = props === null || props === void 0 ? void 0 : props.type) !== null && _d !== void 0 ? _d : 'line')]) !== null && _e !== void 0 ? _e : null }), props.children);
};
exports.default = InputWrapperv2;
//# sourceMappingURL=index.js.map