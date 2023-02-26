import React from 'react';
const PreviewList = (props) => {
    return (React.createElement("ul", null, props.value &&
        React.createElement("ol", null, props.value.map((_file, _index) => React.createElement("li", { key: `${props.name}-pr-${_index}` },
            _file.name,
            " - ",
            _file.size,
            " ",
            React.createElement(FaTrash, { onClick: () => props.onChange(props.value.filter((x, i) => i !== _index)), style: { cursor: 'pointer' } }))))));
};
export default PreviewList;
//# sourceMappingURL=PreviewList.js.map