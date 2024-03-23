"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var index_1 = require("../Inputs/index");
var index_2 = __importDefault(require("./Logger/index"));
var Form_1 = require("./Form");
var InputChooser = function (props) {
    var debug = (0, react_1.useContext)(Form_1.ThemeContext).debug;
    var OutputComponent = (0, react_1.useMemo)(function () {
        index_2.default.info(debug, "Choosing Input", "InputChooser", "start");
        index_2.default.info(debug, null, null, "end");
        switch (props.type) {
            case "custom":
                var Elem = props.elem;
                return (0, jsx_runtime_1.jsx)(Elem, __assign({}, props));
            case "dropzone":
                return (0, jsx_runtime_1.jsx)(index_1.DropzoneUploader, __assign({}, props));
            case "yesno":
                return (0, jsx_runtime_1.jsx)(index_1.YesNo, __assign({}, props));
            case "switch":
                return (0, jsx_runtime_1.jsx)(index_1.Switch, __assign({}, props));
            case "checkbox":
                return (0, jsx_runtime_1.jsx)(index_1.Checkbox, __assign({}, props));
            case "radio":
                return (0, jsx_runtime_1.jsx)(index_1.Radiobox, __assign({ options: props.options }, props));
            case "radiobox":
                return (0, jsx_runtime_1.jsx)(index_1.Radiobox, __assign({ options: props.options }, props));
            case "wysiwyg":
                return (0, jsx_runtime_1.jsx)(index_1.WYSIWYGEditor, __assign({}, props));
            case "datepicker":
                return (0, jsx_runtime_1.jsx)(index_1.DatePicker, __assign({}, props));
            case "select":
                return (0, jsx_runtime_1.jsx)(index_1.Select, __assign({}, props, { options: props.options }));
            case "select_async":
                return (0, jsx_runtime_1.jsx)(index_1.AsyncSelect, __assign({}, props, { options: props.options, loadOptions: props.loadOptions }));
            case "textarea":
                return (0, jsx_runtime_1.jsx)(index_1.Lines, __assign({}, props));
            case "list":
                return (0, jsx_runtime_1.jsx)(index_1.FormList, __assign({ disableController: true }, props, { items: props.items }));
            case "tablelist":
                return (0, jsx_runtime_1.jsx)(index_1.TableList, __assign({ disableController: true }, props, { items: props.items }));
            default:
                return (0, jsx_runtime_1.jsx)(index_1.Line, __assign({}, props));
        }
    }, [props === null || props === void 0 ? void 0 : props.items, props === null || props === void 0 ? void 0 : props.name, props.type, props === null || props === void 0 ? void 0 : props.options, props.placeholder, props.value, props.defaultValue]);
    return OutputComponent;
};
exports.default = (0, react_1.memo)(InputChooser);
//# sourceMappingURL=InputChooser.js.map