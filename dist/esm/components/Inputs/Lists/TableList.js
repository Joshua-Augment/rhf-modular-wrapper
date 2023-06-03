import React, { useMemo, useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import InputChooser from '../../core/InputChooser';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import styled from "styled-components";
import { InputWrapper } from '../../core';
const Table = styled.table `
  width: 100%;
  margin-top:5px;
  margin-bottom: 5px;
`;
const IconUp = styled(FaPlusSquare) `
  color : green;
  font-size: 25px;
  margin : 2px 5px;
`;
const IconDown = styled(FaMinusSquare) `
  color : red;
  font-size: 25px;
  margin : 2px 5px;
`;
const TableList = (props) => {
    const { watch, control, formState: { errors } } = useFormContext();
    const { fields, append, insert, remove } = useFieldArray({ control, name: props.name });
    const _val = watch(props.name);
    const val = useMemo(() => _val, [_val]);
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
    const generateRow = (i) => React.createElement("tr", { key: `fw-${props.name}-${i}` },
        props.showIndex === true && React.createElement("td", null, i + 1),
        props.items.map((item, iT) => React.createElement("td", { key: `fw-${props.name}-${i}-${iT}-iew` },
            React.createElement(InputChooser, Object.assign({}, item, { noLabel: true, name: `${props.name}.${i}.${item.name}` })))),
        props.fixed !== true && React.createElement("td", null,
            React.createElement(IconUp, { onClick: () => insert(i + 1, emptyRow) }),
            " ",
            React.createElement(IconDown, { onClick: () => { console.log("[removing...]", i); remove(i); } })));
    const headerGenerator = useMemo(() => {
        var _a;
        return (_a = props.headerTemplate) !== null && _a !== void 0 ? _a : React.createElement("thead", null,
            React.createElement("tr", null,
                props.showIndex === true && React.createElement("th", null),
                props.items.map((item, key) => React.createElement("th", { key: `tl-${props.name}-${item.name}-th-${key}` }, item.label)),
                props.fixed !== true && React.createElement("th", null)));
    }, []);
    const footerGenerator = useMemo(() => { var _a; return (_a = props.footerTemplate) !== null && _a !== void 0 ? _a : headerGenerator; }, []);
    // const bodyGenerator = useMemo(()=> fields.length === 0 ? generateRow(0) : fields.map((field,i) => generateRow(i)),[fields])
    const bodyGenerator = useMemo(() => {
        console.log("[bodyGenerator] - Fields", fields);
        console.log("[bodyGenerator] - Final", fields.map((field, i) => generateRow(i)));
        return fields.map((field, i) => generateRow(i));
    }, [fields, errors, val]);
    return (React.createElement(InputWrapper, Object.assign({}, props),
        React.createElement(Table, null,
            (props.header === undefined || props.header === 'top' || props.header === 'both') && headerGenerator,
            React.createElement("tbody", null, bodyGenerator),
            (props.header === 'footer' || props.header === 'header_footer') ? footerGenerator : (props.header === 'bottom' || props.header === 'both') && headerGenerator)));
};
export default TableList;
//# sourceMappingURL=TableList.js.map