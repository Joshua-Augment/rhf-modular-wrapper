"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = __importDefault(require("@uppy/core"));
const UppyDashboardInstance_1 = __importDefault(require("./UppyDashboardInstance"));
const InputWrapper_1 = __importDefault(require("../../../../core/InputWrapper"));
const UppyUploader = (props) => {
    const uppy = new core_1.default();
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({ noBorder: true }, props), (IWProps) => (react_1.default.createElement(UppyDashboardInstance_1.default, { uppy: uppy, value: IWProps.value, onChange: IWProps.onChange, metadata: props.metadata, endpoint: props.endpoint }))));
};
exports.default = UppyUploader;
//# sourceMappingURL=index.js.map