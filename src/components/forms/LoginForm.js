import React from "react";
import { Form } from "./Form.styles";
import InputTemplate from "./InputTemplate";

const LoginForm = ({
  username,
  emailChangeHandler,
  passwordChangeHandler,
  password,
}) => {
  return (
    <Form>
      <div>
        <label htmlFor="username">Username</label>
        <InputTemplate
          value={username}
          type="text"
          handler={emailChangeHandler}
          name="name"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <InputTemplate
          value={password}
          type="text"
          handler={passwordChangeHandler}
          name="password"
        />
      </div>
    </Form>
  );
};

export default LoginForm;
