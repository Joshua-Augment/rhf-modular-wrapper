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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const lexical_1 = require("lexical");
const selection_1 = require("@lexical/selection");
const DropdownButton_1 = __importDefault(require("../DropdownButton"));
const StyleDropDown = (props) => {
    const handleClick = (0, react_1.useCallback)((option) => {
        props.editor.update(() => {
            const selection = (0, lexical_1.$getSelection)();
            if ((0, lexical_1.$isRangeSelection)(selection)) {
                (0, selection_1.$patchStyleText)(selection, { [props.style]: option });
            }
        });
    }, [props.editor, props.style]);
    const options = (0, react_1.useMemo)(() => {
        return props.options.map((x) => (Object.assign(Object.assign({}, x), { clickHandler: () => {
                handleClick(x.id);
            } })));
    }, []);
    return react_1.default.createElement(DropdownButton_1.default, { selected: props.value, options: options });
};
exports.default = StyleDropDown;
//# sourceMappingURL=index.js.map