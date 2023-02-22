/// <reference types="react" />
import { IFormFrameInjector } from '../../../../core';
interface ILexicalEditor extends IFormFrameInjector {
    theme: any;
}
declare const LexicalEditor: (props: ILexicalEditor) => JSX.Element;
export default LexicalEditor;
