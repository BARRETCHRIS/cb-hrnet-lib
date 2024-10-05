"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const AutoComplete = _ref => {
  let {
    options,
    onSelect
  } = _ref;
  const [selectedState, setSelectedState] = (0, _react.useState)(options[0].abbreviation); // Affichage par défaut

  const handleChange = e => {
    const selectedValue = e.target.value;
    setSelectedState(selectedValue);
    const selectedOption = options.find(option => option.abbreviation === selectedValue);
    onSelect(selectedOption);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "state"
  }, "State"), /*#__PURE__*/React.createElement("select", {
    id: "state",
    value: selectedState,
    onChange: handleChange
  }, options.map(option => /*#__PURE__*/React.createElement("option", {
    key: option.abbreviation,
    value: option.abbreviation
  }, option.name))));
};
var _default = exports.default = AutoComplete;