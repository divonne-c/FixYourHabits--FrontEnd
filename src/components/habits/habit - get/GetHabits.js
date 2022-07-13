import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import habitColorFunction from "../../../helpers/habitcolors";
import habitLogoFunction from "../../../helpers/habitlogos";
import { Container } from "./GetHabits.styles";
import GetHabitsTemplate from "./GetHabitsTemplate";
import { DesktopWHeight } from "../../../styles - global/global/MediaQueryDisplay";
import CreateHabit from "../habit - create/CreateHabit";
import MenuHabit from "../habit - menu/MenuHabit";

const GetHabits = ({ role, sortHabits }) => {
  const [habits, setHabits] = useState([]);
  const { auth, renderData } = useContext(AuthContext);

  useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:8080/${role}profiles/${auth.user.username}/${role}habits`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setHabits(response.data);
      } catch (e) {
        console.error(e);
      }
    }
    auth.isAuth && getData();
  }, [renderData]);

  return (
    <Container>
      {/*----- GET HABITS ------*/}
      {habits &&
        habits.map((habit) => {
          const habitColor = habitColorFunction(habit.type);
          const habitLogo = habitLogoFunction(habit.type);

          {
            /*----- TO DO------*/
          }
          if (
            auth.user.role === "ROLE_USER" &&
            sortHabits.todo === true &&
            habit.completed === false
          ) {
            return (
              <div key={habit.id} className="habit-container-mobile">
                <MenuHabit habit={habit} role={role} />
                <GetHabitsTemplate
                  habit={habit}
                  habitColor={habitColor}
                  habitLogo={habitLogo}
                />
              </div>
            );
          }

          {
            /*----- COMPLETED-----*/
          }
          if (
            auth.user.role === "ROLE_USER" &&
            sortHabits.completed === true &&
            habit.completed === true
          ) {
            return (
              <div key={habit.id} className="habit-container-mobile">
                <MenuHabit habit={habit} role={role} />
                <GetHabitsTemplate
                  habit={habit}
                  habitColor={habitColor}
                  habitLogo={habitLogo}
                />
              </div>
            );
          }

          {
            /*----- ADMIN ------*/
          }
          if (auth.user.role === "ROLE_ADMIN") {
            return (
              <div key={habit.id} className="habit-container-mobile">
                <MenuHabit habit={habit} role={role} />
                <GetHabitsTemplate
                  habit={habit}
                  habitColor={habitColor}
                  habitLogo={habitLogo}
                />
              </div>
            );
          }
        })}

      {/*----- CREATE HABIT BUTTON -----*/}
      <DesktopWHeight>
        {auth.user.role === "ROLE_USER" && sortHabits.todo && (
          <CreateHabit role={role} profile="userProfile" />
        )}
      </DesktopWHeight>
    </Container>
  );
};

export default GetHabits;
