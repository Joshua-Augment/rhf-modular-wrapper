import React, { memo, useContext } from "react";
import {
  DatePicker,
  Select,
  AsyncSelect,
  WYSIWYGEditor,
  Line,
  Lines,
  YesNo,
  Checkbox,
  Radiobox,
  Switch,
  DropzoneUploader,
  FormList,
  TableList,
} from "../Inputs/index";
import { IList, InputChooserProps, InputType, ITableList } from "./interfaces/lists";
import { ThemeContext } from "./Form";
import { IDatePicker, IRadiobox, ISelect, ISelectAsync, ISwitch } from "./interfaces";

const InputChooser = <T extends InputType>(props: InputChooserProps<T>) => {
  switch (props.type) {
    case "custom":
      const Elem = props.elem;
      return <Elem {...props} />;
    case "dropzone":
      return <DropzoneUploader {...props} />;
    case "yesno":
      return <YesNo {...props} />;
    case "switch":
      return <Switch {...(props as ISwitch)} />;
    case "checkbox":
      return <Checkbox {...props} />;
    case "radio":
      return <Radiobox {...(props as IRadiobox)} />;
    case "radiobox":
      return <Radiobox {...(props as IRadiobox)} />;
    case "wysiwyg":
      return <WYSIWYGEditor {...props} />;
    case "datepicker":
      return <DatePicker {...(props as IDatePicker)} />;
    case "select":
      return <Select {...(props as ISelect)} />;
    case "select_async":
      return <AsyncSelect {...(props as ISelectAsync)} />;
    case "textarea":
      return <Lines {...props} />;
    case "list":
      return <FormList disableController {...(props as IList)} />;
    case "tablelist":
      return <TableList disableController {...(props as ITableList)} />;
    default:
      return <Line {...props} />;
  }
  // return OutputComponent;
};

export default memo(InputChooser);
