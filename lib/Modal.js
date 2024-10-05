"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./modal.scss");
const Modal = _ref => {
  let {
    isOpen,
    onClose,
    children
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\xD7"), children));
};
var _default = exports.default = Modal;