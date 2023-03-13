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
const react_hook_form_1 = require("react-hook-form");
const InputElemWrapper_1 = __importDefault(require("../../core/InputElemWrapper"));
const InputChooser_1 = __importDefault(require("../../core/InputChooser"));
const fa_1 = require("react-icons/fa");
const TableList = (props) => {
    const { control } = (0, react_hook_form_1.useFormContext)();
    const { fields, append, remove } = (0, react_hook_form_1.useFieldArray)({ control, name: props.name });
    const generateRow = (0, react_1.useCallback)((i) => react_1.default.createElement("tr", { key: `fw-${props.name}-${i}` },
        props.showIndex === true && react_1.default.createElement("td", null, i + 1),
        props.items.map((item, iT) => react_1.default.createElement("td", { key: `fw-${props.name}-${i}-${iT}-iew` },
            react_1.default.createElement(InputChooser_1.default, Object.assign({}, item, { noLabel: true, name: `${props.name}.${i}.${item.name}` })))),
        props.fixed !== true && react_1.default.createElement("td", null,
            react_1.default.createElement(fa_1.FaPlusSquare, { onClick: () => { var _a; return append((_a = props.emptyRow) !== null && _a !== void 0 ? _a : {}); } }),
            " ",
            react_1.default.createElement(fa_1.FaMinusSquare, { onClick: () => { console.log("[removing...]", i); remove(i); } }))), [fields]);
    const headerGenerator = (0, react_1.useMemo)(() => {
        var _a;
        return (_a = props.headerTemplate) !== null && _a !== void 0 ? _a : react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null,
                props.showIndex === true && react_1.default.createElement("th", null),
                props.items.map((item, key) => react_1.default.createElement("th", { key: `tl-${props.name}-${item.name}-th-${key}` }, item.label)),
                props.fixed !== true && react_1.default.createElement("th", null)));
    }, []);
    const footerGenerator = (0, react_1.useMemo)(() => { var _a; return (_a = props.footerTemplate) !== null && _a !== void 0 ? _a : headerGenerator; }, []);
    // const bodyGenerator = useMemo(()=> fields.length === 0 ? generateRow(0) : fields.map((field,i) => generateRow(i)),[fields])
    const bodyGenerator = (0, react_1.useMemo)(() => fields.map((field, i) => generateRow(i)), [fields]);
    return (react_1.default.createElement(InputElemWrapper_1.default, Object.assign({}, props, { onChange: () => { }, value: null }),
        react_1.default.createElement("div", null,
            (props.header === undefined || props.header === 'top' || props.header === 'both') && headerGenerator,
            react_1.default.createElement("tbody", null, bodyGenerator),
            (props.header === 'footer' || props.header === 'header_footer') ? footerGenerator : (props.header === 'bottom' || props.header === 'both') && headerGenerator)));
};
exports.default = TableList;
//# sourceMappingURL=TableList.js.map