import React, { useContext } from "react";
import { Form, RadioContainer } from "./Form.styles";
import { AuthContext } from "../../context/AuthContext";
import InputTemplate from "./InputTemplate";

const HabitForm = ({ habit, handler }) => {
  const { auth } = useContext(AuthContext);

  return (
    <Form>
      {/* ----- NAME -----*/}
      <InputTemplate
        type="text"
        value={habit.name}
        name="name"
        handler={handler}
        label="Name"
        pattern="^.{1,20}$"
        errorMessage="The name of the habit can not be longer than 20 characters."
      />

      {/* ----- DESCRIPTION -----*/}
      {auth.user.role === "ROLE_ADMIN" && (
        <InputTemplate
          type="text"
          value={habit.description}
          name="description"
          handler={handler}
          label="Description"
          pattern="^.{10,50}$"
          errorMessage="The description must between 10 and 50 characters."
        />
      )}

      {/* ----- TYPE -----*/}
      <div>
        <p className="input-title">Type</p>
        <RadioContainer>
          <InputTemplate
            type="radio"
            name="type"
            handler={handler}
            label="Sport"
            value="sport"
          />

          <InputTemplate
            type="radio"
            name="type"
            handler={handler}
            label="Health"
            value="health"
          />

          <InputTemplate
            type="radio"
            name="type"
            handler={handler}
            label="Mind"
            value="mind"
          />

          <InputTemplate
            type="radio"
            name="type"
            handler={handler}
            label="Business"
            value="business"
          />

          <InputTemplate
            type="radio"
            name="type"
            handler={handler}
            label="Finance"
            value="finance"
          />

          <InputTemplate
            type="radio"
            name="type"
            handler={handler}
            label="Hobby"
            value="hobby"
          />

          <InputTemplate
            type="radio"
            name="type"
            handler={handler}
            label="Food"
            value="food"
          />

          <InputTemplate
            type="radio"
            name="type"
            handler={handler}
            label="Study"
            value="study"
          />

          <InputTemplate
            type="radio"
            name="type"
            handler={handler}
            label="Home"
            value="home"
          />

          <InputTemplate
            type="radio"
            name="type"
            handler={handler}
            label="Family"
            value="family"
          />
        </RadioContainer>
      </div>
    </Form>
  );
};

export default HabitForm;
