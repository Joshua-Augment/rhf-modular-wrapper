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
var core_1 = __importDefault(require("@uppy/core"));
var UppyDashboardInstance_1 = __importDefault(require("./UppyDashboardInstance"));
var index_1 = __importDefault(require("../../../../core/InputWrapper/index"));
var UppyDashboardUploader = function (props) {
    return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({ empty: [], noBorder: true }, props, { children: (0, jsx_runtime_1.jsx)(UppyElement, __assign({}, props)) })));
};
var UppyElement = function (props) {
    var uppy = new core_1.default();
    return ((0, jsx_runtime_1.jsx)(UppyDashboardInstance_1.default, { uppy: uppy, value: props.value, onChange: function (a) { return props.onChange(a); }, metadata: props.metadata, endpoint: props.endpoint }));
};
exports.default = UppyDashboardUploader;
//# sourceMappingURL=index.js.map