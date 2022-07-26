import React from "react";
import InputTemplate from "./InputTemplate";
import { Form, RadioContainer } from "./Form.styles";

const RewardForm = ({ reward, handler }) => {
  return (
    <Form>
      {/* ----- NUMBER -----*/}
      <InputTemplate
        type="number"
        value={reward.number}
        name="number"
        handler={handler}
        label="How many habits does an user need to create?"
        min="1"
        errorMessage="The number must higher than zero."
      />

      {/* ----- DESCRIPTION -----*/}
      <InputTemplate
        type="text"
        value={reward.description}
        name="description"
        handler={handler}
        label="Description"
        pattern="^.{10,50}$"
        errorMessage="The description must between 10 and 50 characters."
      />

      {/* ----- COLOR -----*/}
      <div>
        <p className="input-title">Color</p>
        <RadioContainer>
          <InputTemplate
            type="radio"
            name="type"
            checked={reward.type === "pink"}
            handler={handler}
            label="Pink"
            value="pink"
          />

          <InputTemplate
            type="radio"
            name="type"
            checked={reward.type === "green"}
            handler={handler}
            label="Green"
            value="green"
          />

          <InputTemplate
            type="radio"
            name="type"
            checked={reward.type === "yellow"}
            handler={handler}
            label="Yellow"
            value="yellow"
          />

          <InputTemplate
            type="radio"
            name="type"
            checked={reward.type === "blue"}
            handler={handler}
            label="Blue"
            value="blue"
          />

          <InputTemplate
            type="radio"
            name="type"
            checked={reward.type === "purple"}
            handler={handler}
            label="Purple"
            value="purple"
          />
        </RadioContainer>
      </div>
    </Form>
  );
};

export default RewardForm;
