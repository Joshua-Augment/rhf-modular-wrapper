"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Inputs_1 = require("../Inputs");
const Logger_1 = __importDefault(require("./Logger"));
const InputChooser = (props) => {
    const OutputComponent = (0, react_1.useMemo)(() => {
        Logger_1.default.info(`Choosing Input`, 'InputChooser', 'start');
        Logger_1.default.info(null, null, 'end');
        switch (props.type) {
            case 'custom':
                const Elem = props.elem;
                return (0, jsx_runtime_1.jsx)(Elem, Object.assign({}, props));
            case 'dropzone':
                return (0, jsx_runtime_1.jsx)(Inputs_1.DropzoneUploader, Object.assign({}, props));
            case 'yesno':
                return (0, jsx_runtime_1.jsx)(Inputs_1.YesNo, Object.assign({}, props));
            case 'switch':
                return (0, jsx_runtime_1.jsx)(Inputs_1.Switch, Object.assign({}, props));
            case "checkbox":
                return (0, jsx_runtime_1.jsx)(Inputs_1.Checkbox, Object.assign({}, props));
            case "radiobox":
                return (0, jsx_runtime_1.jsx)(Inputs_1.Radiobox, Object.assign({ options: props.options }, props));
            case 'wysiwyg':
                return (0, jsx_runtime_1.jsx)(Inputs_1.WYSIWYGEditor, Object.assign({}, props));
            case 'datepicker':
                return (0, jsx_runtime_1.jsx)(Inputs_1.DatePicker, Object.assign({}, props));
            case 'select':
                return (0, jsx_runtime_1.jsx)(Inputs_1.Select, Object.assign({}, props, { options: props.options }));
            case 'select_async':
                return (0, jsx_runtime_1.jsx)(Inputs_1.AsyncSelect, Object.assign({}, props, { options: props.options, loadOptions: props.loadOptions }));
            case 'textarea':
                return (0, jsx_runtime_1.jsx)(Inputs_1.Lines, Object.assign({}, props));
            case "list":
                return (0, jsx_runtime_1.jsx)(Inputs_1.FormList, Object.assign({}, props, { items: props.items }));
            case "tablelist":
                return (0, jsx_runtime_1.jsx)(Inputs_1.TableList, Object.assign({}, props, { items: props.items }));
            default:
                return (0, jsx_runtime_1.jsx)(Inputs_1.Line, Object.assign({}, props));
        }
    }, [props === null || props === void 0 ? void 0 : props.items, props === null || props === void 0 ? void 0 : props.name, props.type, props === null || props === void 0 ? void 0 : props.options, props.placeholder, props.value, props.defaultValue]);
    return OutputComponent;
};
exports.default = (0, react_1.memo)(InputChooser);
//# sourceMappingURL=InputChooser.js.map