import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import Modal from "../../modals/modal - normal/Modal";
import FormHabit from "../habit - form/FormHabit";
import { Form } from "../habit - form/FormHabit.styles";
import { ButtonContainer } from "../../../pages/home/Home.styles";
import { ButtonSecondary } from "../../../styles - global/global/ButtonStyles";
import { ButtonAddHabit } from "./CreateHabit.styles";
import TotalUserHabits from "../habit - total habits user/TotalUserHabits";

const CreateHabit = ({ role, profile }) => {
  const [nameHabit, setNameHabit] = useState("");
  const [typehabit, setTypehabit] = useState("");
  const [description, setDescription] = useState("");
  const { auth, renderData, setRenderData } = useContext(AuthContext);
  const [showMenu, toggleShowMenu] = useState(false);

  const show = () => {
    toggleShowMenu(!showMenu);
  };

  const nameChangeHandler = (event) => {
    setNameHabit(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setTypehabit(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const updateHabitHandler = async (e) => {
    e.preventDefault();

    const data = {
      name: nameHabit,
      type: typehabit,
      completed: false,
      description: description,
      [profile]: {
        id: auth.user.id,
      },
    };

    const token = localStorage.getItem("token");

    try {
      await axios
        .post(`http://localhost:8080/${role}habits/`, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => console.log(response));

      setRenderData(!renderData);
    } catch (error) {
      console.log(error);
    }

    toggleShowMenu(!showMenu);
    setNameHabit("");
    setTypehabit("");
    setDescription("");
  };

  return (
    <div>
      <ButtonAddHabit onClick={show}>
        <span>+</span>
      </ButtonAddHabit>
      {showMenu && (
        <Modal title="Create Habit">
          <Form onSubmit={updateHabitHandler}>
            <FormHabit
              nameHabit={nameHabit}
              typeChangeHandler={typeChangeHandler}
              nameChangeHandler={nameChangeHandler}
              descriptionChangeHandler={descriptionChangeHandler}
              description={description}
            />
            {/* ----- buttons -----*/}
            <ButtonContainer>
              <ButtonSecondary type="button" onClick={show}>
                Cancel
              </ButtonSecondary>
              {auth.user.role === "ROLE_USER" ? (
                <TotalUserHabits />
              ) : (
                <button type="submit">Save</button>
              )}
            </ButtonContainer>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default CreateHabit;
