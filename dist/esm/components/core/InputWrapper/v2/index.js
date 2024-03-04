import React, { useContext } from "react";
import { ThemeContext } from "../../Form";
import Logger from "../../Logger";
import InputInnerWrapper from "./components/InputInnerWrapper";
const InputWrapperv2 = (props) => {
    var _a, _b, _c, _d, _e;
    Logger.info(``, `${props.name} - InputWrapperv2`, "start");
    Logger.info(props, `${props.name} - InputWrapperv2`);
    const { buttonTemplate, elements } = useContext(ThemeContext);
    return React.createElement(InputInnerWrapper, Object.assign({}, props, { inputWrapper: (_c = (_b = (_a = props.inputTemplate) !== null && _a !== void 0 ? _a : buttonTemplate) !== null && _b !== void 0 ? _b : props.inputWrapper) !== null && _c !== void 0 ? _c : undefined, inputElement: (_e = elements === null || elements === void 0 ? void 0 : elements[((_d = props === null || props === void 0 ? void 0 : props.type) !== null && _d !== void 0 ? _d : 'line')]) !== null && _e !== void 0 ? _e : null }), props.children);
};
export default InputWrapperv2;
//# sourceMappingURL=index.js.map