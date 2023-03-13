import React, { useMemo, useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import InputElemWrapper from '../../core/InputElemWrapper';
import styled from "styled-components";
import InputChooser from '../../core/InputChooser';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
const Row = styled.div `
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: -15px;
  margin-left: -15px;
`;
const Col = styled.div `
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
    const { control } = useFormContext();
    const { fields, append, remove } = useFieldArray({ control, name: props.name });
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
    } }, []);
    const bodygenerator = fields.map((field, i) => React.createElement(Row, { key: `fw-${props.name}-${i}` },
        props.showIndex === true && React.createElement(Col, { g: 1 }, i + 1),
        props.items.map((item, iT) => { var _a; return React.createElement(Col, { g: (_a = item.grid) !== null && _a !== void 0 ? _a : 12 / (props.items.length + (props.showIndex ? 1 : 0) + (props.fixed !== true ? 1 : 0)), key: `fw-${props.name}-${i}-${iT}-iew` },
            React.createElement(InputChooser, Object.assign({}, item, { noBorder: true, name: `${props.name}.${i}.${item.name}` }))); }),
        props.fixed !== true && React.createElement(Col, { g: 1 },
            React.createElement(FaPlusSquare, { style: Object.assign(Object.assign({}, iconStyle), { color: props.maxItems && fields.length >= props.maxItems ? 'olive' : 'green' }), onClick: () => { if (!(props.maxItems && fields.length >= props.maxItems)) {
                    append(emptyRow);
                } } }),
            " ",
            React.createElement(FaMinusSquare, { style: Object.assign(Object.assign({}, iconStyle), { color: fields.length > 1 ? 'red' : 'maroon' }), onClick: () => { if (fields.length > 1) {
                    console.log("Removing....", i);
                    remove(i);
                } } }))));
    return (React.createElement(InputElemWrapper, Object.assign({}, props, { noBorder: true, onChange: () => { }, value: null }),
        React.createElement("div", null, bodygenerator)));
};
export default FormList;
//# sourceMappingURL=FormList.js.map