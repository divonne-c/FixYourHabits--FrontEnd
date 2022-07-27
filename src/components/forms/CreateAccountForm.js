import React from "react";
import { Form } from "./Form.styles";
import InputTemplate from "./InputTemplate";

const CreateAccountForm = ({ userData, handler }) => {
  return (
    <Form>
      <InputTemplate
        value={userData.name}
        type="text"
        handler={handler}
        name="name"
        label="Name"
        pattern="^[a-zA-Z](\s?[a-zA-Z]){0,30}$"
        errorMessage="Name should have a maximum of 30 characters and can not contain numbers or special characters."
      />

      <InputTemplate
        value={userData.username}
        type="text"
        handler={handler}
        name="username"
        label="Username"
        pattern="^.{3,30}$"
        errorMessage="Username should be between 3 and 30 characters long."
      />

      <InputTemplate
        label="Email"
        name="email"
        value={userData.email}
        type="email"
        handler={handler}
        errorMessage="Not a valid email address."
      />

      <InputTemplate
        label="New password"
        handler={handler}
        type="password"
        value={userData.password}
        name="password"
        errorMessage="Password must be between 5 and 20 characters long and must contain at least one number, uppercase and lowercase character."
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}"
      />

      <InputTemplate
        label="Confirm password"
        handler={handler}
        type="password"
        value={userData.verifyPassword}
        name="verifyPassword"
        pattern={userData.password}
        errorMessage="Please make sure your password matches."
      />
    </Form>
  );
};

export default CreateAccountForm;
