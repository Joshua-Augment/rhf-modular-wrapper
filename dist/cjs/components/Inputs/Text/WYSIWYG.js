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
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const react_quill_1 = __importDefault(require("react-quill"));
require("react-quill/dist/quill.snow.css");
const useInputValnError_1 = require("../../core/hook/useInputValnError");
// import { Controller } from 'react-hook-form';
const WYSIWYG = (props) => {
    var _a;
    const { value, setValue } = (0, useInputValnError_1.useInputValAndError)(props.name);
    // console.log('[WYSIWYG Value] - ',value)
    // console.log('[WYSIWYG Prop.Value] - ',props.value)
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    (0, react_1.useEffect)(() => { if (value === undefined || value === null) {
        setValue(props.name, '');
    } }, [value]);
    // const val = useMemo(() => _val ,[_val])
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'wysiwyg' }, props),
        react_1.default.createElement(ReactQuillWrapper, Object.assign({}, props))));
};
const ReactQuillWrapper = (props) => {
    const toolbarOptions = (0, react_1.useMemo)(() => ([
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean'] // remove formatting button
    ]), []);
    return react_1.default.createElement(react_quill_1.default, { theme: 'snow', modules: { toolbar: toolbarOptions }, onChange: (a) => props.onChange(a), value: props.value, onBlur: props.onBlur });
    // return <Controller 
    //   name={props.name}
    //   control={props.control}
    //   render={({field: {value,onChange, onBlur}}) => <ReactQuill 
    //     theme={'snow'} 
    //     modules={{toolbar : toolbarOptions}} 
    //     onChange={(a:any) => onChange(a)}  
    //     value={value}
    //     onBlur={onBlur}
    //   />}
    // />
};
exports.default = WYSIWYG;
//# sourceMappingURL=WYSIWYG.js.map