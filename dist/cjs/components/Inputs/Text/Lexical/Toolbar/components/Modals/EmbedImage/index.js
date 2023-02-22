"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INSERT_IMAGE_COMMAND = void 0;
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const lexical_1 = require("lexical");
const react_1 = __importDefault(require("react"));
const Line_1 = __importDefault(require("../../../../../Line"));
const baseModal_1 = __importDefault(require("../../core/baseModal"));
exports.INSERT_IMAGE_COMMAND = (0, lexical_1.createCommand)('INSERT_IMAGE_COMMAND');
const EmbedImageModal = (props) => {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const addImage = (a) => {
        const imageURL = document.getElementById("image_url");
        const URLSrc = imageURL !== null ? imageURL.value : undefined;
        const imageAttach = document.getElementById("image_url");
        const Attach = imageAttach !== null ? imageAttach.files : undefined;
        console.log("[AddImage] -a", a);
        console.log("[AddImage] -", URLSrc);
        console.log("[AddImage] -", Attach);
        const payload = { altText: '', src: URLSrc ? URLSrc :
                Attach && Attach[0] !== null && Attach[0] !== undefined ? URL.createObjectURL(Attach[0]) : '' };
        editor.dispatchCommand(exports.INSERT_IMAGE_COMMAND, payload);
    };
    return (react_1.default.createElement(baseModal_1.default, { title: "Add Image", show: props.show, onClose: props.onClose },
        react_1.default.createElement(Line_1.default, { id: "image_url", contextless: true, label: "URL", name: "image_url" }),
        react_1.default.createElement("p", { style: { textAlign: 'center' } }, "or"),
        react_1.default.createElement(Line_1.default, { id: "image_attach", contextless: true, label: "Attach Image", name: "image_attach", type: "file" }),
        react_1.default.createElement("button", { type: "button", onClick: (e) => addImage(e) }, "Add Image"),
        react_1.default.createElement("button", { type: "button", onClick: () => props.onClose() }, "Cancel")));
};
exports.default = EmbedImageModal;
//# sourceMappingURL=index.js.map