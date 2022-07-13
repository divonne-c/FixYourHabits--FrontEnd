import React from "react";

const FormHabitTypeTemplate = ({ handler, type }) => {
  return (
    <div>
      <input
        type="radio"
        value={type}
        name="type"
        onChange={handler}
        required
      />
      <label htmlFor={type}>{type}</label>
    </div>
  );
};

export default FormHabitTypeTemplate;
