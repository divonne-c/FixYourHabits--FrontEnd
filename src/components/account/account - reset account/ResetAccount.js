import React, { useContext, useState } from "react";
import { ProfileContext } from "../../../context/ProfileContext";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import {
  ButtonFourth,
  ButtonSecondary,
  ButtonThird,
} from "../../../styles - global/global/ButtonStyles";
import { Container } from "../account - delete account/DeleteAccount.styles";
import ModalSmall from "../../modals/modal - small/ModalSmall";

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
      axios.all([
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
          message: "You successfully updated your personal information",
        },
      ]);
    } catch (error) {
      console.log(error);
      setNotifications([...notifications, { type: "error", message: error }]);
    }
  };

  return (
    <Container>
      <ButtonSecondary type="button" onClick={show}>
        Reset
      </ButtonSecondary>

      {showModal && (
        <ModalSmall>
          <p>
            Are you sure you want to reset your account? All your progress will
            be gone.
          </p>
          <div className="button-container">
            <ButtonFourth type="button" onClick={show}>
              Cancel
            </ButtonFourth>
            <ButtonThird type="button" onClick={resetAccountHandler}>
              Reset
            </ButtonThird>
          </div>
        </ModalSmall>
      )}
    </Container>
  );
};

export default ResetAccount;
