import React from 'react';
import { DatePicker, Select, AsyncSelect, WYSIWYGEditor, Line, Lines, YesNo, Checkbox, Radiobox, Switch, DropzoneUploader, FormList, TableList } from '../Inputs';
const InputChooser = (props) => {
    const OutputComponent = () => {
        switch (props.type) {
            case 'custom':
                const Elem = props.elem;
                return React.createElement(Elem, Object.assign({}, props));
            case 'dropzone':
                return React.createElement(DropzoneUploader, Object.assign({}, props));
            case 'yesno':
                return React.createElement(YesNo, Object.assign({}, props));
            case 'switch':
                return React.createElement(Switch, Object.assign({}, props));
            case "checkbox":
                return React.createElement(Checkbox, Object.assign({}, props));
            case "radiobox":
                return React.createElement(Radiobox, Object.assign({ options: props.options }, props));
            case 'wysiwyg':
                return React.createElement(WYSIWYGEditor, Object.assign({}, props));
            case 'datepicker':
                return React.createElement(DatePicker, Object.assign({}, props));
            case 'select':
                return React.createElement(Select, Object.assign({}, props, { options: props.options }));
            case 'select_async':
                return React.createElement(AsyncSelect, Object.assign({}, props, { options: props.options, loadOptions: props.loadOptions }));
            case 'textarea':
                return React.createElement(Lines, Object.assign({}, props));
            case "list":
                return React.createElement(FormList, Object.assign({}, props, { items: props.items }));
            case "tablelist":
                return React.createElement(TableList, Object.assign({}, props, { items: props.items }));
            default:
                return React.createElement(Line, Object.assign({}, props));
        }
    };
    return OutputComponent();
};
export default InputChooser;
//# sourceMappingURL=InputChooser.js.map