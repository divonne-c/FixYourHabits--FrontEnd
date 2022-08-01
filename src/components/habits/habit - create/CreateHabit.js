import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import Modal from "../../modals/modal - normal/Modal";
import HabitForm from "../../forms/HabitForm";
import TotalUserHabitsButton from "../habit - total habits user/TotalUserHabitsButton";
import CreateAdminElementButton from "../../habit - reward/create/CreateAdminElementButton";
import { ButtonFourth, ButtonThird } from "../../../globalstyles/ButtonStyles";
import { CreateHabitButton } from "./CreateHabit.styles";
import {
  Desktop,
  MobileWHeight,
} from "../../../globalstyles/MediaQueryDisplay";
import { Container } from "../../modals/modal - buttons/ModalButtons.styles";

const CreateHabit = ({ role, profile }) => {
  const [habit, setHabit] = useState({
    name: "",
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
    setHabit({ ...habit, [e.target.name]: e.target.value });
  };

  const createHabitHandler = async (e) => {
    e.preventDefault();

    const data = {
      name: habit.name,
      type: habit.type,
      completed: false,
      description: habit.description,
      [profile]: {
        id: auth.user.id,
      },
    };

    const token = localStorage.getItem("token");

    try {
      await axios.post(`http://localhost:8080/${role}habits/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setRenderData(!renderData);
      setNotifications([
        ...notifications,
        { type: "success", message: "You successfully created a new habit" },
      ]);
    } catch (error) {
      console.log(error);
      setNotifications([
        ...notifications,
        {
          type: "error",
          message:
            "Something went wrong with creating the habit. Please try again.",
        },
      ]);
    }

    toggleShowMenu(!showMenu);
    setHabit({
      name: "",
      type: "",
      description: "",
    });
  };

  return (
    <>
      {/*----- CREATE HABIT BUTTON -----*/}
      <Desktop>
        {auth.isAuth && auth.user.role === "ROLE_USER" && (
          <CreateHabitButton onClick={show}>
            <span>+</span>
          </CreateHabitButton>
        )}

        {auth.isAuth && auth.user.role === "ROLE_ADMIN" && (
          <CreateAdminElementButton show={show} name="Habit" />
        )}
      </Desktop>

      <MobileWHeight>
        {auth.isAuth ? (
          <CreateHabitButton onClick={show}>
            <span>+</span>
          </CreateHabitButton>
        ) : (
          <CreateHabitButton>
            <span>+</span>
          </CreateHabitButton>
        )}
      </MobileWHeight>

      {/*----- MODAL -----*/}
      {showMenu && (
        <Modal title="Create Habit">
          {/*FORM*/}
          <form onSubmit={createHabitHandler}>
            <HabitForm habit={habit} handler={onChangeHandler} />

            {/*MODAL BUTTONS*/}
            <Container>
              <ButtonFourth type="button" onClick={show}>
                Cancel
              </ButtonFourth>
              {auth.user.role === "ROLE_USER" ? (
                <TotalUserHabitsButton />
              ) : (
                <ButtonThird type="submit">Save</ButtonThird>
              )}
            </Container>
          </form>
        </Modal>
      )}
    </>
  );
};

export default CreateHabit;
