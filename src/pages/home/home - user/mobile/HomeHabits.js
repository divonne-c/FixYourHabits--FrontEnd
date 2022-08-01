import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Welcome from "../../../../components/welcome/Welcome";
import GetHabits from "../../../../components/habits/habit - get/GetHabits";
import HomeNavigation from "../../../../components/navigations/HomeNavigation";
import Calender from "../../../../components/calender/Calender";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../../../globalstyles/LayoutStyles";
import { MobileWHeight } from "../../../../globalstyles/MediaQueryDisplay";
import { CardContentMobile } from "../../../../globalstyles/CardContentMobile";
import { ButtonContainer, HabitsMobile } from "../../Home.styles";

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
          {/*WELCOME*/}
          <Welcome />

          <CardContentMobile>
            {/*CALENDER*/}
            <Calender />

            {/*NAVIGATION*/}
            <HomeNavigation />

            {/*HABITS*/}
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
