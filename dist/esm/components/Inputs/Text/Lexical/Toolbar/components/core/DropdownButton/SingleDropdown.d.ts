import React from 'react';
interface ISingleDropdown {
    value?: string;
    children: React.ReactNode;
    previewThumb?: React.ReactNode;
    centered?: boolean;
}
declare const SingleDropdown: (props: ISingleDropdown) => JSX.Element;
export default SingleDropdown;
