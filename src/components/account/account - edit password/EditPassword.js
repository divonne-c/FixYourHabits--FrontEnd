import React, { useContext, useEffect, useState } from "react";
import bcrypt from "bcryptjs";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import EditPasswordForm from "../../forms/EditPasswordForm";
import {
  ButtonSecondary,
  ButtonThird,
} from "../../../styles - global/global/ButtonStyles";
import { Buttons } from "../../forms/Form.styles";

const EditPassword = () => {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    verifyPassword: "",
  });
  const [correct, setCorrect] = useState(false);
  const {
    auth,
    setRenderData,
    renderData,
    setNotifications,
    notifications,
    user,
  } = useContext(AuthContext);

  const currentChangeHandler = (event) => {
    setPassword({ ...password, currentPassword: event.target.value });
  };

  const newPasswordHandler = (event) => {
    setPassword({ ...password, newPassword: event.target.value });
  };

  const verifyPasswordHandler = (event) => {
    setPassword({ ...password, verifyPassword: event.target.value });
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
    if (correct === true && password.newPassword === password.verifyPassword) {
      e.preventDefault();

      const data = {
        ...user,
        password: bcrypt.hashSync(password.newPassword, 10),
      };

      console.log(data);
      const token = localStorage.getItem("token");

      try {
        await axios
          .put(`http://localhost:8080/users/${auth.user.username}`, data, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => console.log(response));

        setRenderData(!renderData);
        setNotifications([
          ...notifications,
          {
            type: "success",
            message: "You successfully updated your password",
          },
        ]);
      } catch (error) {
        console.log(error);
        setNotifications([...notifications, { type: "error", message: error }]);
      }
    } else {
      console.log("current password incorrect");
    }
  };

  return (
    <form onSubmit={updateAccountHandler}>
      <EditPasswordForm
        newPasswordHandler={newPasswordHandler}
        password={password}
        verifyPasswordHandler={verifyPasswordHandler}
        currentChangeHandler={currentChangeHandler}
        resetButtonHandler={resetButtonHandler}
      />

      <Buttons>
        <ButtonSecondary type="reset" onClick={resetButtonHandler}>
          Cancel
        </ButtonSecondary>
        <ButtonThird type="submit">Save</ButtonThird>
      </Buttons>
    </form>
  );
};

export default EditPassword;
