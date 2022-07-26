import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { ProfileContext } from "../../../context/ProfileContext";
import { ButtonThird } from "../../../styles - global/global/ButtonStyles";

const TotalUserHabitsButton = () => {
  const { auth, renderData, setRenderData, setNotifications, notifications } =
    useContext(AuthContext);
  const { userProfile } = useContext(ProfileContext);

  const totalHabits = async () => {
    if (userProfile.totalHabits >= 0) {
      userProfile.totalHabits = userProfile.totalHabits + 1;
    }

    const data = {
      ...userProfile,
      totalHabits: userProfile.totalHabits,
    };

    const token = localStorage.getItem("token");

    try {
      await axios.put(
        `http://localhost:8080/userprofiles/${auth.user.username}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRenderData(!renderData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ButtonThird type="submit" onClick={totalHabits}>
      Save
    </ButtonThird>
  );
};

export default TotalUserHabitsButton;
