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
import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useContext, useMemo /* , { useMemo }  */ } from "react";
import { DatePicker, Select, AsyncSelect, WYSIWYGEditor, Line, Lines, YesNo, Checkbox, Radiobox, Switch, DropzoneUploader, FormList, TableList, } from "../Inputs/index";
import Logger from "./Logger/index";
import { ThemeContext } from "./Form";
var InputChooser = function (props) {
    var debug = useContext(ThemeContext).debug;
    var OutputComponent = useMemo(function () {
        Logger.info(debug, "Choosing Input", "InputChooser", "start");
        Logger.info(debug, null, null, "end");
        switch (props.type) {
            case "custom":
                var Elem = props.elem;
                return _jsx(Elem, __assign({}, props));
            case "dropzone":
                return _jsx(DropzoneUploader, __assign({}, props));
            case "yesno":
                return _jsx(YesNo, __assign({}, props));
            case "switch":
                return _jsx(Switch, __assign({}, props));
            case "checkbox":
                return _jsx(Checkbox, __assign({}, props));
            case "radio":
                return _jsx(Radiobox, __assign({ options: props.options }, props));
            case "radiobox":
                return _jsx(Radiobox, __assign({ options: props.options }, props));
            case "wysiwyg":
                return _jsx(WYSIWYGEditor, __assign({}, props));
            case "datepicker":
                return _jsx(DatePicker, __assign({}, props));
            case "select":
                return _jsx(Select, __assign({}, props, { options: props.options }));
            case "select_async":
                return _jsx(AsyncSelect, __assign({}, props, { options: props.options, loadOptions: props.loadOptions }));
            case "textarea":
                return _jsx(Lines, __assign({}, props));
            case "list":
                return _jsx(FormList, __assign({}, props, { items: props.items }));
            case "tablelist":
                return _jsx(TableList, __assign({}, props, { items: props.items }));
            default:
                return _jsx(Line, __assign({}, props));
        }
    }, [props === null || props === void 0 ? void 0 : props.items, props === null || props === void 0 ? void 0 : props.name, props.type, props === null || props === void 0 ? void 0 : props.options, props.placeholder, props.value, props.defaultValue]);
    return OutputComponent;
};
export default memo(InputChooser);
//# sourceMappingURL=InputChooser.js.map