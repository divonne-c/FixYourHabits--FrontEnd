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

const EditAccount = () => {
  const { userProfile } = useContext(ProfileContext);
  const { auth, renderData, setRenderData, setNotifications, notifications } =
    useContext(AuthContext);
  const [name, setName] = useState(userProfile.user.name);
  const [email, setEmail] = useState(userProfile.user.email);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const resetHandler = () => {
    setName(userProfile.user.name);
    setEmail(userProfile.user.email);
  };

  const updateAccountHandler = async (e) => {
    e.preventDefault();

    const data = {
      ...userProfile,
      user: {
        ...userProfile.user,
        name: name,
        email: email,
      },
    };

    const token = localStorage.getItem("token");

    try {
      await axios
        .put(`http://localhost:8080/userprofiles/${auth.user.username}`, data, {
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
      setNotifications([...notifications, { type: "error", message: error }]);
    }
  };

  return (
    <Form>
      <form onSubmit={updateAccountHandler}>
        <div>
          <label htmlFor="">Name</label>
          <InputTemplate type="text" value={name} handler={nameChangeHandler} />
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
      </form>
    </Form>
  );
};

export default EditAccount;
