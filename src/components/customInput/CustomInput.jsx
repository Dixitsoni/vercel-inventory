import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import React from "react";

function CustomInput({
  children,
  id,
  helperText,
  htmlFor,
  ariaDescribedby,
  handleChange,
  name,
  value,
  type,
  style,
  error,
  required,
  validationNumber,
}) {
  return (
    <FormControl>
      <InputLabel htmlFor={htmlFor}>{children}</InputLabel>
      <Input
        required={required}
        error={error}
        style={style}
        type={type}
        value={value}
        name={name}
        id={id}
        aria-describedby={ariaDescribedby}
        onChange={handleChange}
      />
      <FormHelperText style={{ color: "red" }} id={id}>
        {helperText}
      </FormHelperText>
      {validationNumber && (
        <FormHelperText style={{ color: "red" }} id={id}>
          {validationNumber}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default CustomInput;
