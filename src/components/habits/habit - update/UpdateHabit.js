import React, { useContext, useState } from "react";
import { HabitMenuContainer } from "../habit - delete/DeleteHabit.styles";
import { Mobile } from "../../../styles - global/media/MediaQueryDisplay";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import Modal from "../../modals/modal - normal/Modal";
import { ButtonSecondary } from "../../../styles - global/global/ButtonStyles";
import FormHabit from "../habit - form/FormHabit";
import { Form } from "../habit - form/FormHabit.styles";
import { ButtonContainer } from "../../../pages/home/Home.styles";

const UpdateHabit = ({ habit, role, toggleShowMenu, showMenu, show }) => {
  const [nameHabit, setNameHabit] = useState(habit.name);
  const [typehabit, setTypehabit] = useState(habit.type);
  const [description, setDescription] = useState(habit.description);
  const [habitCompleted, toggleHabitCompleted] = useState(habit.completed);
  const [showModal, toggleShowModal] = useState(false);
  const { auth, renderData, setRenderData } = useContext(AuthContext);

  const showModalHandler = () => {
    toggleShowModal(!showModal);
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
      completed: habitCompleted,
      description: description,
    };

    const token = localStorage.getItem("token");

    try {
      await axios
        .put(`http://localhost:8080/${role}habits/${habit.id}`, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((renspons) => console.log(renspons));

      setRenderData(!renderData);
    } catch (error) {
      console.log(error);
    }

    toggleShowModal(!showModal);
    toggleShowMenu(!showMenu);
  };

  return (
    <div>
      <HabitMenuContainer>
        <button onClick={showModalHandler}>
          <span className="container">
            <span className="material-symbols-outlined edit">edit</span>
            <Mobile>
              <p>Edit habit</p>
            </Mobile>
          </span>
        </button>
      </HabitMenuContainer>

      {showModal && (
        <Modal title="Edit Habit">
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
              <button type="submit">Save</button>
            </ButtonContainer>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default UpdateHabit;
