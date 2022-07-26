import React, { useContext } from "react";
import AddHabitModal from "../habit - add discover/AddHabitModal";
import {
  Desktop,
  Mobile,
} from "../../../styles - global/global/MediaQueryDisplay";
import { HabitColorStyle } from "./GetHabits.styles";
import { ElementMobile } from "../habit - filter/HabitTypeFilter.styles";
import { AuthContext } from "../../../context/AuthContext";
import { DiscoverElement } from "../../habit - reward/HabitAndReward.styles";

const GetDiscoverHabitTemplate = ({ habit, habitColor, habitLogo }) => {
  const { auth } = useContext(AuthContext);

  return (
    <HabitColorStyle>
      {/*----- DESKTOP -----*/}
      <Desktop>
        <div className={habitColor}>
          <div className="discover">
            <DiscoverElement>
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
            </DiscoverElement>
          </div>
        </div>
      </Desktop>

      {/*----- MOBILE -----*/}
      <Mobile>
        <div className={habitColor}>
          <div className="discover-main-element discover-all-element">
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
        </div>
      </Mobile>
    </HabitColorStyle>
  );
};

export default GetDiscoverHabitTemplate;
