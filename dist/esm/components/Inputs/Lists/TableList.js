import React, { useMemo, useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import InputElemWrapper from '../../core/InputElemWrapper';
import InputChooser from '../../core/InputChooser';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
const TableList = (props) => {
    const { control } = useFormContext();
    const { fields, append, remove } = useFieldArray({ control, name: props.name });
    const generateRow = useCallback((i) => React.createElement("tr", { key: `fw-${props.name}-${i}` },
        props.showIndex === true && React.createElement("td", null, i + 1),
        props.items.map((item, iT) => React.createElement("td", { key: `fw-${props.name}-${i}-${iT}-iew` },
            React.createElement(InputChooser, Object.assign({}, item, { noLabel: true, name: `${props.name}.${i}.${item.name}` })))),
        props.fixed !== true && React.createElement("td", null,
            React.createElement(FaPlusSquare, { onClick: () => { var _a; return append((_a = props.emptyRow) !== null && _a !== void 0 ? _a : {}); } }),
            " ",
            React.createElement(FaMinusSquare, { onClick: () => { console.log("[removing...]", i); remove(i); } }))), [fields]);
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
    const bodyGenerator = useMemo(() => fields.map((field, i) => generateRow(i)), [fields]);
    return (React.createElement(InputElemWrapper, Object.assign({}, props, { onChange: () => { }, value: null }),
        React.createElement("div", null,
            (props.header === undefined || props.header === 'top' || props.header === 'both') && headerGenerator,
            React.createElement("tbody", null, bodyGenerator),
            (props.header === 'footer' || props.header === 'header_footer') ? footerGenerator : (props.header === 'bottom' || props.header === 'both') && headerGenerator)));
};
export default TableList;
//# sourceMappingURL=TableList.js.map