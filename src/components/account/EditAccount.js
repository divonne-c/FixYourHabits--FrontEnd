import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import InputTemplate from "../forms/InputTemplate";
import FormButtons from "../forms/FormButtons";
import { Form } from "../forms/Form.styles";

const EditAccount = () => {
  const {
    auth,
    renderData,
    setRenderData,
    setNotifications,
    notifications,
    user,
  } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
  });

  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const resetHandler = () => {
    setUserData({
      name: user.name,
      email: user.email,
    });
  };

  const updateAccountHandler = async (e) => {
    e.preventDefault();

    const data = {
      ...user,
      name: userData.name,
      email: userData.email,
    };

    const token = localStorage.getItem("token");

    try {
      await axios.put(
        `http://localhost:8080/users/${auth.user.username}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRenderData(!renderData);
      setNotifications([
        ...notifications,
        {
          type: "success",
          message: "You successfully updated your personal information",
        },
      ]);
    } catch (error) {
      console.log(error);
      setNotifications([
        ...notifications,
        { type: "error", message: "The email is already in use." },
      ]);
    }

    setUserData({
      name: user.name,
      email: user.email,
    });
  };

  return (
    <form onSubmit={updateAccountHandler}>
      <Form>
        <InputTemplate
          label="Name"
          name="name"
          value={userData.name}
          type="text"
          handler={onChangeHandler}
          pattern="^[a-zA-Z](\s?[a-zA-Z]){0,30}$"
          errorMessage="Name should have a maximum of 30 characters and can not contain numbers."
        />

        <InputTemplate
          label="Email"
          name="email"
          value={userData.email}
          type="email"
          handler={onChangeHandler}
          errorMessage="Not a valid email address."
        />
        <FormButtons handler={resetHandler} />
      </Form>
    </form>
  );
};

export default EditAccount;
