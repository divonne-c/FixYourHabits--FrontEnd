import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import Modal from "../../modals/modal - normal/Modal";
import { Form } from "../../habits/habit - form/FormHabit.styles";
import RewardForm from "../reward - form/RewardForm";
import { ButtonContainer } from "../../../pages/home/Home.styles";
import { ButtonSecondary } from "../../../styles - global/global/ButtonStyles";
import { Mobile } from "../../../styles - global/media/MediaQueryDisplay";
import { HabitMenuContainer } from "../../habits/habit - delete/DeleteHabit.styles";

const UpdateReward = ({ reward, toggleShowMenu, showMenu, show }) => {
  const [number, setNumber] = useState(reward.name);
  const [type, setType] = useState(reward.type);
  const [description, setDescription] = useState(reward.description);
  const [showModal, toggleShowModal] = useState(false);
  const { auth, renderData, setRenderData } = useContext(AuthContext);

  const showModalHandler = () => {
    toggleShowModal(!showModal);
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

  const updateRewardHandler = async (e) => {
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
        .put(`http://localhost:8080/adminrewards/${reward.id}`, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((renspons) => console.log(renspons));

      setRenderData(!renderData);
    } catch (error) {
      console.log(error);
    }

    toggleShowModal(!showModal);
    toggleShowMenu(!showMenu);
  };

  return (
    <div>
      <HabitMenuContainer>
        <button onClick={showModalHandler}>
          <span className="container">
            <span className="material-symbols-outlined edit">edit</span>
            <Mobile>
              <p>Edit habit</p>
            </Mobile>
          </span>
        </button>
      </HabitMenuContainer>

      {showModal && (
        <Modal title="Update Reward">
          <Form onSubmit={updateRewardHandler}>
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

export default UpdateReward;
