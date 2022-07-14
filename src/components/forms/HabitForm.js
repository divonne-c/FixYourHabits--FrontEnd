import React, { useContext } from "react";
import { Form, RadioContainer } from "./Form.styles";
import { AuthContext } from "../../context/AuthContext";
import InputTemplate from "./InputTemplate";

const HabitForm = ({
  nameHabit,
  nameChangeHandler,
  description,
  descriptionChangeHandler,
  typeChangeHandler,
}) => {
  const { auth } = useContext(AuthContext);

  return (
    <Form>
      {/* ----- NAME -----*/}
      <div>
        <h3>Name</h3>
        <InputTemplate
          type="text"
          value={nameHabit}
          name="name"
          handler={nameChangeHandler}
        />
      </div>

      {/* ----- DESCRIPTION -----*/}
      {auth.user.role === "ROLE_ADMIN" && (
        <div>
          <h3>Description</h3>
          <InputTemplate
            type="text"
            value={description}
            name="name"
            handler={descriptionChangeHandler}
          />
        </div>
      )}

      {/* ----- TYPE -----*/}
      <div>
        <h3>Type</h3>
        <RadioContainer>
          <InputTemplate
            type="radio"
            value="sport"
            name="type"
            handler={typeChangeHandler}
          />
          <InputTemplate
            type="radio"
            value="food"
            name="type"
            handler={typeChangeHandler}
          />
          <InputTemplate
            type="radio"
            value="health"
            name="type"
            handler={typeChangeHandler}
          />
          <InputTemplate
            type="radio"
            value="mind"
            name="type"
            handler={typeChangeHandler}
          />
        </RadioContainer>
      </div>
    </Form>
  );
};

export default HabitForm;
