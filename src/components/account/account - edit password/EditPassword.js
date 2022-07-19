import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { Profile } from "../../stats/stats - profile info/StatsProfileInfo.styles";
import { ProfileContext } from "../../../context/ProfileContext";

const EditPassword = () => {
  const { auth, setRenderData, renderData, setNotifications, notifications } =
    useContext(AuthContext);
  const { userProfile } = useContext(ProfileContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyPasswords, setVerifyPasswords] = useState("");

  const currentChangeHandler = (e) => {
    setCurrentPassword(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setNewPassword(e.target.value);
  };

  const verifyHandler = (e) => {
    setVerifyPasswords(e.target.value);
  };

  // console.log(userProfile);
  console.log(userProfile.user.password == currentPassword);

  const updateAccountHandler = async (e) => {
    // const checkPassword = () => {};

    e.preventDefault();

    const data = {
      ...userProfile,
      user: {
        ...userProfile.user,
        password: newPassword,
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
      <label htmlFor="">Current password</label>
      <input
        type="text"
        value={currentPassword}
        onChange={currentChangeHandler}
      />
      <label htmlFor="">New password</label>
      <input type="text" value={newPassword} onChange={passwordChangeHandler} />
      <label htmlFor="">New password</label>
      <input type="text" value={verifyPasswords} onChange={verifyHandler} />
      <button type="reset">Cancel</button>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditPassword;
