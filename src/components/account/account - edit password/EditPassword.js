import React, { useContext, useEffect, useState } from "react";
import bcrypt from "bcryptjs";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import EditPasswordForm from "../../forms/EditPasswordForm";
import FormButtons from "../../forms/FormButtons";
import { EditPasswordContainer } from "../account.styles";

const EditPassword = () => {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    verifyPassword: "",
  });
  const [correct, setCorrect] = useState(false);
  const [error, setError] = useState("");
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
    e.preventDefault();

    const data = {
      ...user,
      password: bcrypt.hashSync(password.newPassword, 10),
    };

    const token = localStorage.getItem("token");

    if (correct === true && password.newPassword === password.verifyPassword) {
      try {
        await axios
          .put(`http://localhost:8080/users/${auth.user.username}`, data, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => console.log(response));

        setNotifications([
          ...notifications,
          {
            type: "success",
            message: "You successfully updated your password",
          },
        ]);
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
    } else {
      setError("current password incorrect");
    }
  };

  return (
    <form onSubmit={updateAccountHandler}>
      <EditPasswordContainer>
        <EditPasswordForm
          newPasswordHandler={newPasswordHandler}
          password={password}
          verifyPasswordHandler={verifyPasswordHandler}
          currentChangeHandler={currentChangeHandler}
          resetButtonHandler={resetButtonHandler}
        />

        <FormButtons handler={resetButtonHandler} />
        {error && <p>{error}</p>}
      </EditPasswordContainer>
    </form>
  );
};

export default EditPassword;
