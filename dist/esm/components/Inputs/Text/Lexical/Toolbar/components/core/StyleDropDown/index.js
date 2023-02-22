import React, { useCallback, useMemo } from "react";
import { $getSelection, $isRangeSelection } from "lexical";
import { $patchStyleText, } from "@lexical/selection";
import DropdownButton from "../DropdownButton";
const StyleDropDown = (props) => {
    const handleClick = useCallback((option) => {
        props.editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                $patchStyleText(selection, { [props.style]: option });
            }
        });
    }, [props.editor, props.style]);
    const options = useMemo(() => {
        return props.options.map((x) => (Object.assign(Object.assign({}, x), { clickHandler: () => {
                handleClick(x.id);
            } })));
    }, []);
    return React.createElement(DropdownButton, { selected: props.value, options: options });
};
export default StyleDropDown;
//# sourceMappingURL=index.js.map