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
import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import InputWrapper from "../../core/InputWrapper/index.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
var WYSIWYG = function (props) {
    var _a;
    return (_jsx(InputWrapper, __assign({ empty: _jsx("p", {}), type: (_a = props.type) !== null && _a !== void 0 ? _a : "wysiwyg" }, props, { children: _jsx(ReactQuillWrapper, __assign({}, props)) })));
};
// const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var ReactQuillWrapper = function (props) {
    var toolbarOptions = useMemo(function () {
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
    return (_jsx(ReactQuill, __assign({ theme: "snow", modules: { toolbar: toolbarOptions }, value: props.value, onBlur: props.onBlur, onChange: props.onChange }, props.quillProps)));
};
export default WYSIWYG;
//# sourceMappingURL=WYSIWYG.js.map