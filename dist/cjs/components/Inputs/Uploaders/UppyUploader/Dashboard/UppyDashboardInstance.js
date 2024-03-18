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
var react_2 = require("@uppy/react");
var xhr_upload_1 = __importDefault(require("@uppy/xhr-upload"));
var fa_1 = require("react-icons/fa");
require("@uppy/core/dist/style.css");
require("@uppy/dashboard/dist/style.css");
var baseStyles_1 = require("../../../../core/baseStyles");
var UppyDashboardInstance = function (props) {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var uppy = props.uppy.use(xhr_upload_1.default, {
        id: "rhf-wrapper-dashboard-".concat(new Date().getTime()),
        endpoint: props.endpoint,
        formData: true,
        fieldName: "files",
    });
    // const uppy = useUppy(() => {
    //   return new Uppy()
    //     .use(XHRUpload, { endpoint: props.endpoint, formData : true,  fieldName: 'files'  })
    // })
    uppy.on("file-added", function (file) {
        uppy.setFileMeta(file.id, __assign({}, props.metadata));
    });
    uppy.on("upload-success", function (file, response) {
        var httpBody = response.body; // extracted response data
        // do something with file and response
        props.onChange(__spreadArray(__spreadArray([], props.value, true), [httpBody], false));
    });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_2.DashboardModal, { uppy: uppy, open: open, onRequestClose: function () { return setOpen(false); } }), (0, jsx_runtime_1.jsx)(baseStyles_1.BaseButtonTheme, __assign({ onClick: function () { return setOpen(true); } }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaCamera, {}) }))] }));
};
exports.default = UppyDashboardInstance;
//# sourceMappingURL=UppyDashboardInstance.js.map