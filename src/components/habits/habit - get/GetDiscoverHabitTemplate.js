import React, { useContext } from "react";
import {
  Desktop,
  Mobile,
} from "../../../styles - global/global/MediaQueryDisplay";
import { HabitColorStyle } from "./GetHabits.styles";
import {
  Element,
  ElementMobile,
} from "../habit - filter/GetFilteredHabits.styles";
import AddHabitModal from "../habit - add discover/AddHabitModal";
import { AuthContext } from "../../../context/AuthContext";

const GetDiscoverHabitTemplate = ({ habit, habitColor, habitLogo }) => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <Desktop>
        <HabitColorStyle>
          <div className={habitColor}>
            <div className="discover">
              <Element>
                <span className={`material-symbols-outlined ${habitColor}`}>
                  {habitLogo}
                </span>

                <h4>{habit.name}</h4>
                <p>{habit.description}</p>

                {auth.isAuth && auth.user.role === "ROLE_USER" && (
                  <div className="complete-btn large-element">
                    <AddHabitModal habit={habit} />
                  </div>
                )}
              </Element>
            </div>
          </div>
        </HabitColorStyle>
      </Desktop>

      <Mobile>
        <HabitColorStyle>
          <div className={habitColor}>
            <ElementMobile>
              <div className="name-habit">
                <span className={`material-symbols-outlined ${habitColor}`}>
                  {habitLogo}
                </span>
                <h4>{habit.name}</h4>
                {auth.isAuth && auth.user.role === "ROLE_USER" && (
                  <div className="complete-btn-mobile">
                    <AddHabitModal habit={habit} habitColor={habitColor} />
                  </div>
                )}
              </div>
              <p>{habit.description}</p>
            </ElementMobile>
          </div>
        </HabitColorStyle>
      </Mobile>
    </>
  );
};

export default GetDiscoverHabitTemplate;
