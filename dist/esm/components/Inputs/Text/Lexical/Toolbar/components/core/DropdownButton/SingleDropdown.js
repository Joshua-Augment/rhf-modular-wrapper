import React, { useRef, useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { DDItem, DDItemContainer, DDList, DDWrapper } from './core';
const SingleDropdown = (props) => {
    var _a;
    const DDBRef = useRef(null);
    const [currentState, setCurrentState] = useState({
        open: false,
        id: props.value,
    });
    useEffect(() => {
        const handleClick = (event) => {
            console.group("[handleClick]");
            console.log("[DDBRef Contains] - ", DDBRef.current !== null ? DDBRef.current.contains(event.target) : 'null');
            console.log("[Event Target] - ", event.target);
            console.log("[DDB] - ", DDBRef.current);
            console.groupEnd();
            if (DDBRef.current &&
                !DDBRef.current.contains(event.target) &&
                currentState.open === true) {
                setCurrentState((prev) => (Object.assign(Object.assign({}, prev), { open: false })));
            }
        };
        // Bind the event listener
        document.addEventListener("mousedown", handleClick);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClick);
        };
    }, [DDBRef]);
    return (React.createElement(DDWrapper, { ref: DDBRef, onClick: () => setCurrentState((prev) => (Object.assign(Object.assign({}, prev), { open: !prev.open }))) },
        props.previewThumb,
        " ",
        React.createElement(FaCaretDown, null),
        React.createElement(DDList, { show: currentState.open },
            React.createElement(DDItemContainer, null,
                React.createElement(DDItem, { centered: (_a = props.centered) !== null && _a !== void 0 ? _a : true }, props.children)))));
};
export default SingleDropdown;
//# sourceMappingURL=SingleDropdown.js.map