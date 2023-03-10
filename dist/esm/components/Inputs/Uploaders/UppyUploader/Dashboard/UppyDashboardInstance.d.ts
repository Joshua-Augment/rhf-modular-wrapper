/// <reference types="react" />
import Uppy from "@uppy/core";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
interface IUppyInstance {
    uppy: Uppy;
    endpoint: string;
    metadata?: any;
    value: any;
    onChange: any;
}
declare const UppyDashboardInstance: (props: IUppyInstance) => JSX.Element;
export default UppyDashboardInstance;
