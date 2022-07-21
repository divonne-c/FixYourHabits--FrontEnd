import React, { useContext, useState } from "react";
import { ProfileContext } from "../../../context/ProfileContext";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import InputTemplate from "../../forms/InputTemplate";
import {
  ButtonSecondary,
  ButtonThird,
} from "../../../styles - global/global/ButtonStyles";
import { Buttons, Form } from "../../forms/Form.styles";
import { Container } from "./EditAccount.styles";

const EditAccount = () => {
  const {
    auth,
    renderData,
    setRenderData,
    setNotifications,
    notifications,
    user,
  } = useContext(AuthContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const resetHandler = () => {
    setName(user.name);
    setEmail(user.email);
  };

  const updateAccountHandler = async (e) => {
    e.preventDefault();

    const data = {
      ...user,
      name: name,
      email: email,
    };

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

    setName(user.name);
    setEmail(user.email);
  };

  return (
    <Form>
      <form onSubmit={updateAccountHandler}>
        <Container>
          <div>
            <label htmlFor="">Name</label>
            <InputTemplate
              type="text"
              value={name}
              handler={nameChangeHandler}
            />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <InputTemplate
              type="text"
              value={email}
              handler={emailChangeHandler}
            />
          </div>

          <Buttons>
            <ButtonSecondary type="reset" onClick={resetHandler}>
              Cancel
            </ButtonSecondary>
            <ButtonThird type="submit">Save</ButtonThird>
          </Buttons>
        </Container>
      </form>
    </Form>
  );
};

export default EditAccount;
