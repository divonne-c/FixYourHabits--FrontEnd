import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import Modal from "../../modals/modal - normal/Modal";
import RewardForm from "../../forms/RewardForm";
import MenuButton from "../../habit - reward/menu buttons/MenuButton";
import ModalButtons from "../../modals/modal - buttons/ModalButtons";

const UpdateReward = ({ reward, toggleShowMenu, showMenu, show }) => {
  const [rewardData, setRewardData] = useState({
    number: reward.name.split("-")[1],
    type: reward.type,
    description: reward.description,
  });
  const [showModal, toggleShowModal] = useState(false);
  const { auth, renderData, setRenderData, setNotifications, notifications } =
    useContext(AuthContext);

  const showModalHandler = () => {
    toggleShowModal(!showModal);
  };

  const onChangeHandler = (e) => {
    setRewardData({ ...rewardData, [e.target.name]: e.target.value });
  };

  const updateRewardHandler = async (e) => {
    e.preventDefault();

    const data = {
      name: `habit-${rewardData.number}`,
      description: rewardData.description,
      type: rewardData.type,
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
        { type: "success", message: "You successfully updated the reward" },
      ]);
    } catch (error) {
      console.log(error);
      setNotifications([
        ...notifications,
        {
          type: "error",
          message:
            "Something went wrong with updating the reward. Please try again.",
        },
      ]);
    }

    toggleShowModal(!showModal);
    toggleShowMenu(!showMenu);
  };

  return (
    <>
      {/*----- BUTTON -----*/}
      <MenuButton handler={showModalHandler} name="edit" />

      {/*----- MODAL ------*/}
      {showModal && (
        <Modal title="Update Reward">
          {/*FORM*/}
          <form onSubmit={updateRewardHandler}>
            <RewardForm reward={rewardData} handler={onChangeHandler} />

            {/*MODAL BUTTONS*/}
            <ModalButtons show={show} buttonText="Save" />
          </form>
        </Modal>
      )}
    </>
  );
};

export default UpdateReward;
