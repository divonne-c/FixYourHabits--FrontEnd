import React from "react";
import { Form } from "./Form.styles";
import InputTemplate from "./InputTemplate";

const CreateAccountForm = ({
  name,
  nameChangeHandler,
  username,
  password,
  passwordChangeHandler,
  usernameChangeHandler,
  verifyPassword,
  verifyPasswordHandler,
  emailChangeHandler,
  email,
}) => {
  return (
    <Form>
      <div>
        <label htmlFor="">Name</label>
        <InputTemplate
          value={name}
          name="name"
          handler={nameChangeHandler}
          type="text"
        />
      </div>

      <div>
        <label htmlFor="username">Username</label>
        <InputTemplate
          value={username}
          type="text"
          handler={usernameChangeHandler}
          name="name"
        />
      </div>

      <div>
        <label htmlFor="username">Email</label>
        <InputTemplate
          value={email}
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
      <div>
        <label htmlFor="password">Confirm password</label>
        <InputTemplate
          value={verifyPassword}
          type="text"
          handler={verifyPasswordHandler}
          name="password"
        />
      </div>
    </Form>
  );
};

export default CreateAccountForm;
