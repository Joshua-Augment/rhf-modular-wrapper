import React, { useContext } from "react";
import { ThemeContext } from "../../Form";
import Logger from "../../Logger";
import InputInnerWrapper from "./components/InputInnerWrapper";
const InputWrapperv2 = (props) => {
    var _a, _b, _c, _d;
    Logger.info(``, `${props.name} - InputWrapperv2`, "start");
    Logger.info(props, `${props.name} - InputWrapperv2`);
    const { inputTemplate, elements } = useContext(ThemeContext);
    return React.createElement(InputInnerWrapper, Object.assign({}, props, { inputWrapper: (_b = (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : inputTemplate) !== null && _b !== void 0 ? _b : undefined, inputElement: (_d = elements === null || elements === void 0 ? void 0 : elements[((_c = props === null || props === void 0 ? void 0 : props.type) !== null && _c !== void 0 ? _c : 'line')]) !== null && _d !== void 0 ? _d : null }), props.children);
};
export default InputWrapperv2;
//# sourceMappingURL=index.js.map