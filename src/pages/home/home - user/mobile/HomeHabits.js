import React, { useState } from "react";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../../../styles - global/global/LayoutStyles";
import { MobileWHeight } from "../../../../styles - global/global/MediaQueryDisplay";
import { useParams } from "react-router-dom";
import Welcome from "../../../../components/welcome/Welcome";
import { CardContentMobile } from "../../../../styles - global/cards/CardContentMobile";
import HomeNavigation from "../../../../components/navigations/HomeNavigation";
import Calender from "../../../../components/calender/Calender";
import { ButtonContainer, HabitsMobile } from "../../Home.styles";
import GetHabits from "../../../../components/habits/habit - get/GetHabits";

const HomeHabits = () => {
  const [sortHabits, setSortHabits] = useState({
    todo: true,
    completed: false,
  });
  let { userId } = useParams();

  return (
    <ContentLayout>
      <MobileWHeight>
        <InnerContentLayout2>
          {/*Welcome*/}
          <Welcome />

          <CardContentMobile>
            {/*Calender*/}
            <Calender />

            {/*Navigation*/}
            <HomeNavigation />

            {/*------ Habits ------*/}
            <HabitsMobile>
              <div className="button-container">
                <ButtonContainer>
                  <button
                    className={sortHabits.todo ? "active" : ""}
                    onClick={() => {
                      setSortHabits({
                        ...sortHabits,
                        todo: true,
                        completed: false,
                      });
                    }}
                  >
                    To Do
                  </button>
                  <button
                    className={sortHabits.completed ? "active" : ""}
                    onClick={() => {
                      setSortHabits({
                        ...sortHabits,
                        todo: false,
                        completed: true,
                      });
                    }}
                  >
                    Complete
                  </button>
                </ButtonContainer>
              </div>

              <div className="habit-container">
                <GetHabits role="user" sortHabits={sortHabits} />
              </div>
            </HabitsMobile>
          </CardContentMobile>
        </InnerContentLayout2>
      </MobileWHeight>
    </ContentLayout>
  );
};

export default HomeHabits;
