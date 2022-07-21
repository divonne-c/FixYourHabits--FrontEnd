import React from "react";
import InputTemplate from "./InputTemplate";
import { Form } from "./Form.styles";

const EditPasswordForm = ({
  password,
  currentChangeHandler,
  newPasswordHandler,
  verifyPasswordHandler,
}) => {
  return (
    <Form>
      <div>
        <label htmlFor="">Current password</label>
        <InputTemplate
          handler={currentChangeHandler}
          type="text"
          value={password.currentPassword}
          name="current"
          placeholder="&#xe3c9;"
        />
      </div>

      <div>
        <label htmlFor="">New password</label>
        <InputTemplate
          handler={newPasswordHandler}
          type="text"
          value={password.newPassword}
          name="new"
          placeholder="&#xe3c9;"
        />
      </div>

      <div>
        <label htmlFor="">Verify password</label>
        <InputTemplate
          handler={verifyPasswordHandler}
          type="text"
          value={password.verifyPassword}
          name="verify"
          placeholder="&#xe3c9;"
        />
      </div>
    </Form>
  );
};

export default EditPasswordForm;
