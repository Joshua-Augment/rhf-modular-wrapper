import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import InputChooser from '../../core/InputChooser';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import styled from "styled-components";
import { InputWrapper } from '../../core';
const Table = styled.table `
  width: 100%;
  margin-top:5px;
  margin-bottom: 5px;
`;
const TableHead = styled.thead ``;
const TableBody = styled.tbody ``;
const TableTH = styled.th ``;
const TableTD = styled.td ``;
const TableTR = styled.tr ``;
const IconUp = styled(FaPlusSquare) `
  color : green;
  font-size: 1.5em;
  margin : 2px 5px;  
  transition: 0.2s all ease-in-out;
  &:hover {
    filter : brightness(110%);    
    box-shadow: 1px 1px 10px 1px green;
  }
`;
const IconDown = styled(FaMinusSquare) `
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
    return (_jsx(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'tablelist' }, props, { children: _jsx(_Table, Object.assign({}, props)) })));
};
const _Table = (props) => {
    var _a, _b, _c, _d, _e, _f;
    const { fields, append, insert, remove } = useFieldArray({ control: props.control, name: props.name });
    const TableTemplate = (_a = props.elemTable) !== null && _a !== void 0 ? _a : Table;
    const TableHeadTemplate = (_b = props.elemTableHead) !== null && _b !== void 0 ? _b : TableHead;
    const TableBodyTemplate = (_c = props.elemTableBody) !== null && _c !== void 0 ? _c : TableBody;
    const TableTRTemplate = (_d = props.elemTR) !== null && _d !== void 0 ? _d : TableTR;
    const TableTHTemplate = (_e = props.elemTH) !== null && _e !== void 0 ? _e : TableTH;
    const TableTDTemplate = (_f = props.elemTD) !== null && _f !== void 0 ? _f : TableTD;
    const emptyRow = useMemo(() => {
        if (props.emptyRow) {
            return props.emptyRow;
        }
        else {
            let obj = {};
            props.items.forEach(i => obj[i.name] = '');
            return obj;
        }
    }, []);
    useEffect(() => { if (fields.length === 0) {
        append(emptyRow);
    } });
    /* const generateRow = (field: any, i:number) => <TableTRTemplate key={`fw-${props.name}-${field.id}`}>
      {props.showIndex === true && <TableTDTemplate>{i + 1}</TableTDTemplate>}
      {props.items.map((item,iT) => <TableTDTemplate key={`fw-${props.name}-${field?.id}-${iT}`} ><InputChooser fields={field?.[i]?.[item.name] ?? null}  {...item} noLabel name={`${props.name}.${i}.${item.name}`}/></TableTDTemplate>)}
      {props.fixed !== true && <TableTDTemplate><IconUp onClick={()=>insert(i+1,emptyRow)} /> {<IconDown onClick={()=>{remove(i)}}/>}</TableTDTemplate>}
    </TableTRTemplate> */
    const headerGenerator = useMemo(() => {
        var _a;
        return (_a = props.headerTemplate) !== null && _a !== void 0 ? _a : _jsx(TableHeadTemplate, { children: _jsxs(TableTRTemplate, { children: [props.showIndex === true && _jsx(TableTHTemplate, {}), props.items.map((item, key) => _jsx(TableTHTemplate, { children: item.label }, `tl-${props.name}-${item.name}-th-${key}`)), props.fixed !== true && _jsx(TableTHTemplate, {})] }) });
    }, [props.headerTemplate]);
    const footerGenerator = useMemo(() => { var _a; return (_a = props.footerTemplate) !== null && _a !== void 0 ? _a : headerGenerator; }, [props.footerTemplate]);
    const bodyGenerator = fields.map((field, i) => _jsxs(TableTRTemplate, { children: [props.showIndex === true && _jsx(TableTDTemplate, { children: i + 1 }), props.items.map((item, iT) => { var _a, _b; return _jsx(TableTDTemplate, { children: _jsx(InputChooser, Object.assign({ fields: (_b = (_a = field === null || field === void 0 ? void 0 : field[i]) === null || _a === void 0 ? void 0 : _a[item.name]) !== null && _b !== void 0 ? _b : null }, item, { noLabel: true, name: `${props.name}.${i}.${item.name}` })) }, `td-${field === null || field === void 0 ? void 0 : field.id}-${iT}`); }), "  ", props.fixed !== true && _jsxs(TableTDTemplate, { children: [_jsx(IconUp, { onClick: () => insert(i + 1, emptyRow) }), " ", _jsx(IconDown, { onClick: () => { remove(i); } })] })] }, `tr-${field.id}-${i}`));
    return _jsxs(TableTemplate, { children: [(props.header === undefined || props.header === 'top' || props.header === 'both' || props.header === 'header_footer') && headerGenerator, _jsx(TableBodyTemplate, { children: bodyGenerator }), (props.header === 'footer' || props.header === 'header_footer') ? footerGenerator : (props.header === 'bottom' || props.header === 'both') && headerGenerator] });
};
export default TableList;
//# sourceMappingURL=TableList.js.map