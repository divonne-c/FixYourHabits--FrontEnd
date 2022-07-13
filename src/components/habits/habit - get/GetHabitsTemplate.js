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
  DesktopWHeight,
  MobileWHeight,
} from "../../../styles - global/global/MediaQueryDisplay";

const GetHabitsTemplate = ({ habitColor, habitLogo, habit }) => {
  const { auth } = useContext(AuthContext);

  return (
    <HabitColorStyle>
      <DesktopWHeight>
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
      </DesktopWHeight>

      <MobileWHeight>
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
      </MobileWHeight>
    </HabitColorStyle>
  );
};

export default GetHabitsTemplate;
