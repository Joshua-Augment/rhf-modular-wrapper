import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { createCommand, LexicalCommand } from 'lexical'
import { ImagePayload,} from '../../../../nodes/ImageNode';
import React from 'react'
import Line from '../../../../../Line'
import BaseModal from '../../core/baseModal'

interface IEmbedImageModal {
  show : boolean,  
  onClose : () => void
}


export type InsertImagePayload = Readonly<ImagePayload>;
export const INSERT_IMAGE_COMMAND: LexicalCommand<InsertImagePayload> = createCommand('INSERT_IMAGE_COMMAND');

const EmbedImageModal = (props: IEmbedImageModal) => {
  const [editor] = useLexicalComposerContext();
  
  const addImage = (a:any) => {
    const imageURL = document.getElementById("image_url") as HTMLInputElement
    const URLSrc = imageURL !== null ? imageURL.value : undefined

    const imageAttach = document.getElementById("image_url") as HTMLInputElement
    const Attach = imageAttach !== null ? imageAttach.files : undefined

    console.log("[AddImage] -a",a)
    console.log("[AddImage] -",URLSrc)
    console.log("[AddImage] -",Attach)

    const payload:InsertImagePayload = {altText: '' ,src: URLSrc ? URLSrc : 
      Attach && Attach[0] !== null && Attach[0] !== undefined ?  URL.createObjectURL(Attach[0]) :''}
    
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
  }

  return (
    <BaseModal title="Add Image" show={props.show} onClose={props.onClose}>
        <Line id="image_url" contextless label="URL" name="image_url" />
        <p style={{textAlign: 'center'}}>or</p>
        <Line id="image_attach" contextless label="Attach Image" name="image_attach" type="file" />
        <button type="button" onClick={(e)=>addImage(e)}>Add Image</button>
        <button type="button" onClick={()=>props.onClose()}>Cancel</button>
    </BaseModal>
  )
}

export default EmbedImageModal