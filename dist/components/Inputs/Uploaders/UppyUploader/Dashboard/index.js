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
import Uppy from "@uppy/core";
import UppyDashboardInstance from "./UppyDashboardInstance.js";
import InputWrapper from "../../../../core/InputWrapper/index.js";
var UppyDashboardUploader = function (props) {
    return (_jsx(InputWrapper, __assign({ noBorder: true }, props, { children: _jsx(UppyElement, __assign({}, props)) })));
};
var UppyElement = function (props) {
    var uppy = new Uppy();
    return (_jsx(UppyDashboardInstance, { uppy: uppy, value: props.value, onChange: function (a) { return props.onChange(a); }, metadata: props.metadata, endpoint: props.endpoint }));
};
export default UppyDashboardUploader;
//# sourceMappingURL=index.js.map