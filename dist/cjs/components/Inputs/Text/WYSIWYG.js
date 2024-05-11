"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var index_1 = __importDefault(require("../../core/InputWrapper/index"));
var react_quill_1 = __importDefault(require("react-quill"));
require("react-quill/dist/quill.snow.css");
var WYSIWYG = function (props) {
    var _a;
    return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({ empty: (0, jsx_runtime_1.jsx)("p", {}), type: (_a = props.type) !== null && _a !== void 0 ? _a : "wysiwyg" }, props, { children: (0, jsx_runtime_1.jsx)(ReactQuillWrapper, __assign({}, props)) })));
};
// const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var ReactQuillWrapper = function (props) {
    var toolbarOptions = (0, react_1.useMemo)(function () {
        var isMobile = screen.width <= 768;
        return props.toolbar
            ? Array.isArray(props.toolbar)
                ? props.toolbar
                : isMobile
                    ? props.toolbar.mobile
                    : props.toolbar.normal
            : isMobile
                ? [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ["bold", "italic", "underline", "strike"],
                    ["link", "image"],
                    [{ list: "ordered" }, { list: "bullet" }],
                ]
                : [
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote", "code-block"],
                    ["link", "image"],
                    [{ header: 1 }, { header: 2 }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ script: "sub" }, { script: "super" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    [{ direction: "rtl" }],
                    [{ size: ["small", false, "large", "huge"] }],
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [{ color: [] }, { background: [] }],
                    [{ font: [] }],
                    [{ align: [] }],
                    ["clean"], // remove formatting button
                ];
    }, [screen.width, screen.height]);
    return ((0, jsx_runtime_1.jsx)(react_quill_1.default, __assign({ theme: "snow", modules: { toolbar: toolbarOptions }, value: props.value, onBlur: props.onBlur, onChange: props.onChange }, props.quillProps)));
};
exports.default = WYSIWYG;
//# sourceMappingURL=WYSIWYG.js.map