import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useMemo } /* , { useMemo }  */ from 'react';
import { DatePicker, Select, AsyncSelect, WYSIWYGEditor, Line, Lines, YesNo, Checkbox, Radiobox, Switch, DropzoneUploader, FormList, TableList } from '../Inputs';
import Logger from './Logger';
const InputChooser = (props) => {
    const OutputComponent = useMemo(() => {
        Logger.info(`Choosing Input`, 'InputChooser', 'start');
        Logger.info(null, null, 'end');
        switch (props.type) {
            case 'custom':
                const Elem = props.elem;
                return _jsx(Elem, Object.assign({}, props));
            case 'dropzone':
                return _jsx(DropzoneUploader, Object.assign({}, props));
            case 'yesno':
                return _jsx(YesNo, Object.assign({}, props));
            case 'switch':
                return _jsx(Switch, Object.assign({}, props));
            case "checkbox":
                return _jsx(Checkbox, Object.assign({}, props));
            case "radiobox":
                return _jsx(Radiobox, Object.assign({ options: props.options }, props));
            case 'wysiwyg':
                return _jsx(WYSIWYGEditor, Object.assign({}, props));
            case 'datepicker':
                return _jsx(DatePicker, Object.assign({}, props));
            case 'select':
                return _jsx(Select, Object.assign({}, props, { options: props.options }));
            case 'select_async':
                return _jsx(AsyncSelect, Object.assign({}, props, { options: props.options, loadOptions: props.loadOptions }));
            case 'textarea':
                return _jsx(Lines, Object.assign({}, props));
            case "list":
                return _jsx(FormList, Object.assign({}, props, { items: props.items }));
            case "tablelist":
                return _jsx(TableList, Object.assign({}, props, { items: props.items }));
            default:
                return _jsx(Line, Object.assign({}, props));
        }
    }, [props === null || props === void 0 ? void 0 : props.items, props === null || props === void 0 ? void 0 : props.name, props.type, props === null || props === void 0 ? void 0 : props.options, props.placeholder, props.value, props.defaultValue]);
    return OutputComponent;
};
export default memo(InputChooser);
//# sourceMappingURL=InputChooser.js.map