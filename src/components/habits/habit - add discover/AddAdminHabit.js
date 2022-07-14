import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { ButtonThird } from "../../../styles - global/global/ButtonStyles";

const AddAdminHabit = ({ habit, toggleShowModal, showModal }) => {
  const { auth, notifications, setNotifications } = useContext(AuthContext);

  console.log(habit);

  const addAdminHabitHandler = () => {
    const data = {
      name: habit.name,
      type: habit.type,
      completed: false,
      userProfile: {
        id: auth.user.id,
      },
    };

    console.log(data);

    async function postData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.post(
          `http://localhost:8080/userhabits`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

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
        setNotifications([...notifications, { type: "error", message: error }]);
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
