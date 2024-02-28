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
const Inputs_1 = require("../Inputs");
const Logger_1 = __importDefault(require("./Logger"));
const InputChooser = (props) => {
    const OutputComponent = (0, react_1.useMemo)(() => {
        Logger_1.default.info(`Choosing Input`, 'InputChooser', 'start');
        Logger_1.default.info(null, null, 'end');
        switch (props.type) {
            case 'custom':
                const Elem = props.elem;
                return react_1.default.createElement(Elem, Object.assign({}, props));
            case 'dropzone':
                return react_1.default.createElement(Inputs_1.DropzoneUploader, Object.assign({}, props));
            case 'yesno':
                return react_1.default.createElement(Inputs_1.YesNo, Object.assign({}, props));
            case 'switch':
                return react_1.default.createElement(Inputs_1.Switch, Object.assign({}, props));
            case "checkbox":
                return react_1.default.createElement(Inputs_1.Checkbox, Object.assign({}, props));
            case "radiobox":
                return react_1.default.createElement(Inputs_1.Radiobox, Object.assign({ options: props.options }, props));
            case 'wysiwyg':
                return react_1.default.createElement(Inputs_1.WYSIWYGEditor, Object.assign({}, props));
            case 'datepicker':
                return react_1.default.createElement(Inputs_1.DatePicker, Object.assign({}, props));
            case 'select':
                return react_1.default.createElement(Inputs_1.Select, Object.assign({}, props, { options: props.options }));
            case 'select_async':
                return react_1.default.createElement(Inputs_1.AsyncSelect, Object.assign({}, props, { options: props.options, loadOptions: props.loadOptions }));
            case 'textarea':
                return react_1.default.createElement(Inputs_1.Lines, Object.assign({}, props));
            case "list":
                return react_1.default.createElement(Inputs_1.FormList, Object.assign({}, props, { items: props.items }));
            case "tablelist":
                return react_1.default.createElement(Inputs_1.TableList, Object.assign({}, props, { items: props.items }));
            default:
                return react_1.default.createElement(Inputs_1.Line, Object.assign({}, props));
        }
    }, [props === null || props === void 0 ? void 0 : props.items, props === null || props === void 0 ? void 0 : props.name, props.type, props === null || props === void 0 ? void 0 : props.options, props.placeholder, props.value, props.defaultValue]);
    return OutputComponent;
};
exports.default = react_1.default.memo(InputChooser);
//# sourceMappingURL=InputChooser.js.map