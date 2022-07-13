import React, { useContext, useState } from "react";
import { ButtonAddHabit } from "../../habits/habit - create/CreateHabit.styles";
import Modal from "../../modals/modal - normal/Modal";
import { Form } from "../../habits/habit - form/FormHabit.styles";
import FormHabit from "../../habits/habit - form/FormHabit";
import { ButtonContainer } from "../../../pages/home/Home.styles";
import { ButtonSecondary } from "../../../styles - global/global/ButtonStyles";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import RewardForm from "../reward - form/RewardForm";

const CreateReward = () => {
  const [number, setNumber] = useState(0);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [showMenu, toggleShowMenu] = useState(false);
  const { auth, renderData, setRenderData } = useContext(AuthContext);

  const show = () => {
    toggleShowMenu(!showMenu);
  };

  const numberChangeHandler = (event) => {
    setNumber(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setType(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const createRewardHandler = async (e) => {
    e.preventDefault();

    const data = {
      name: `habit-${number}`,
      description: description,
      type: type,
      adminProfile: {
        id: auth.user.id,
      },
    };

    const token = localStorage.getItem("token");

    try {
      await axios
        .post(`http://localhost:8080/adminrewards/`, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => console.log(response));

      setRenderData(!renderData);
    } catch (error) {
      console.log(error);
    }

    console.log(data);

    toggleShowMenu(!showMenu);
    setNumber(0);
    setDescription("");
  };

  return (
    <div>
      <h1>Create Reward</h1>
      <ButtonAddHabit onClick={show}>
        <span>+</span>
      </ButtonAddHabit>
      {showMenu && (
        <Modal title="Create Habit">
          <Form onSubmit={createRewardHandler}>
            <RewardForm
              typeChangeHandler={typeChangeHandler}
              numberChangeHandler={numberChangeHandler}
              number={number}
              descriptionChangeHandler={descriptionChangeHandler}
              description={description}
            />

            {/* ----- buttons -----*/}
            <ButtonContainer>
              <ButtonSecondary type="button" onClick={show}>
                Cancel
              </ButtonSecondary>
              <button type="submit">Save</button>
            </ButtonContainer>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default CreateReward;
