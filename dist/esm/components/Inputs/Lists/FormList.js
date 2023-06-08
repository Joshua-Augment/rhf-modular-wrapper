import React, { useMemo, useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import styled from "styled-components";
import InputChooser from '../../core/InputChooser';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import { InputWrapper } from '../../core';
import { useInputValAndError } from '../../core/hook/useInputValnError';
const Row = styled.div `
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
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
    const { value, error, control } = useInputValAndError(props.name);
    // const {control} = useFormContext()
    const { fields, append, insert, remove } = useFieldArray({ control, name: props.name });
    // const _val = watch(props.name)
    // const value = useMemo(() => _val ,[_val])
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
    const bodygenerator = useMemo(() => {
        const templateConverter = (children, i) => {
            return React.Children.map(children, child => {
                var _a;
                // console.log("[TemplateConverter - ] -props ",child.props)
                // For the Inputs
                if (child.props['data-name'] !== undefined) {
                    const input = props.items.filter(x => x.name === child.props['data-name']);
                    if (input === undefined || input.length === 0) {
                        return child;
                    }
                    else {
                        return React.createElement(InputChooser, Object.assign({}, input[0], { noBorder: true, name: `${props.name}.${i}.${input[0].name}` }));
                    }
                }
                if (((_a = child.props) === null || _a === void 0 ? void 0 : _a['data-add']) === true) {
                    return React.cloneElement(child, {
                        onClick: () => { if (!(props.maxItems && fields.length >= props.maxItems)) {
                            insert(i + 1, emptyRow);
                        } },
                        isEnd: props.maxItems && fields.length >= props.maxItems
                    });
                }
                if (child.props['data-remove'] !== undefined) {
                    return React.cloneElement(child, {
                        onClick: () => { if (fields.length > 1) {
                            remove(i);
                        } },
                        isEnd: fields.length > 1
                    });
                }
                if (child.props['data-index'] !== undefined) {
                    return React.cloneElement(child, {
                        children: i + 1
                    });
                }
                if (child.props.children) {
                    return React.cloneElement(child, {
                        children: templateConverter(child.props.children, i)
                    });
                }
                return child;
            });
        };
        return fields.map((field, i) => {
            if (props.bodyTemplate !== undefined) {
                return templateConverter(props.bodyTemplate.props.children, i);
            }
            else {
                return React.createElement(Row, { key: `fw-${props.name}-${i}` },
                    props.showIndex === true && React.createElement(Col, { g: 1 }, i + 1),
                    props.items.map((item, iT) => { var _a; return React.createElement(Col, { g: (_a = item.grid) !== null && _a !== void 0 ? _a : 12 / (props.items.length + (props.showIndex ? 1 : 0) + (props.fixed !== true ? 1 : 0)), key: `fw-${props.name}-${i}-${iT}-iew` },
                        React.createElement(InputChooser, Object.assign({}, item, { noBorder: true, name: `${props.name}.${i}.${item.name}` }))); }),
                    props.fixed !== true && React.createElement(Col, { g: 1 },
                        React.createElement(FaPlusSquare, { style: Object.assign(Object.assign({}, iconStyle), { color: props.maxItems && fields.length >= props.maxItems ? 'olive' : 'green' }), onClick: () => { if (!(props.maxItems && fields.length >= props.maxItems)) {
                                insert(i + 1, emptyRow);
                            } } }),
                        " ",
                        React.createElement(FaMinusSquare, { style: Object.assign(Object.assign({}, iconStyle), { color: fields.length > 1 ? 'red' : 'maroon' }), onClick: () => { if (fields.length > 1) {
                                remove(i);
                            } } })));
            }
        });
    }, [value, error]);
    return (React.createElement(InputWrapper, Object.assign({}, props, { noBorder: true }),
        React.createElement("div", { style: { width: '100%' } }, bodygenerator)));
};
export default FormList;
//# sourceMappingURL=FormList.js.map