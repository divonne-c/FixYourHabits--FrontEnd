import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { ButtonThird } from "../../../styles - global/global/ButtonStyles";

const AddAdminHabit = ({ habit, toggleShowModal, showModal }) => {
  const { auth, notifications, setNotifications } = useContext(AuthContext);

  const addAdminHabitHandler = () => {
    const data = {
      name: habit.name,
      type: habit.type,
      completed: false,
      userProfile: {
        id: auth.user.id,
      },
    };

    async function postData() {
      const token = localStorage.getItem("token");
      try {
        await axios.post(`http://localhost:8080/userhabits`, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setNotifications([
          ...notifications,
          {
            type: "success",
            message:
              "You successfully added the habit. You can find it in Home.",
          },
        ]);
      } catch (error) {
        console.error(error);
        setNotifications([
          ...notifications,
          {
            type: "error",
            message:
              "Something went wrong with adding the habit. Please try again.",
          },
        ]);
      }
    }
    auth.isAuth && auth.user.role === "ROLE_USER" && postData();
    toggleShowModal(!showModal);
  };
  return (
    <ButtonThird type="submit" onClick={addAdminHabitHandler}>
      Add habit
    </ButtonThird>
  );
};

export default AddAdminHabit;
