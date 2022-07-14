import React from "react";
import InputTemplate from "./InputTemplate";
import { Form, RadioContainer } from "./Form.styles";

const RewardForm = ({
  number,
  numberChangeHandler,
  descriptionChangeHandler,
  description,
  typeChangeHandler,
}) => {
  return (
    <Form>
      {/* ----- NAME -----*/}
      <div>
        <h3>How many habits does an user need to create?</h3>
        <InputTemplate
          type="number"
          value={number}
          name="name"
          handler={numberChangeHandler}
        />
      </div>

      {/* ----- DESCRIPTION -----*/}
      <div>
        <h3>Description</h3>
        <InputTemplate
          type="text"
          value={description}
          name="name"
          handler={descriptionChangeHandler}
        />
      </div>

      {/* ----- COLOR -----*/}
      <div>
        <h3>Color</h3>
        <RadioContainer>
          <div>
            <InputTemplate
              type="radio"
              value="pink"
              name="type"
              handler={typeChangeHandler}
            />
          </div>
          <div>
            <InputTemplate
              type="radio"
              value="green"
              name="type"
              handler={typeChangeHandler}
            />
          </div>
          <div>
            <InputTemplate
              type="radio"
              value="yellow"
              name="type"
              handler={typeChangeHandler}
            />
          </div>
          <div>
            <InputTemplate
              type="radio"
              value="blue"
              name="type"
              handler={typeChangeHandler}
            />
          </div>
          <div>
            <InputTemplate
              type="radio"
              value="purple"
              name="type"
              handler={typeChangeHandler}
            />
          </div>
        </RadioContainer>
      </div>
    </Form>
  );
};

export default RewardForm;
