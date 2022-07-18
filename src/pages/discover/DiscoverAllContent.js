import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import habitColorFunction from "../../helpers/habitcolors";
import habitLogoFunction from "../../helpers/habitlogos";
import { Container } from "../../components/habits/habit - filter/GetFilteredHabits.styles";
import GetDiscoverHabitTemplate from "../../components/habits/habit - get/GetDiscoverHabitTemplate";

const DiscoverAllContent = ({ habits, setHabits, filteredHabits }) => {
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
        <div className="discover-all">
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
        </div>
      </Container>
    </>
  );
};

export default DiscoverAllContent;
