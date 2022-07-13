import React from "react";

const RewardForm = ({
  number,
  numberChangeHandler,
  descriptionChangeHandler,
  description,
  typeChangeHandler,
}) => {
  return (
    <div>
      <div>
        <h3>How many habits does an user need to create?</h3>
        <input
          type="number"
          value={number}
          name="name"
          onChange={numberChangeHandler}
          required
        />
      </div>

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

      <h3>Color</h3>
      <div>
        <input
          type="radio"
          value="pink"
          name="type"
          onChange={typeChangeHandler}
          required
        />
        <label htmlFor="sport">Pink</label>
      </div>
      <div>
        <input
          type="radio"
          value="green"
          name="type"
          onChange={typeChangeHandler}
        />
        <label htmlFor="sport">Green</label>
      </div>
      <div>
        <input
          type="radio"
          value="yellow"
          name="type"
          onChange={typeChangeHandler}
        />
        <label htmlFor="sport">Yellow</label>
      </div>
      <div>
        <input
          type="radio"
          value="blue"
          name="type"
          onChange={typeChangeHandler}
        />
        <label htmlFor="sport">Blue</label>
      </div>
      <div>
        <input
          type="radio"
          value="purple"
          name="type"
          onChange={typeChangeHandler}
        />
        <label htmlFor="sport">Purple</label>
      </div>
    </div>
  );
};

export default RewardForm;
