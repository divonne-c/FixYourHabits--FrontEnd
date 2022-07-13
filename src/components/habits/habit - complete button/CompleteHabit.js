import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import {
  Desktop,
  Mobile,
} from "../../../styles - global/media/MediaQueryDisplay";
import { CompleteButton } from "./CompleteHabit.styles";

const CompleteHabit = ({ habit }) => {
  const [habitCompleted, toggleHabitCompleted] = useState(habit.completed);
  const { renderData, setRenderData } = useContext(AuthContext);

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
    }
  }, [habitCompleted]);

  return (
    <div>
      <CompleteButton type="submit" onClick={completeHandler}>
        <Desktop>{!habitCompleted ? "Complete" : "Undo"}</Desktop>
        <Mobile>
          <div className={habitCompleted ? "checked" : ""}>
            <input type="checkbox" />
          </div>
        </Mobile>
      </CompleteButton>
    </div>
  );
};

export default CompleteHabit;
