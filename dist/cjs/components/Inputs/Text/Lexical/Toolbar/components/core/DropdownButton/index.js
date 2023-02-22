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
const DropdownButton = (props) => {
    const DDBRef = (0, react_1.useRef)(null);
    const [currentState, setCurrentState] = (0, react_1.useState)({
        open: false,
        id: props.options[0].id,
    });
    (0, react_1.useEffect)(() => {
        if (props.selected !== undefined && currentState.id !== props.selected) {
            setCurrentState((prev) => {
                var _a;
                return (Object.assign(Object.assign({}, prev), { id: (_a = props.selected) !== null && _a !== void 0 ? _a : props.options[0].id }));
            });
        }
    }, [props.selected]);
    (0, react_1.useEffect)(() => {
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
    return (react_1.default.createElement(core_1.DDWrapper, { ref: DDBRef, onClick: () => setCurrentState((prev) => (Object.assign(Object.assign({}, prev), { open: !prev.open }))) },
        props.options.filter((x) => x.id === currentState.id)[0].item,
        " ",
        react_1.default.createElement(fa_1.FaCaretDown, null),
        react_1.default.createElement(core_1.DDList, { show: currentState.open },
            react_1.default.createElement(core_1.DDItemContainer, null, props.options.map((opt, index) => (react_1.default.createElement(core_1.DDItem, { centered: props.centered, onClick: (e) => {
                    e.stopPropagation();
                    opt.clickHandler(e);
                    setCurrentState({ open: false, id: opt.id });
                }, key: `${opt.id.replaceAll(" ", "_")}-${index}` }, opt.item)))))));
};
exports.default = DropdownButton;
//# sourceMappingURL=index.js.map