import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import habitColorFunction from "../../../helpers/habitcolors";
import habitLogoFunction from "../../../helpers/habitlogos";
import { Container } from "./GetFilteredHabits.styles";
import GetDiscoverHabitTemplate from "../habit - get/GetDiscoverHabitTemplate";

const GetFilteredHabits = ({ habits, setHabits, filteredHabits }) => {
  const { auth, renderData } = useContext(AuthContext);

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
    <>
      <Container>
        {habits &&
          filteredHabits &&
          filteredHabits.map((habit) => {
            const habitColor = habitColorFunction(habit.type);
            const habitLogo = habitLogoFunction(habit.type);

            return (
              <div key={habit.id}>
                <GetDiscoverHabitTemplate
                  habit={habit}
                  habitLogo={habitLogo}
                  habitColor={habitColor}
                />
              </div>
            );
          })}
      </Container>
    </>
  );
};

export default GetFilteredHabits;
