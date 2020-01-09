let CanvasLatex = require("./canvas-latex");

exports.init = init;
exports.distanceToBaseline = distanceToBaseline;
exports.getBounds = getBounds;

let _widget;

function init(latex = "", options = {}) {
  _widget = new CanvasLatex.default(latex, options);
  return _widget;
}

function distanceToBaseline() {
  return _widget.distanceToBaseline;
}

function getBounds() {
  return _widget.getBounds();
}
