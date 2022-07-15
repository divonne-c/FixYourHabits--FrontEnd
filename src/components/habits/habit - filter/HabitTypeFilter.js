import React, { useEffect, useState } from "react";
import InputTemplate from "../../forms/InputTemplate";
import { Container } from "./HabitTypeFilter.styles";

const HabitTypeFilter = ({ setFilteredHabits, habits }) => {
  const [type, setType] = useState([]);

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
      console.log("er gaat iets mis");
    }
  };

  return (
    <Container>
      <InputTemplate
        type="checkbox"
        name="sport"
        value="sport"
        handler={statusHandler}
      />
      <InputTemplate
        type="checkbox"
        name="mind"
        value="mind"
        handler={statusHandler}
      />
      <InputTemplate
        type="checkbox"
        name="food"
        value="food"
        handler={statusHandler}
      />
      <InputTemplate
        type="checkbox"
        name="health"
        value="health"
        handler={statusHandler}
      />
    </Container>
  );
};

export default HabitTypeFilter;
