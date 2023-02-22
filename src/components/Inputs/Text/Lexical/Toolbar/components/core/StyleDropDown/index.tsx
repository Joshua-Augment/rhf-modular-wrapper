import React, { useCallback, useMemo } from "react";
import { $getSelection, $isRangeSelection, LexicalEditor } from "lexical";
import {
  $getSelectionStyleValueForProperty,
  $isParentElementRTL,
  $patchStyleText,
  $selectAll,
  $setBlocksType_experimental,
} from "@lexical/selection";
import DropdownButton, { IDropDownButton } from "../DropdownButton";
interface IStyleDropDown extends IDropDownButton {
  editor: LexicalEditor;
  value?: string;
  style: string;
  disabled?: boolean;
}

const StyleDropDown = (props: IStyleDropDown) => {
  const handleClick = useCallback(
    (option: string) => {
      props.editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $patchStyleText(selection, { [props.style]: option });
        }
      });
    },
    [props.editor, props.style]
  );

  const options = useMemo(() => {
    return props.options.map((x) => ({
      ...x,
      clickHandler: () => {
        handleClick(x.id);
      },
    }));
  }, []);

  return <DropdownButton selected={props.value} options={options} />;
};

export default StyleDropDown;
