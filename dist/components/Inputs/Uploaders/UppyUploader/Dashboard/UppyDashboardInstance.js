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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { DashboardModal } from "@uppy/react";
import XHRUpload from "@uppy/xhr-upload";
import { FaCamera } from "react-icons/fa";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { BaseButtonTheme } from "../../../../core/baseStyles.js";
var UppyDashboardInstance = function (props) {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var uppy = props.uppy.use(XHRUpload, {
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
    return (_jsxs("div", { children: [_jsx(DashboardModal, { uppy: uppy, open: open, onRequestClose: function () { return setOpen(false); } }), _jsx(BaseButtonTheme, __assign({ onClick: function () { return setOpen(true); } }, { children: _jsx(FaCamera, {}) }))] }));
};
export default UppyDashboardInstance;
//# sourceMappingURL=UppyDashboardInstance.js.map