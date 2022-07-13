import React, { useContext } from "react";
import {
  ContainerMobile,
  Habit,
  HabitColorStyle,
  HabitMobile,
} from "./GetHabits.styles";
import CompleteHabit from "../habit - complete button/CompleteHabit";
import { AuthContext } from "../../../context/AuthContext";
import {
  Desktop,
  Mobile,
} from "../../../styles - global/media/MediaQueryDisplay";

const GetHabitsTemplate = ({ habitColor, habitLogo, habit }) => {
  const { auth } = useContext(AuthContext);

  return (
    <HabitColorStyle>
      <Desktop>
        <div className={habitColor}>
          <Habit>
            <span className={`material-symbols-outlined ${habitColor}`}>
              {habitLogo}
            </span>
            <h4>{habit.name}</h4>

            {auth.user.role === "ROLE_USER" && (
              <div className="complete-btn">
                <CompleteHabit habit={habit} />
              </div>
            )}
          </Habit>
        </div>
      </Desktop>

      <Mobile>
        <ContainerMobile>
          <div className={habitColor}>
            <HabitMobile>
              {auth.user.role === "ROLE_USER" && (
                <div className="complete-btn">
                  <CompleteHabit habit={habit} />
                </div>
              )}
              <Habit>
                <span className={`material-symbols-outlined ${habitColor}`}>
                  {habitLogo}
                </span>
                <h4>{habit.name}</h4>
              </Habit>
            </HabitMobile>
          </div>
        </ContainerMobile>
      </Mobile>
    </HabitColorStyle>
  );
};

export default GetHabitsTemplate;
