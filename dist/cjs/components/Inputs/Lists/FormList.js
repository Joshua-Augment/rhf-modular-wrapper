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
const styled_components_1 = __importDefault(require("styled-components"));
const InputChooser_1 = __importDefault(require("../../core/InputChooser"));
const fa_1 = require("react-icons/fa");
const Row = styled_components_1.default.div `
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: -15px;
  margin-left: -15px;
`;
const Col = styled_components_1.default.div `
  flex: 0 0 ${({ g }) => `${(g !== null && g !== void 0 ? g : 12) * 100 / 12}%`};
  width : ${({ g }) => `${(g !== null && g !== void 0 ? g : 12) * 100 / 12}%`};
  padding-right : 5px;

`;
const iconStyle = {
    fontSize: '30px',
    cursor: 'pointer',
    textAlign: 'right'
};
const FormList = (props) => {
    const { control } = (0, react_hook_form_1.useFormContext)();
    const { fields, append, remove } = (0, react_hook_form_1.useFieldArray)({ control, name: props.name });
    const emptyRow = (0, react_1.useMemo)(() => {
        if (props.emptyRow) {
            return props.emptyRow;
        }
        else {
            let obj = {};
            props.items.forEach(i => obj[i.name] = '');
            return obj;
        }
    }, []);
    (0, react_1.useEffect)(() => { if (fields.length === 0) {
        append(emptyRow);
    } }, []);
    const bodygenerator = fields.map((field, i) => react_1.default.createElement(Row, { key: `fw-${props.name}-${i}` },
        props.showIndex === true && react_1.default.createElement(Col, { g: 1 }, i + 1),
        props.items.map((item, iT) => { var _a; return react_1.default.createElement(Col, { g: (_a = item.grid) !== null && _a !== void 0 ? _a : 12 / (props.items.length + (props.showIndex ? 1 : 0) + (props.fixed !== true ? 1 : 0)), key: `fw-${props.name}-${i}-${iT}-iew` },
            react_1.default.createElement(InputChooser_1.default, Object.assign({}, item, { noBorder: true, name: `${props.name}.${i}.${item.name}` }))); }),
        props.fixed !== true && react_1.default.createElement(Col, { g: 1 },
            react_1.default.createElement(fa_1.FaPlusSquare, { style: Object.assign(Object.assign({}, iconStyle), { color: props.maxItems && fields.length >= props.maxItems ? 'olive' : 'green' }), onClick: () => { if (!(props.maxItems && fields.length >= props.maxItems)) {
                    append(emptyRow);
                } } }),
            " ",
            react_1.default.createElement(fa_1.FaMinusSquare, { style: Object.assign(Object.assign({}, iconStyle), { color: fields.length > 1 ? 'red' : 'maroon' }), onClick: () => { if (fields.length > 1) {
                    console.log("Removing....", i);
                    remove(i);
                } } }))));
    return (react_1.default.createElement(InputElemWrapper_1.default, Object.assign({}, props, { noBorder: true, onChange: () => { }, value: null }),
        react_1.default.createElement("div", null, bodygenerator)));
};
exports.default = FormList;
//# sourceMappingURL=FormList.js.map