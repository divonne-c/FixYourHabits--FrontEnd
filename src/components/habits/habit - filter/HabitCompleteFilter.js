import React from "react";
import { ButtonSecondary } from "../../../styles - global/global/ButtonStyles";

const HabitCompleteFilter = (
  sortHabits,
  setSortHabits,
  // className,
  todo,
  completed,
  children
) => {
  return (
    <button
      onClick={() => {
        setSortHabits({
          ...sortHabits,
          todo: todo,
          completed: completed,
        });
      }}
    >
      {children}
    </button>
  );
};

export default HabitCompleteFilter;
