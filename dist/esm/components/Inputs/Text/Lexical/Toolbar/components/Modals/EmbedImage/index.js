import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { createCommand } from 'lexical';
import React from 'react';
import BaseModal from '../../core/baseModal';
export const INSERT_IMAGE_COMMAND = createCommand('INSERT_IMAGE_COMMAND');
const EmbedImageModal = (props) => {
    const [editor] = useLexicalComposerContext();
    const addImage = (a) => {
        const imageURL = document.getElementById("image_url");
        const URLSrc = imageURL !== null ? imageURL.value : undefined;
        const imageAttach = document.getElementById("image_attach");
        const Attach = imageAttach !== null ? imageAttach.files : undefined;
        console.log("[AddImage] -a", a);
        console.log("[AddImage] -", URLSrc);
        console.log("[AddImage] -", Attach);
        const payload = {
            altText: '',
            src: URLSrc ? URLSrc : Attach && Attach[0] !== null && Attach[0] !== undefined ? URL.createObjectURL(Attach[0]) : ''
        };
        console.log("[DispatchImage]", editor.dispatchCommand(INSERT_IMAGE_COMMAND, payload));
    };
    return (React.createElement(BaseModal, { title: "Add Image", show: props.show, onClose: props.onClose },
        React.createElement("label", { htmlFor: 'image_url' }, "URL"),
        React.createElement("input", { id: "image_url", name: "image_url" }),
        React.createElement("p", { style: { textAlign: 'center' } }, "or"),
        React.createElement("label", { htmlFor: 'image_attach' }, "Attach Image"),
        React.createElement("input", { id: "image_attach", name: "image_attach", type: "file" }),
        React.createElement("button", { type: "button", onClick: (e) => addImage(e) }, "Add Image"),
        React.createElement("button", { type: "button", onClick: () => props.onClose() }, "Cancel")));
};
export default EmbedImageModal;
//# sourceMappingURL=index.js.map