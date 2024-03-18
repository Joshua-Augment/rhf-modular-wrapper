import React from "react";
import { ICheckboxes } from "../../core/index";

const CheckboxGroup = (props: ICheckboxes) => {
  const orientation = props.orientation ?? "horizontal";
  return (
    <div>
      {props.title && <div className="form-label">{props.title}</div>}
      <div className={`checkbox-group ${orientation === "horizontal" ? "f-row" : "f-col"}`}>{props.children as any}</div>
    </div>
  );
};

export default CheckboxGroup;
