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
import { memo } from "react";
import { DatePicker, Select, AsyncSelect, WYSIWYGEditor, Line, Lines, YesNo, Checkbox, Radiobox, Switch, DropzoneUploader, FormList, TableList, } from "../Inputs/index";
var InputChooser = function (props) {
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
            return _jsx(Radiobox, __assign({}, props));
        case "radiobox":
            return _jsx(Radiobox, __assign({}, props));
        case "wysiwyg":
            return _jsx(WYSIWYGEditor, __assign({}, props));
        case "datepicker":
            return _jsx(DatePicker, __assign({}, props));
        case "select":
            return _jsx(Select, __assign({}, props));
        case "select_async":
            return _jsx(AsyncSelect, __assign({}, props));
        case "textarea":
            return _jsx(Lines, __assign({}, props));
        case "list":
            return _jsx(FormList, __assign({ disableController: true }, props));
        case "tablelist":
            return _jsx(TableList, __assign({ disableController: true }, props));
        default:
            return _jsx(Line, __assign({}, props));
    }
    // return OutputComponent;
};
export default memo(InputChooser);
//# sourceMappingURL=InputChooser.js.map