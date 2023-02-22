/// <reference types="react" />
import { LexicalCommand } from 'lexical';
import { ImagePayload } from '../../../../nodes/ImageNode';
interface IEmbedImageModal {
    show: boolean;
    onClose: () => void;
}
export type InsertImagePayload = Readonly<ImagePayload>;
export declare const INSERT_IMAGE_COMMAND: LexicalCommand<InsertImagePayload>;
declare const EmbedImageModal: (props: IEmbedImageModal) => JSX.Element;
export default EmbedImageModal;
