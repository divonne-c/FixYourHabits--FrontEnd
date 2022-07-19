import React, { useContext, useEffect, useState } from "react";
import bcrypt from "bcryptjs";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { ProfileContext } from "../../../context/ProfileContext";

const EditPassword = () => {
  const { auth, setRenderData, renderData, setNotifications, notifications } =
    useContext(AuthContext);
  const { userProfile } = useContext(ProfileContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyPasswords, setVerifyPasswords] = useState("");
  const [correct, setCorrect] = useState(false);

  const currentChangeHandler = (e) => {
    setCurrentPassword(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setNewPassword(e.target.value);
  };

  const verifyHandler = (e) => {
    setVerifyPasswords(e.target.value);
  };

  useEffect(() => {
    bcrypt.compare(
      currentPassword,
      userProfile.user.password,
      function (err, res) {
        if (err) {
          console.log("error");
          setCorrect(false);
        }
        if (res) {
          console.log("correct");
          setCorrect(true);
        } else {
          // response is OutgoingMessage object that server response http request
          console.log("false");
          setCorrect(false);
        }
      }
    );
  }, [currentPassword]);

  const updateAccountHandler = async (e) => {
    if (correct === true && newPassword === verifyPasswords) {
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
          .put(
            `http://localhost:8080/userprofiles/${auth.user.username}`,
            data,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          )
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
    } else {
      console.log("current password incorrect");
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
