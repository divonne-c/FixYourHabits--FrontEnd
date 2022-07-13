import React, { useContext } from "react";
import { Container } from "./FormHabit.styles";
import { AuthContext } from "../../../context/AuthContext";
import FormHabitTypeTemplate from "./FormHabitTypeTemplate";

const FormHabit = ({
  nameHabit,
  nameChangeHandler,
  description,
  descriptionChangeHandler,
  typeChangeHandler,
}) => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      {/* ----- NAME -----*/}
      <div>
        <h3>Name</h3>
        <input
          type="text"
          value={nameHabit}
          name="name"
          onChange={nameChangeHandler}
          required
        />
      </div>

      {/* ----- DESCRIPTION -----*/}
      {auth.user.role === "ROLE_ADMIN" && (
        <div>
          <h3>Description</h3>
          <input
            type="text"
            value={description}
            name="name"
            onChange={descriptionChangeHandler}
            required
          />
        </div>
      )}

      {/* ----- TYPE -----*/}
      <div>
        <h3>Type</h3>
        <Container>
          <FormHabitTypeTemplate type="sport" handler={typeChangeHandler} />
          <FormHabitTypeTemplate type="food" handler={typeChangeHandler} />
          <FormHabitTypeTemplate type="health" handler={typeChangeHandler} />
          <FormHabitTypeTemplate type="mind" handler={typeChangeHandler} />
        </Container>
      </div>
    </>
  );
};

export default FormHabit;
