import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ProfileContext } from "../../../context/ProfileContext";
import { ButtonThird } from "../../../styles - global/global/ButtonStyles";
import axios from "axios";

const TotalUserHabits = () => {
  const { auth, renderData, setRenderData } = useContext(AuthContext);
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
      await axios
        .put(`http://localhost:8080/userprofiles/${auth.user.username}`, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => console.log(response));

      setRenderData(!renderData);
    } catch (e) {
      console.error(e);
      console.log("habitform error");
    }
  };

  return (
    <div>
      <ButtonThird type="submit" onClick={totalHabits}>
        Save
      </ButtonThird>
    </div>
  );
};

export default TotalUserHabits;
