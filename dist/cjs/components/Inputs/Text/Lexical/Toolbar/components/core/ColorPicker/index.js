"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_color_1 = require("react-color");
const ColorPicker = (props) => {
    var _a;
    const [color, setColor] = (0, react_1.useState)((_a = props.selectedColor) !== null && _a !== void 0 ? _a : '#000000');
    (0, react_1.useEffect)(() => {
        if (props.selectedColor !== undefined) {
            setColor(props.selectedColor);
        }
    }, [props.selectedColor]);
    const handleChange = (newColor) => {
        console.log("[colorHandleChange] - color : ", newColor);
        setColor(newColor.hex);
        props.onColorChanged(newColor.hex);
    };
    return (react_1.default.createElement(react_color_1.SketchPicker, { color: color, onChangeComplete: handleChange }));
};
exports.default = ColorPicker;
//# sourceMappingURL=index.js.map