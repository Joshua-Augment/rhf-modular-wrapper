"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dropzone_1 = require("react-dropzone");
var array_move_1 = require("array-move");
var fa_1 = require("react-icons/fa");
var index_1 = __importDefault(require("../../../core/InputWrapper/index"));
var styled_components_1 = __importDefault(require("styled-components"));
var helpers_1 = require("../../../core/helpers");
var DropzoneContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* padding:10px; */\n  margin: 5px 2px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: #e0e0e0;\n  border-radius: 2px;\n"], ["\n  /* padding:10px; */\n  margin: 5px 2px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: #e0e0e0;\n  border-radius: 2px;\n"])));
var PreviewContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* width:100%; */\n  padding: 5px;\n  margin: 5px;\n  background-color: #dfdada;\n  box-sizing: border-box;\n  border: 1px solid #777777;\n"], ["\n  /* width:100%; */\n  padding: 5px;\n  margin: 5px;\n  background-color: #dfdada;\n  box-sizing: border-box;\n  border: 1px solid #777777;\n"])));
var PreviewWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  margin: 5px 1px;\n  padding: 5px 10px;\n\n  &:not(:last-child) {\n    border-bottom: 1px solid #adadad;\n  }\n"], ["\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  margin: 5px 1px;\n  padding: 5px 10px;\n\n  &:not(:last-child) {\n    border-bottom: 1px solid #adadad;\n  }\n"])));
var ButtonsWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n"])));
var PaginationWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: gainsboro;\n  padding: 0 5px;\n  margin-left: 15px;\n  border-radius: 3px;\n"], ["\n  background-color: gainsboro;\n  padding: 0 5px;\n  margin-left: 15px;\n  border-radius: 3px;\n"])));
var ActionsWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
var DropzoneUploader = function (props) {
    return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(DropzoneHandler, __assign({}, props)) })));
};
var DropzoneHandler = function (props) {
    var _a;
    var _b = (0, react_dropzone_1.useDropzone)(), acceptedFiles = _b.acceptedFiles, getRootProps = _b.getRootProps, getInputProps = _b.getInputProps;
    // const [preview, setPreview] = useState<null | File>(null);
    (0, react_1.useEffect)(function () {
        if (props.value !== undefined && !(0, helpers_1.compareArrays)(props.value, props.value)) {
            var _files = __spreadArray([], props.value, true);
            // console.log("[useEffect] - dropzone",_files)
            // setValue(props.name, _files)
            props.onChange(_files);
        }
    }, [props.value]);
    (0, react_1.useEffect)(function () {
        var newFileList = Array.isArray(props.value) ? __spreadArray([], props.value, true) : [];
        newFileList.push.apply(newFileList, acceptedFiles);
        props.onChange(__spreadArray([], newFileList, true));
    }, [JSON.stringify(acceptedFiles)]);
    var showPreview = function (index) {
        // console.log(`showPreview ${index}, `,props, val)
        window.open(URL.createObjectURL(props.value[index]), "_blank");
        // if (props.newWindow) {
        // } else {
        //   setPreview(props.value[index]);
        // }
    };
    var handleDelete = function (index) {
        var rem = props.value.filter(function (x, i) { return i !== index; });
        props.onChange(rem);
    };
    var moveFile = function (index, change, isRelative) {
        if (isRelative === void 0) { isRelative = true; }
        var newFileArr = (0, array_move_1.arrayMoveImmutable)(props.value, index, isRelative ? index + change : change);
        props.onChange(newFileArr);
    };
    return ((0, jsx_runtime_1.jsxs)(DropzoneContainer, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: { width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" } }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({}, getRootProps(), { style: { width: "100%", height: "100%", position: "relative", textAlign: "center" } }, { children: [(0, jsx_runtime_1.jsx)("input", __assign({}, getInputProps())), (0, jsx_runtime_1.jsx)("p", { children: (_a = props.containerCaption) !== null && _a !== void 0 ? _a : "Drag 'n' drop some files here, or click to select files" })] })) })), props.value && props.value.length > 0 && ((0, jsx_runtime_1.jsx)(PreviewViewer, __assign({}, props, { files: props.value, showPreview: showPreview, moveFile: moveFile, handleDelete: handleDelete })))] }));
};
var PreviewViewer = function (props) {
    var Preview = props.previewBox;
    return props.previewBox && Preview !== undefined ? ((0, jsx_runtime_1.jsx)(Preview, __assign({}, props, { files: props.files }))) : ((0, jsx_runtime_1.jsx)(PreviewContainer, { children: props.files.map(function (_file, _index) { return ((0, jsx_runtime_1.jsxs)(PreviewWrapper, { children: [(0, jsx_runtime_1.jsxs)(ButtonsWrapper, { children: [_file.type.split("/")[0] === "image" && ((0, jsx_runtime_1.jsx)("img", { style: { marginRight: "5px" }, height: 34, width: "auto", src: URL.createObjectURL(_file), alt: _file.name })), _file.name, " - ", _file.size.toFixed(0), " bytes"] }), (0, jsx_runtime_1.jsxs)(ButtonsWrapper, { children: [(0, jsx_runtime_1.jsxs)(ActionsWrapper, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaEye, { title: "View", onClick: function () { return props.showPreview(_index); }, style: { margin: "0 10px", cursor: "pointer" } }), (0, jsx_runtime_1.jsx)(fa_1.FaTrash, { title: "Remove", onClick: function () { return props.handleDelete(_index); }, style: { margin: "0 10px", cursor: "pointer" } })] }), (0, jsx_runtime_1.jsxs)(PaginationWrapper, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaCaretUp, { title: "Move Up", onClick: function () { return props.moveFile(_index, -1); }, style: { color: _index === 0 ? "gainsboro" : "black", pointerEvents: _index === 0 ? "none" : "all", cursor: "pointer" } }), (0, jsx_runtime_1.jsx)(fa_1.FaCaretDown, { title: "Move Down", onClick: function () { return props.moveFile(_index, 1); }, style: {
                                        color: _index >= props.files.length - 1 ? "gainsboro" : "black",
                                        pointerEvents: _index >= props.files.length - 1 ? "none" : "all",
                                        cursor: "pointer",
                                    } })] })] })] }, "".concat(props.name, "-pr-").concat(_index))); }) }));
};
exports.default = DropzoneUploader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=index.js.map