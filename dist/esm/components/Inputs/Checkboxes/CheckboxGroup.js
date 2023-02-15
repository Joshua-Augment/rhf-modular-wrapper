import React from 'react';
const CheckboxGroup = (props) => {
    var _a;
    const orientation = (_a = props.orientation) !== null && _a !== void 0 ? _a : 'horizontal';
    return (React.createElement("div", null,
        props.title && React.createElement("div", { className: "form-label" }, props.title),
        React.createElement("div", { className: `checkbox-group ${orientation === 'horizontal' ? 'f-row' : 'f-col'}` }, props.children)));
};
export default CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map