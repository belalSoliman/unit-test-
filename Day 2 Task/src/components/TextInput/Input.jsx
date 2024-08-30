import React from "react";

const CustomTextInput = ({
  inputValue,
  handleChange,
  inputPlaceholder,
  isDisabled,
}) => {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder={inputPlaceholder}
      disabled={isDisabled}
    />
  );
};

export default CustomTextInput;
