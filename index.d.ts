// Type definitions for canvaslatextype
// Project: [LIBRARY_URL_HERE]
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//export as namespace CanvasLatex;

declare namespace CanvasLatex {
  export function init(latex: any, options: any): any;
  export function distanceToBaseline(): any;
  export function getBounds(): any;
}

declare module "canvas-latex-type" {
  export = CanvasLatex; //legacy ts module export
}
