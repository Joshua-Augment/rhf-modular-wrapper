import React, { memo, useMemo /* , { useMemo }  */ } from "react";
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
import { TListItems } from "./interfaces/lists";
import Logger from "./Logger/index";

const InputChooser = (props: TListItems) => {
  const OutputComponent = useMemo(() => {
    Logger.info(`Choosing Input`, "InputChooser", "start");
    Logger.info(null, null, "end");
    switch (props.type) {
      case "custom":
        const Elem = props.elem;
        return <Elem {...props} />;
      case "dropzone":
        return <DropzoneUploader {...props} />;
      case "yesno":
        return <YesNo {...props} />;
      case "switch":
        return <Switch {...props} />;
      case "checkbox":
        return <Checkbox {...props} />;
      case "radio":
        return <Radiobox options={props.options} {...props} />;
      case "radiobox":
        return <Radiobox options={props.options} {...props} />;
      case "wysiwyg":
        return <WYSIWYGEditor {...props} />;
      case "datepicker":
        return <DatePicker {...props} />;
      case "select":
        return <Select {...props} options={props.options} />;
      case "select_async":
        return <AsyncSelect {...props} options={props.options} loadOptions={props.loadOptions} />;
      case "textarea":
        return <Lines {...props} />;
      case "list":
        return <FormList {...props} items={props.items} />;
      case "tablelist":
        return <TableList {...props} items={props.items} />;
      default:
        return <Line {...props} />;
    }
  }, [props?.items, props?.name, props.type, props?.options, props.placeholder, props.value, props.defaultValue]);

  return OutputComponent;
};

export default memo(InputChooser);
