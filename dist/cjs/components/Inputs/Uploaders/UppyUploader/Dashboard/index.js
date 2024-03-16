"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = __importDefault(require("@uppy/core"));
const UppyDashboardInstance_1 = __importDefault(require("./UppyDashboardInstance"));
const InputWrapper_1 = __importDefault(require("../../../../core/InputWrapper"));
const react_hook_form_1 = require("react-hook-form");
const UppyDashboardUploader = (props) => {
    const uppy = new core_1.default();
    const { watch, setValue } = (0, react_hook_form_1.useFormContext)();
    const _val = watch(props.name);
    const val = (0, react_1.useMemo)(() => _val, [_val]);
    return ((0, jsx_runtime_1.jsx)(InputWrapper_1.default, Object.assign({ noBorder: true }, props, { children: (0, jsx_runtime_1.jsx)(UppyDashboardInstance_1.default, { uppy: uppy, value: val, onChange: (a) => setValue(props.name, a), metadata: props.metadata, endpoint: props.endpoint }) })));
};
exports.default = UppyDashboardUploader;
//# sourceMappingURL=index.js.map