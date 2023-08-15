import React from 'react';
interface IPreviewModal {
    file: null | File;
    setFile: (a: null) => void;
}
declare const PreviewModal: (props: IPreviewModal) => React.JSX.Element;
export default PreviewModal;
