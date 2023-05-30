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
const core_1 = __importDefault(require("@uppy/core"));
const UppyDashboardInstance_1 = __importDefault(require("./UppyDashboardInstance"));
const InputWrapper_1 = __importDefault(require("../../../../core/InputWrapper"));
const react_hook_form_1 = require("react-hook-form");
const UppyDashboardUploader = (props) => {
    const uppy = new core_1.default();
    const { watch, setValue } = (0, react_hook_form_1.useFormContext)();
    const _val = watch(props.name);
    const val = (0, react_1.useMemo)(() => _val, [_val]);
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({ noBorder: true }, props),
        react_1.default.createElement(UppyDashboardInstance_1.default, { uppy: uppy, value: val, onChange: (a) => setValue(props.name, a), metadata: props.metadata, endpoint: props.endpoint })));
};
exports.default = UppyDashboardUploader;
//# sourceMappingURL=index.js.map