import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { DDItem, DDItemContainer, DDList, DDWrapper } from "./core";
const DropdownButton = (props) => {
    const DDBRef = useRef(null);
    const [currentState, setCurrentState] = useState({
        open: false,
        id: props.options[0].id,
    });
    useEffect(() => {
        if (props.selected !== undefined && currentState.id !== props.selected) {
            setCurrentState((prev) => {
                var _a;
                return (Object.assign(Object.assign({}, prev), { id: (_a = props.selected) !== null && _a !== void 0 ? _a : props.options[0].id }));
            });
        }
    }, [props.selected]);
    useEffect(() => {
        const handleClick = (event) => {
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
        props.options.filter((x) => x.id === currentState.id)[0].item,
        " ",
        React.createElement(FaCaretDown, null),
        React.createElement(DDList, { show: currentState.open },
            React.createElement(DDItemContainer, null, props.options.map((opt, index) => (React.createElement(DDItem, { centered: props.centered, onClick: (e) => {
                    e.stopPropagation();
                    opt.clickHandler(e);
                    setCurrentState({ open: false, id: opt.id });
                }, key: `${opt.id.replaceAll(" ", "_")}-${index}` }, opt.item)))))));
};
export default DropdownButton;
//# sourceMappingURL=index.js.map