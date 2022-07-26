import React, { useContext, useEffect, useState } from "react";
import bcrypt from "bcryptjs";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import FormButtons from "../forms/FormButtons";
import InputTemplate from "../forms/InputTemplate";
import { Form } from "../forms/Form.styles";

const EditPassword = () => {
  const [correct, setCorrect] = useState(false);
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    verifyPassword: "",
  });
  const {
    auth,
    setRenderData,
    renderData,
    setNotifications,
    notifications,
    user,
  } = useContext(AuthContext);

  const onChangeHandler = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const resetButtonHandler = () => {
    setPassword({
      currentPassword: "",
      newPassword: "",
      verifyPassword: "",
    });
  };

  useEffect(() => {
    bcrypt.compare(
      password.currentPassword,
      user.password,
      function (err, res) {
        if (err) {
          setCorrect(false);
        }
        if (res) {
          setCorrect(true);
        } else {
          setCorrect(false);
        }
      }
    );
  }, [password.currentPassword]);

  const updateAccountHandler = async (e) => {
    e.preventDefault();

    const data = {
      ...user,
      password: bcrypt.hashSync(password.newPassword, 10),
    };

    const token = localStorage.getItem("token");

    if (correct === true && password.newPassword === password.verifyPassword) {
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

        setNotifications([
          ...notifications,
          {
            type: "success",
            message: "You successfully updated your password",
          },
        ]);
        setRenderData(!renderData);
      } catch (error) {
        console.log(error);
        setNotifications([
          ...notifications,
          {
            type: "success",
            message:
              "Something went wrong with changing your password. Please try again.",
          },
        ]);
      }
      setPassword({
        currentPassword: "",
        newPassword: "",
        verifyPassword: "",
      });
    }
  };

  return (
    <form onSubmit={updateAccountHandler}>
      <Form>
        <InputTemplate
          label="Current password"
          handler={onChangeHandler}
          type="password"
          value={password.currentPassword}
          name="currentPassword"
          placeholder="&#xe3c9;"
        />

        <InputTemplate
          label="New password"
          handler={onChangeHandler}
          type="password"
          value={password.newPassword}
          name="newPassword"
          placeholder="&#xe3c9;"
          errorMessage="Password must be between 5 and 20 characters long and must contain at least one number, uppercase and lowercase character."
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}"
        />

        <InputTemplate
          label="Confirm password"
          handler={onChangeHandler}
          type="password"
          value={password.verifyPassword}
          name="verifyPassword"
          placeholder="&#xe3c9;"
          pattern={password.newPassword}
          errorMessage="Please make sure your password matches."
        />

        <FormButtons handler={resetButtonHandler} />
      </Form>
    </form>
  );
};

export default EditPassword;
