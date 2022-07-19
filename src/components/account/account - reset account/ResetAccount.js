import React, { useContext, useState } from "react";
import { ProfileContext } from "../../../context/ProfileContext";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import {
  ButtonFourth,
  ButtonSecondary,
} from "../../../styles - global/global/ButtonStyles";

const ResetAccount = () => {
  const { auth, setRenderData, renderData, setNotifications, notifications } =
    useContext(AuthContext);
  const { userProfile } = useContext(ProfileContext);

  const resetAccountHandler = async (e) => {
    e.preventDefault();

    const data = {
      ...userProfile,
      file: null,
      totalHabits: 0,
      totalCompletedHabits: 0,
      userHabits: [],
      userRewards: [],
    };

    const token = localStorage.getItem("token");

    try {
      axios.all([
        await axios.delete(
          `http://localhost:8080/userprofiles/${auth.user.username}/userhabits`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        await axios.delete(
          `http://localhost:8080/userprofiles/${auth.user.username}/userrewards`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        await axios.put(
          `http://localhost:8080/userprofiles/${auth.user.username}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
      ]);

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
    <div>
      <ButtonSecondary type="button" onClick={resetAccountHandler}>
        Reset
      </ButtonSecondary>
    </div>
  );
};

export default ResetAccount;
