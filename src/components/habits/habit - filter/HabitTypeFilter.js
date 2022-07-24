import React, { useContext, useEffect, useState } from "react";
import InputTemplate from "../../forms/InputTemplate";
import { AuthContext } from "../../../context/AuthContext";
import { FilterContainer } from "./HabitTypeFilter.styles";

const HabitTypeFilter = ({ setFilteredHabits, habits }) => {
  const [type, setType] = useState([]);
  const { notifications, setNotifications } = useContext(AuthContext);

  useEffect(() => {
    const filterHandler = () => {
      setFilteredHabits(
        habits.filter((habit) => {
          if (!type.length) {
            return habit;
          } else {
            for (let i = 0; i < type.length; i++) {
              if (habit.type === type[i]) {
                return habit.type;
              }
            }
          }
        })
      );
    };
    filterHandler();
  }, [type, habits]);

  const statusHandler = (e) => {
    if (type.includes(e.target.value)) {
      setType(type.filter((index) => index !== e.target.value));
    } else if (!type.includes(e.target.value)) {
      setType([...type, e.target.value]);
    } else {
      setNotifications([
        ...notifications,
        {
          type: "success",
          message:
            "Something went wrong with filtering the habits. Please try again.",
        },
      ]);
    }
  };

  return (
    <FilterContainer>
      <InputTemplate
        type="checkbox"
        name="sport"
        value="sport"
        label="Sport"
        handler={statusHandler}
      />
      <InputTemplate
        type="checkbox"
        name="mind"
        value="mind"
        label="Mind"
        handler={statusHandler}
      />
      <InputTemplate
        type="checkbox"
        name="food"
        value="food"
        label="Food"
        handler={statusHandler}
      />
      <InputTemplate
        type="checkbox"
        name="health"
        value="health"
        label="Health"
        handler={statusHandler}
      />
      <InputTemplate
        type="checkbox"
        name="finance"
        value="finance"
        label="Finance"
        handler={statusHandler}
      />
      <InputTemplate
        type="checkbox"
        name="business"
        value="business"
        label="Business"
        handler={statusHandler}
      />
      <InputTemplate
        type="checkbox"
        name="hobby"
        value="hobby"
        label="Hobby"
        handler={statusHandler}
      />
      <InputTemplate
        type="checkbox"
        name="study"
        value="study"
        label="Study"
        handler={statusHandler}
      />
      <InputTemplate
        type="checkbox"
        name="home"
        value="home"
        label="Home"
        handler={statusHandler}
      />
      <InputTemplate
        type="checkbox"
        name="family"
        value="family"
        label="Family"
        handler={statusHandler}
      />
    </FilterContainer>
  );
};

export default HabitTypeFilter;
