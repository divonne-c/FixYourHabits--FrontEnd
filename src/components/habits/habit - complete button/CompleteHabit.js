import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../../globalstyles/MediaQueryDisplay";
import { CompleteButton } from "./CompleteHabit.styles";

const CompleteHabit = ({ habit }) => {
  const [habitCompleted, toggleHabitCompleted] = useState(habit.completed);
  const { renderData, setRenderData, setNotifications, notifications } =
    useContext(AuthContext);

  const completeHandler = () => {
    toggleHabitCompleted(!habitCompleted);
  };

  useEffect(() => {
    const data = {
      ...habit,
      completed: habitCompleted,
    };

    const token = localStorage.getItem("token");
    try {
      axios.put(`http://localhost:8080/userhabits/${habit.id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setRenderData(!renderData);
    } catch (error) {
      console.log(error);
      setNotifications([
        ...notifications,
        {
          type: "success",
          message:
            "Something went wrong with completing the habit. Please try again.",
        },
      ]);
    }
  }, [habitCompleted]);

  return (
    <CompleteButton type="submit" onClick={completeHandler}>
      {/*----- DESKTOP -----*/}
      <DesktopWHeight>{!habitCompleted ? "Complete" : "Undo"}</DesktopWHeight>

      {/*----- MOBILE -----*/}
      <MobileWHeight>
        <div className={habitCompleted ? "checked" : ""}>
          <input type="checkbox" />
        </div>
      </MobileWHeight>
    </CompleteButton>
  );
};

export default CompleteHabit;
