import React from "react";
import { Template } from "./Form.styles";

const InputTemplate = ({ handler, type, value, name }) => {
  return (
    <Template>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handler}
        required
      />

      {type === "radio" && <label htmlFor={value}>{value}</label>}
      {type === "checkbox" && <label htmlFor={value}>{value}</label>}
    </Template>
  );
};

export default InputTemplate;
