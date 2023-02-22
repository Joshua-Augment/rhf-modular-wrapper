import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
const ColorPicker = (props) => {
    var _a;
    const [color, setColor] = useState((_a = props.selectedColor) !== null && _a !== void 0 ? _a : '#000000');
    useEffect(() => {
        if (props.selectedColor !== undefined) {
            setColor(props.selectedColor);
        }
    }, [props.selectedColor]);
    const handleChange = (newColor) => {
        console.log("[colorHandleChange] - color : ", newColor);
        setColor(newColor.hex);
        props.onColorChanged(newColor.hex);
    };
    return (React.createElement(SketchPicker, { color: color, onChangeComplete: handleChange }));
};
export default ColorPicker;
//# sourceMappingURL=index.js.map