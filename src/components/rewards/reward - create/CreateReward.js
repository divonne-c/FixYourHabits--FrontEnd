import React, { useContext, useState } from "react";
import Modal from "../../modals/modal - normal/Modal";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import RewardForm from "../../forms/RewardForm";
import CreateAdminElementButton from "../../habit - reward/create/CreateAdminElementButton";
import ModalButtons from "../../modals/modal - buttons/ModalButtons";

const CreateReward = () => {
  const [reward, setReward] = useState({
    number: 0,
    type: "",
    description: "",
  });
  const [showMenu, toggleShowMenu] = useState(false);
  const { auth, renderData, setRenderData, setNotifications, notifications } =
    useContext(AuthContext);

  const show = () => {
    toggleShowMenu(!showMenu);
  };

  const onChangeHandler = (e) => {
    setReward({ ...reward, [e.target.name]: e.target.value });
  };

  const createRewardHandler = async (e) => {
    e.preventDefault();

    const data = {
      name: `habit-${reward.number}`,
      description: reward.description,
      type: reward.type,
      adminProfile: {
        id: auth.user.id,
      },
    };

    const token = localStorage.getItem("token");

    try {
      await axios.post(`http://localhost:8080/adminrewards/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setRenderData(!renderData);
      setNotifications([
        ...notifications,
        { type: "success", message: "You successfully created a new reward" },
      ]);
    } catch (error) {
      console.log(error);
      setNotifications([...notifications, { type: "error", message: error }]);
    }

    toggleShowMenu(!showMenu);
    setReward({
      name: 0,
      type: "",
      description: "",
    });
  };

  return (
    <>
      {/*----- BUTTON -----*/}
      <CreateAdminElementButton show={show} name="Reward" />

      {/*----- MODAL -----*/}
      {showMenu && (
        <Modal title="Create Reward">
          {/*FORM*/}
          <form onSubmit={createRewardHandler}>
            <RewardForm reward={reward} handler={onChangeHandler} />

            {/*MODAL BUTTONS*/}
            <ModalButtons show={show} buttonText="Create" />
          </form>
        </Modal>
      )}
    </>
  );
};

export default CreateReward;
