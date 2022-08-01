import React, { useContext } from "react";
import CompleteHabit from "../habit - complete button/CompleteHabit";
import {
  ContainerMobile,
  HabitColorStyle,
  HabitMobile,
} from "./GetHabits.styles";
import { AuthContext } from "../../../context/AuthContext";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../../globalstyles/MediaQueryDisplay";
import { Element } from "../../habit - reward/HabitAndReward.styles";

const GetHabitsTemplate = ({ habitColor, habitLogo, habit }) => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <HabitColorStyle>
        {/*----- DESKTOP ------*/}
        <DesktopWHeight>
          <div className={habitColor}>
            <Element>
              <span className={`material-symbols-outlined ${habitColor}`}>
                {habitLogo}
              </span>
              <h4>{habit.name}</h4>

              {auth.user.role === "ROLE_USER" && (
                <div className="complete-btn">
                  <CompleteHabit habit={habit} />
                </div>
              )}
            </Element>
          </div>
        </DesktopWHeight>

        {/*----- MOBILE ------*/}
        <MobileWHeight>
          <ContainerMobile>
            <div className={habitColor}>
              <HabitMobile>
                {auth.user.role === "ROLE_USER" && (
                  <div className="complete-btn">
                    <CompleteHabit habit={habit} />
                  </div>
                )}
                <Element>
                  <span className={`material-symbols-outlined ${habitColor}`}>
                    {habitLogo}
                  </span>
                  <h4>{habit.name}</h4>
                </Element>
              </HabitMobile>
            </div>
          </ContainerMobile>
        </MobileWHeight>
      </HabitColorStyle>
    </>
  );
};

export default GetHabitsTemplate;
