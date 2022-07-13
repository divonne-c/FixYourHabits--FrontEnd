import React, { useContext } from "react";
import { Container } from "./FormHabit.styles";
import { AuthContext } from "../../../context/AuthContext";

const FormHabit = ({
  nameHabit,
  nameChangeHandler,
  description,
  descriptionChangeHandler,
  typeChangeHandler,
}) => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      {/* ----- name -----*/}
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

      {/* ----- type -----*/}
      <div>
        <h3>Type</h3>
        <Container>
          <div>
            <input
              type="radio"
              value="sport"
              name="type"
              onChange={typeChangeHandler}
              required
            />
            <label htmlFor="sport">Sport</label>
          </div>
          <div>
            <input
              type="radio"
              value="food"
              name="type"
              onChange={typeChangeHandler}
            />
            <label htmlFor="sport">Food</label>
          </div>
          <div>
            <input
              type="radio"
              value="health"
              name="type"
              onChange={typeChangeHandler}
            />
            <label htmlFor="sport">Health</label>
          </div>
          <div>
            <input
              type="radio"
              value="mind"
              name="type"
              onChange={typeChangeHandler}
            />
            <label htmlFor="sport">Mind</label>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FormHabit;
