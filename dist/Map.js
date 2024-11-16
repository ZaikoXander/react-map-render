"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Map;
var _react = require("react");
function Map(_ref) {
  var array = _ref.array,
    render = _ref.render;
  return _react.Children.toArray(array.map(function (item, index) {
    return render(item, index);
  }));
}