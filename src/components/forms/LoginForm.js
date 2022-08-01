import InputTemplate from "./InputTemplate";
import { Form } from "./Form.styles";

const LoginForm = ({ userData, handler }) => {
  return (
    <Form>
      <InputTemplate
        value={userData.username}
        type="text"
        handler={handler}
        name="username"
        label="Username"
      />
      <InputTemplate
        value={userData.password}
        type="password"
        handler={handler}
        name="password"
        label="Password"
      />
    </Form>
  );
};

export default LoginForm;
