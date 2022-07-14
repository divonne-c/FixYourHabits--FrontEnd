import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import habitColorFunction from "../../../helpers/habitcolors";
import habitLogoFunction from "../../../helpers/habitlogos";
import { Element } from "../../habit - reward/HabitAndReward.styles";
import { HabitColorStyle } from "../habit - get/GetHabits.styles";
import AddAdminHabit from "../habit - add discover/AddAdminHabit";
import { Container } from "./GetFilteredHabits.styles";
import ModalSmall from "../../modals/modal - small/ModalSmall";
import {
  ButtonFourth,
  ButtonSecondary,
} from "../../../styles - global/global/ButtonStyles";

const GetFilteredHabits = ({ habits, setHabits, filteredHabits }) => {
  const [showModal, toggleShowModal] = useState(false);
  const { auth, renderData } = useContext(AuthContext);

  const showModalHandler = () => {
    toggleShowModal(!showModal);
  };

  useEffect(() => {
    async function getAdminData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`http://localhost:8080/adminhabits`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setHabits(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    auth.isAuth && getAdminData();
  }, [renderData]);

  return (
    <Container>
      {habits &&
        filteredHabits &&
        filteredHabits.map((habit) => {
          const habitColor = habitColorFunction(habit.type);
          const habitLogo = habitLogoFunction(habit.type);

          return (
            <div key={habit.id}>
              <HabitColorStyle>
                <div className={habitColor}>
                  <div className="discover">
                    <Element>
                      <span
                        className={`material-symbols-outlined ${habitColor}`}
                      >
                        {habitLogo}
                      </span>
                      <h4>{habit.name}</h4>
                      <p>{habit.description}</p>

                      {/*{auth.isAuth && auth.user.role === "ROLE_USER" && (*/}
                      {/*  <div className="complete-btn large-element">*/}
                      {/*    <AddAdminHabit habit={habit} />*/}
                      {/*  </div>*/}
                      {/*)}*/}

                      {auth.isAuth && auth.user.role === "ROLE_USER" && (
                        <div className="complete-btn large-element">
                          <ButtonSecondary onClick={showModalHandler}>
                            Add Habit
                          </ButtonSecondary>
                        </div>
                      )}
                      {showModal && (
                        <ModalSmall>
                          <h1>{habit.name}</h1>
                        </ModalSmall>
                      )}
                      {/*{showModal && (*/}
                      {/*  <ModalSmall>*/}
                      {/*    <h4>Are you sure you want to add this habit?</h4>*/}
                      {/*    <div>*/}
                      {/*      <ButtonFourth*/}
                      {/*        type="button"*/}
                      {/*        onClick={showModalHandler}*/}
                      {/*      >*/}
                      {/*        Cancel*/}
                      {/*      </ButtonFourth>*/}
                      {/*      <AddAdminHabit*/}
                      {/*        habit={habit}*/}
                      {/*        toggleShowModal={toggleShowModal}*/}
                      {/*        showModal={showModal}*/}
                      {/*      />*/}
                      {/*    </div>*/}
                      {/*  </ModalSmall>*/}
                      {/*)}*/}
                    </Element>
                  </div>
                </div>
              </HabitColorStyle>
            </div>
          );
        })}
    </Container>
  );
};

export default GetFilteredHabits;
