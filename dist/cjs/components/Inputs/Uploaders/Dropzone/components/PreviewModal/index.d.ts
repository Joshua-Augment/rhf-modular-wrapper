/// <reference types="react" />
interface IPreviewModal {
    file: null | File;
    setFile: (a: null) => void;
}
declare const PreviewModal: (props: IPreviewModal) => JSX.Element;
export default PreviewModal;
