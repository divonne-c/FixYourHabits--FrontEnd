import React, { useContext, useState } from "react";
import InputTemplate from "./InputTemplate";
import { Form } from "./Form.styles";
import { ButtonThird } from "../../globalstyles/ButtonStyles";
import { AuthContext } from "../../context/AuthContext";

const ContactForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { notifications, setNotifications } = useContext(AuthContext);

  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();

    setNotifications([
      ...notifications,
      {
        type: "success",
        message: "Your request was successfully submitted.",
      },
    ]);

    setUserData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={formHandler}>
      <Form>
        <InputTemplate
          type="text"
          name="name"
          label="Name"
          value={userData.name}
          handler={onChangeHandler}
          pattern="^[a-zA-Z](\s?[a-zA-Z]){0,30}$"
          errorMessage="Name should have a maximum of 30 characters and can not contain numbers."
        />

        <InputTemplate
          type="email"
          name="email"
          label="Email"
          errorMessage="Not a valid email address."
          value={userData.email}
          handler={onChangeHandler}
        />

        <div>
          <label htmlFor="">Message</label>
          <textarea
            cols="10"
            rows="10"
            name="message"
            value={userData.message}
            onChange={onChangeHandler}
          />
        </div>

        <ButtonThird type="submit">send</ButtonThird>
      </Form>
    </form>
  );
};

export default ContactForm;
