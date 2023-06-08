"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const fa_1 = require("react-icons/fa");
const core_1 = require("./core");
const SingleDropdown = (props) => {
    var _a;
    const DDBRef = (0, react_1.useRef)(null);
    const [currentState, setCurrentState] = (0, react_1.useState)({
        open: false,
        id: props.value,
    });
    (0, react_1.useEffect)(() => {
        const handleClick = (event) => {
            // console.group("[handleClick]");
            // console.log("[DDBRef Contains] - ", DDBRef.current !== null ? DDBRef.current.contains(event.target) : 'null');
            // console.log("[Event Target] - ", event.target);
            // console.log("[DDB] - ", DDBRef.current);
            // console.groupEnd();
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
    return (react_1.default.createElement(core_1.DDWrapper, { ref: DDBRef, onClick: () => setCurrentState((prev) => (Object.assign(Object.assign({}, prev), { open: !prev.open }))) },
        props.previewThumb,
        " ",
        react_1.default.createElement(fa_1.FaCaretDown, null),
        react_1.default.createElement(core_1.DDList, { show: currentState.open },
            react_1.default.createElement(core_1.DDItemContainer, null,
                react_1.default.createElement(core_1.DDItem, { centered: (_a = props.centered) !== null && _a !== void 0 ? _a : true }, props.children)))));
};
exports.default = SingleDropdown;
//# sourceMappingURL=SingleDropdown.js.map