import { Button, Dialog, DialogActions, DialogContent,DialogTitle } from '@mui/material'
import { pdfjs , Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import React, { useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import styled from "styled-components"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface IPreviewModal {
  file: null | File,
  setFile : (a:null) => void 

}

const PDFPagination = styled.p`
  width : 100%;
  display: flex;
  justify-content: center;
  padding : 5px 25px;
  margin-top: 10px;
  font-weight: bold;
  font-size : 1.2em;
`

const PreviewModal = (props: IPreviewModal) => {
  return (
    <Dialog transitionDuration={200} fullWidth maxWidth="xl" open={props.file !== null} onClose={()=>props.setFile(null)} aria-labelledby="thumbnail-title" aria-describedby="alert-dialog-description" > 
      <DialogTitle id="thumbnail-title">Upload Previewer</DialogTitle>
      <DialogContent>
        <p>{props.file !== null && props.file.name}</p>
        {
          props.file !== null && (
            props.file.type === "application/pdf" ? <PDFViewer file={props.file} />: 
            props.file.type.split("/")[0] === "image" ? <img width="100%" height="auto" src={URL.createObjectURL(props.file)} alt={props.file.name} /> : 
            <DocViewer documents={[{uri: URL.createObjectURL(props.file), fileName: props.file.name}]} pluginRenderers={DocViewerRenderers} />            
          )
        }
        
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>props.setFile(null)}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

interface IPDFViewer {
  file : File
}
const PDFViewer = (props: IPDFViewer) => {
  const [page, setPage] = useState(0)
  const [allPages, setAllPages] = useState(0)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setAllPages(numPages);
    setPage(1)
  }

  return <div style={{width: '100%', display:'flex',justifyContent: 'center', flexDirection:'column'}}>
    <Document file={props.file} onLoadSuccess={onDocumentLoadSuccess}>
    <Page pageNumber={page} />
  </Document>
  <PDFPagination>
    <FaCaretLeft title="Previous Page" style={{pointerEvents : page === 1 ? 'none' : 'all', color : page === 1 ? 'gainsboro' : 'black', cursor:'pointer' }} onClick={()=>setPage(page-1)}/> 
      Page {page} / {allPages} 
    <FaCaretRight title="Next Page" style={{pointerEvents : page >= allPages ? 'none' : 'all', color : page >= allPages ? 'gainsboro' : 'black', cursor:'pointer' }} onClick={()=>setPage(page+1)}/>
  </PDFPagination>
  </div>
}

export default PreviewModal