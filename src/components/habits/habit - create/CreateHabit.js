import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import Modal from "../../modals/modal - normal/Modal";
import FormHabit from "../habit - form/FormHabit";
import TotalUserHabitsButton from "../habit - total habits user/TotalUserHabitsButton";
import { Form } from "../habit - form/FormHabit.styles";
import {
  ButtonFourth,
  ButtonThird,
} from "../../../styles - global/global/ButtonStyles";
import {
  CreateAdminHabitButton,
  CreateHabitButton,
} from "./CreateHabit.styles";
import { ModalButtons } from "../../../styles - global/utilities/HabitAndReward.styles";
import {
  DesktopWHeight,
  Desktop,
  MobileWHeight,
} from "../../../styles - global/global/MediaQueryDisplay";

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

  const nameChangeHandler = (event) => {
    setHabit({ ...habit, name: event.target.value });
  };

  const typeChangeHandler = (event) => {
    setHabit({ ...habit, type: event.target.value });
  };

  const descriptionChangeHandler = (event) => {
    setHabit({ ...habit, description: event.target.value });
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
      setNotifications([...notifications, { type: "error", message: error }]);
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
      {/*----- BUTTON -----*/}
      <Desktop>
        {auth.isAuth && auth.user.role === "ROLE_USER" && (
          <CreateHabitButton onClick={show}>
            <span>+</span>
          </CreateHabitButton>
        )}

        {auth.isAuth && auth.user.role === "ROLE_ADMIN" && (
          <CreateAdminHabitButton onClick={show}>
            <div className="container">
              <span className="material-symbols-outlined">add</span>
              <p>Create Habit</p>
            </div>
          </CreateAdminHabitButton>
        )}
      </Desktop>

      <MobileWHeight>
        <CreateHabitButton onClick={show}>
          <span>+</span>
        </CreateHabitButton>
      </MobileWHeight>

      {/*----- MODAL -----*/}
      {showMenu && (
        <Modal title="Create Habit">
          <Form onSubmit={createHabitHandler}>
            {/*FORM*/}
            <FormHabit
              nameHabit={habit.name}
              typeChangeHandler={typeChangeHandler}
              nameChangeHandler={nameChangeHandler}
              descriptionChangeHandler={descriptionChangeHandler}
              description={habit.description}
            />

            {/*MODAL BUTTONS*/}
            <ModalButtons>
              <ButtonFourth type="button" onClick={show}>
                Cancel
              </ButtonFourth>
              {auth.user.role === "ROLE_USER" ? (
                <TotalUserHabitsButton />
              ) : (
                <ButtonThird type="submit">Save</ButtonThird>
              )}
            </ModalButtons>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default CreateHabit;
