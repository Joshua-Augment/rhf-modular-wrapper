"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const InputChooser_1 = __importDefault(require("../../core/InputChooser"));
const fa_1 = require("react-icons/fa");
const styled_components_1 = __importDefault(require("styled-components"));
const core_1 = require("../../core");
const Table = styled_components_1.default.table `
  width: 100%;
  margin-top:5px;
  margin-bottom: 5px;
`;
const TableHead = styled_components_1.default.thead ``;
const TableBody = styled_components_1.default.tbody ``;
const TableTH = styled_components_1.default.th ``;
const TableTD = styled_components_1.default.td ``;
const TableTR = styled_components_1.default.tr ``;
const IconUp = (0, styled_components_1.default)(fa_1.FaPlusSquare) `
  color : green;
  font-size: 1.5em;
  margin : 2px 5px;  
  transition: 0.2s all ease-in-out;
  &:hover {
    filter : brightness(110%);    
    box-shadow: 1px 1px 10px 1px green;
  }
`;
const IconDown = (0, styled_components_1.default)(fa_1.FaMinusSquare) `
  color : red;
  font-size: 1.5em;
  margin : 2px 5px;  
  transition: 0.2s all ease-in-out;
  &:hover {
    filter : brightness(110%);    
    box-shadow: 1px 1px 10px 1px red;
  }
`;
const TableList = (props) => {
    var _a;
    return ((0, jsx_runtime_1.jsx)(core_1.InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'tablelist' }, props, { children: (0, jsx_runtime_1.jsx)(_Table, Object.assign({}, props)) })));
};
const _Table = (props) => {
    var _a, _b, _c, _d, _e, _f;
    const { fields, append, insert, remove } = (0, react_hook_form_1.useFieldArray)({ control: props.control, name: props.name });
    const TableTemplate = (_a = props.elemTable) !== null && _a !== void 0 ? _a : Table;
    const TableHeadTemplate = (_b = props.elemTableHead) !== null && _b !== void 0 ? _b : TableHead;
    const TableBodyTemplate = (_c = props.elemTableBody) !== null && _c !== void 0 ? _c : TableBody;
    const TableTRTemplate = (_d = props.elemTR) !== null && _d !== void 0 ? _d : TableTR;
    const TableTHTemplate = (_e = props.elemTH) !== null && _e !== void 0 ? _e : TableTH;
    const TableTDTemplate = (_f = props.elemTD) !== null && _f !== void 0 ? _f : TableTD;
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
    } });
    /* const generateRow = (field: any, i:number) => <TableTRTemplate key={`fw-${props.name}-${field.id}`}>
      {props.showIndex === true && <TableTDTemplate>{i + 1}</TableTDTemplate>}
      {props.items.map((item,iT) => <TableTDTemplate key={`fw-${props.name}-${field?.id}-${iT}`} ><InputChooser fields={field?.[i]?.[item.name] ?? null}  {...item} noLabel name={`${props.name}.${i}.${item.name}`}/></TableTDTemplate>)}
      {props.fixed !== true && <TableTDTemplate><IconUp onClick={()=>insert(i+1,emptyRow)} /> {<IconDown onClick={()=>{remove(i)}}/>}</TableTDTemplate>}
    </TableTRTemplate> */
    const headerGenerator = (0, react_1.useMemo)(() => {
        var _a;
        return (_a = props.headerTemplate) !== null && _a !== void 0 ? _a : (0, jsx_runtime_1.jsx)(TableHeadTemplate, { children: (0, jsx_runtime_1.jsxs)(TableTRTemplate, { children: [props.showIndex === true && (0, jsx_runtime_1.jsx)(TableTHTemplate, {}), props.items.map((item, key) => (0, jsx_runtime_1.jsx)(TableTHTemplate, { children: item.label }, `tl-${props.name}-${item.name}-th-${key}`)), props.fixed !== true && (0, jsx_runtime_1.jsx)(TableTHTemplate, {})] }) });
    }, [props.headerTemplate]);
    const footerGenerator = (0, react_1.useMemo)(() => { var _a; return (_a = props.footerTemplate) !== null && _a !== void 0 ? _a : headerGenerator; }, [props.footerTemplate]);
    const bodyGenerator = fields.map((field, i) => (0, jsx_runtime_1.jsxs)(TableTRTemplate, { children: [props.showIndex === true && (0, jsx_runtime_1.jsx)(TableTDTemplate, { children: i + 1 }), props.items.map((item, iT) => { var _a, _b; return (0, jsx_runtime_1.jsx)(TableTDTemplate, { children: (0, jsx_runtime_1.jsx)(InputChooser_1.default, Object.assign({ fields: (_b = (_a = field === null || field === void 0 ? void 0 : field[i]) === null || _a === void 0 ? void 0 : _a[item.name]) !== null && _b !== void 0 ? _b : null }, item, { noLabel: true, name: `${props.name}.${i}.${item.name}` })) }, `td-${field === null || field === void 0 ? void 0 : field.id}-${iT}`); }), "  ", props.fixed !== true && (0, jsx_runtime_1.jsxs)(TableTDTemplate, { children: [(0, jsx_runtime_1.jsx)(IconUp, { onClick: () => insert(i + 1, emptyRow) }), " ", (0, jsx_runtime_1.jsx)(IconDown, { onClick: () => { remove(i); } })] })] }, `tr-${field.id}-${i}`));
    return (0, jsx_runtime_1.jsxs)(TableTemplate, { children: [(props.header === undefined || props.header === 'top' || props.header === 'both' || props.header === 'header_footer') && headerGenerator, (0, jsx_runtime_1.jsx)(TableBodyTemplate, { children: bodyGenerator }), (props.header === 'footer' || props.header === 'header_footer') ? footerGenerator : (props.header === 'bottom' || props.header === 'both') && headerGenerator] });
};
exports.default = TableList;
//# sourceMappingURL=TableList.js.map