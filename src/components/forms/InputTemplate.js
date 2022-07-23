import { Template } from "./Form.styles";

const InputTemplate = ({
  handler,
  type,
  value,
  name,
  errorMessage,
  label,
  ...otherProps
}) => {
  return (
    <Template>
      {label && <label htmlFor={value}>{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        onChange={handler}
        focused={value.length > 0 ? "true" : "false"}
        required
        {...otherProps}
      />
      <span className={value.length > 0 ? "error" : ""}>{errorMessage}</span>
    </Template>
  );
};

export default InputTemplate;
