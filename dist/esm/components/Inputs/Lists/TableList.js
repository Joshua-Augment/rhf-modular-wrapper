import React, { useMemo, useEffect } from 'react';
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
    return (React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'tablelist' }, props),
        React.createElement(_Table, Object.assign({}, props))));
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
    console.log('[fields] - ', fields);
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
        return (_a = props.headerTemplate) !== null && _a !== void 0 ? _a : React.createElement(TableHeadTemplate, null,
            React.createElement(TableTRTemplate, null,
                props.showIndex === true && React.createElement(TableTHTemplate, null),
                props.items.map((item, key) => React.createElement(TableTHTemplate, { key: `tl-${props.name}-${item.name}-th-${key}` }, item.label)),
                props.fixed !== true && React.createElement(TableTHTemplate, null)));
    }, [props.headerTemplate]);
    const footerGenerator = useMemo(() => { var _a; return (_a = props.footerTemplate) !== null && _a !== void 0 ? _a : headerGenerator; }, [props.footerTemplate]);
    const bodyGenerator = fields.map((field, i) => React.createElement(TableTRTemplate, { key: `tr-${field.id}-${i}` },
        props.showIndex === true && React.createElement(TableTDTemplate, null, i + 1),
        props.items.map((item, iT) => { var _a, _b; return React.createElement(TableTDTemplate, { key: `td-${field === null || field === void 0 ? void 0 : field.id}-${iT}` },
            React.createElement(InputChooser, Object.assign({ fields: (_b = (_a = field === null || field === void 0 ? void 0 : field[i]) === null || _a === void 0 ? void 0 : _a[item.name]) !== null && _b !== void 0 ? _b : null }, item, { noLabel: true, name: `${props.name}.${i}.${item.name}` }))); }),
        "  ",
        props.fixed !== true && React.createElement(TableTDTemplate, null,
            React.createElement(IconUp, { onClick: () => insert(i + 1, emptyRow) }),
            " ",
            React.createElement(IconDown, { onClick: () => { remove(i); } }))));
    return React.createElement(TableTemplate, null,
        (props.header === undefined || props.header === 'top' || props.header === 'both' || props.header === 'header_footer') && headerGenerator,
        React.createElement(TableBodyTemplate, null, bodyGenerator),
        (props.header === 'footer' || props.header === 'header_footer') ? footerGenerator : (props.header === 'bottom' || props.header === 'both') && headerGenerator);
};
export default TableList;
//# sourceMappingURL=TableList.js.map