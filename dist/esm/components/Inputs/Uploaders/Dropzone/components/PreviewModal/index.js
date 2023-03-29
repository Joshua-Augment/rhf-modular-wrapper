import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { pdfjs, Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import React, { useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import styled from "styled-components";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const PDFPagination = styled.p `
  width : 100%;
  display: flex;
  justify-content: center;
  padding : 5px 25px;
  margin-top: 10px;
  font-weight: bold;
  font-size : 1.2em;
`;
const PreviewModal = (props) => {
    return (React.createElement(Dialog, { fullWidth: true, maxWidth: "xl", open: props.file !== null, onClose: () => props.setFile(null), "aria-labelledby": "thumbnail-title", "aria-describedby": "alert-dialog-description" },
        React.createElement(DialogTitle, { id: "thumbnail-title" }, "Upload Previewer"),
        React.createElement(DialogContent, null,
            React.createElement("p", null, props.file !== null && props.file.name),
            props.file !== null && (props.file.type === "application/pdf" ? React.createElement(PDFViewer, { file: props.file }) :
                props.file.type.split("/")[0] === "image" ? React.createElement("img", { width: "100%", height: "auto", src: URL.createObjectURL(props.file), alt: props.file.name }) :
                    React.createElement(DocViewer, { documents: [{ uri: URL.createObjectURL(props.file), fileName: props.file.name }], pluginRenderers: DocViewerRenderers }))),
        React.createElement(DialogActions, null,
            React.createElement(Button, { onClick: () => props.setFile(null) }, "Close"))));
};
const PDFViewer = (props) => {
    const [page, setPage] = useState(0);
    const [allPages, setAllPages] = useState(0);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setAllPages(numPages);
        setPage(1);
    };
    return React.createElement("div", { style: { width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' } },
        React.createElement(Document, { file: props.file, onLoadSuccess: onDocumentLoadSuccess },
            React.createElement(Page, { pageNumber: page })),
        React.createElement(PDFPagination, null,
            React.createElement(FaCaretLeft, { title: "Previous Page", style: { pointerEvents: page === 1 ? 'none' : 'all', color: page === 1 ? 'gainsboro' : 'black', cursor: 'pointer' }, onClick: () => setPage(page - 1) }),
            "Page ",
            page,
            " / ",
            allPages,
            React.createElement(FaCaretRight, { title: "Next Page", style: { pointerEvents: page >= allPages ? 'none' : 'all', color: page >= allPages ? 'gainsboro' : 'black', cursor: 'pointer' }, onClick: () => setPage(page + 1) })));
};
export default PreviewModal;
//# sourceMappingURL=index.js.map