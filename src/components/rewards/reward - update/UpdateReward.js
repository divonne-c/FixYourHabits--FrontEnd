import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import Modal from "../../modals/modal - normal/Modal";
import RewardForm from "../../forms/RewardForm";
import {
  ButtonFourth,
  ButtonThird,
} from "../../../styles - global/global/ButtonStyles";
import MenuButton from "../../habit - reward/menu buttons/MenuButton";
import ModalButtons from "../../modals/modal - buttons/ModalButtons";

const UpdateReward = ({ reward, toggleShowMenu, showMenu, show }) => {
  const [number, setNumber] = useState(reward.name);
  const [type, setType] = useState(reward.type);
  const [description, setDescription] = useState(reward.description);
  const [showModal, toggleShowModal] = useState(false);
  const { auth, renderData, setRenderData, setNotifications, notifications } =
    useContext(AuthContext);

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
      await axios.put(`http://localhost:8080/adminrewards/${reward.id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setRenderData(!renderData);
      setNotifications([
        ...notifications,
        { type: "success", message: "You successfully updated the habit" },
      ]);
    } catch (error) {
      console.log(error);
      setNotifications([...notifications, { type: "error", message: error }]);
    }

    toggleShowModal(!showModal);
    toggleShowMenu(!showMenu);
  };

  return (
    <div>
      {/*----- BUTTON -----*/}
      <MenuButton handler={showModalHandler} name="edit" />

      {/*----- MODAL ------*/}
      {showModal && (
        <Modal title="Update Reward">
          {/*FORM*/}
          <form onSubmit={updateRewardHandler}>
            <RewardForm
              typeChangeHandler={typeChangeHandler}
              numberChangeHandler={numberChangeHandler}
              number={number}
              descriptionChangeHandler={descriptionChangeHandler}
              description={description}
            />

            {/*MODAL BUTTONS*/}
            <ModalButtons show={show} buttonText="Save" />
          </form>
        </Modal>
      )}
    </div>
  );
};

export default UpdateReward;
