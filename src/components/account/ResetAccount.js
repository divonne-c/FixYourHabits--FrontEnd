import React, { useContext, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import ModalSmall from "../modals/modal - small/ModalSmall";
import ModalButtons from "../modals/modal - buttons/ModalButtons";
import { ButtonSecondary } from "../../globalstyles/ButtonStyles";

const ResetAccount = ({ role }) => {
  const [showModal, toggleShowModal] = useState(false);
  const { auth, setRenderData, renderData, setNotifications, notifications } =
    useContext(AuthContext);
  const { userProfile, adminProfile } = useContext(ProfileContext);

  const show = () => {
    toggleShowModal(!showModal);
  };

  const resetAccountHandler = async (e) => {
    e.preventDefault();

    let data = {};

    if (role === "admin") {
      data = {
        ...adminProfile,
        adminHabits: [],
        adminRewards: [],
      };
    } else {
      data = {
        ...userProfile,
        file: null,
        totalHabits: 0,
        totalCompletedHabits: 0,
        userHabits: [],
        userRewards: [],
      };
    }

    const token = localStorage.getItem("token");

    try {
      await axios.all([
        await axios.delete(
          `http://localhost:8080/${role}profiles/${auth.user.username}/${role}habits`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        await axios.delete(
          `http://localhost:8080/${role}profiles/${auth.user.username}/${role}rewards`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        await axios.put(
          `http://localhost:8080/${role}profiles/${auth.user.username}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
      ]);

      setRenderData(!renderData);
      setNotifications([
        ...notifications,
        {
          type: "success",
          message: "You successfully reset your profile.",
        },
      ]);
    } catch (error) {
      console.log(error);
      setNotifications([
        ...notifications,
        {
          type: "error",
          message: "Something went wrong with your request. Please try again.",
        },
      ]);
    }
  };

  return (
    <>
      <ButtonSecondary type="button" onClick={show}>
        Reset
      </ButtonSecondary>

      {showModal && (
        <ModalSmall>
          <p>
            Are you sure you want to reset your account? All your progress will
            be gone.
          </p>
          <ModalButtons
            show={show}
            handler={resetAccountHandler}
            buttonText="Reset"
          />
        </ModalSmall>
      )}
    </>
  );
};

export default ResetAccount;
