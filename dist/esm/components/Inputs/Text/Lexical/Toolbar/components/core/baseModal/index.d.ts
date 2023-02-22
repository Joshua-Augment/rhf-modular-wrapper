import React from 'react';
interface IBaseModal {
    show: boolean;
    onClose: () => void;
    title: React.ReactNode;
    children: React.ReactNode;
}
declare const BaseModal: (props: IBaseModal) => JSX.Element;
export default BaseModal;
