import React, { useContext, useState } from "react";
import { ProfileContext } from "../../../context/ProfileContext";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

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
    <form onSubmit={updateAccountHandler}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={name}
        name="name"
        onChange={nameChangeHandler}
      />

      <label htmlFor="">Email</label>
      <input
        type="text"
        value={email}
        name="name"
        onChange={emailChangeHandler}
      />

      <button type="reset">Cancel</button>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditAccount;
