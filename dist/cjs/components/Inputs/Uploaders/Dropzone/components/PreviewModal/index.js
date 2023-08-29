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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const entry_webpack_1 = require("react-pdf/dist/esm/entry.webpack");
const react_1 = __importStar(require("react"));
const fa_1 = require("react-icons/fa");
const styled_components_1 = __importDefault(require("styled-components"));
const react_doc_viewer_1 = __importStar(require("@cyntler/react-doc-viewer"));
entry_webpack_1.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${entry_webpack_1.pdfjs.version}/pdf.worker.min.js`;
const PDFPagination = styled_components_1.default.p `
  width : 100%;
  display: flex;
  justify-content: center;
  padding : 5px 25px;
  margin-top: 10px;
  font-weight: bold;
  font-size : 1.2em;
`;
const PreviewModal = (props) => {
    return (react_1.default.createElement(material_1.Dialog, { transitionDuration: 200, fullWidth: true, maxWidth: "xl", open: props.file !== null, onClose: () => props.setFile(null), "aria-labelledby": "thumbnail-title", "aria-describedby": "alert-dialog-description" },
        react_1.default.createElement(material_1.DialogTitle, { id: "thumbnail-title" }, "Upload Previewer"),
        react_1.default.createElement(material_1.DialogContent, null,
            react_1.default.createElement("p", null, props.file !== null && props.file.name),
            props.file !== null && (props.file.type === "application/pdf" ? react_1.default.createElement(PDFViewer, { file: props.file }) :
                props.file.type.split("/")[0] === "image" ? react_1.default.createElement("img", { width: "100%", height: "auto", src: URL.createObjectURL(props.file), alt: props.file.name }) :
                    react_1.default.createElement(react_doc_viewer_1.default, { documents: [{ uri: URL.createObjectURL(props.file), fileName: props.file.name }], pluginRenderers: react_doc_viewer_1.DocViewerRenderers }))),
        react_1.default.createElement(material_1.DialogActions, null,
            react_1.default.createElement(material_1.Button, { onClick: () => props.setFile(null) }, "Close"))));
};
const PDFViewer = (props) => {
    const [page, setPage] = (0, react_1.useState)(0);
    const [allPages, setAllPages] = (0, react_1.useState)(0);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setAllPages(numPages);
        setPage(1);
    };
    return react_1.default.createElement("div", { style: { width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' } },
        react_1.default.createElement(entry_webpack_1.Document, { file: props.file, onLoadSuccess: onDocumentLoadSuccess },
            react_1.default.createElement(entry_webpack_1.Page, { pageNumber: page })),
        react_1.default.createElement(PDFPagination, null,
            react_1.default.createElement(fa_1.FaCaretLeft, { title: "Previous Page", style: { pointerEvents: page === 1 ? 'none' : 'all', color: page === 1 ? 'gainsboro' : 'black', cursor: 'pointer' }, onClick: () => setPage(page - 1) }),
            "Page ",
            page,
            " / ",
            allPages,
            react_1.default.createElement(fa_1.FaCaretRight, { title: "Next Page", style: { pointerEvents: page >= allPages ? 'none' : 'all', color: page >= allPages ? 'gainsboro' : 'black', cursor: 'pointer' }, onClick: () => setPage(page + 1) })));
};
exports.default = PreviewModal;
//# sourceMappingURL=index.js.map