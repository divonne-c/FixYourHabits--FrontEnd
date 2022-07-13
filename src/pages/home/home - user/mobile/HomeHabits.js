import React, { useState } from "react";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../../../styles - global/global/LayoutStyles";
import { Mobile } from "../../../../styles - global/media/MediaQueryDisplay";
import { useParams } from "react-router-dom";
import Welcome from "../../../../components/welcome/Welcome";
import { CardContentMobile } from "../../../../styles - global/cards/CardContentMobile";
import HomeNavigation from "../../../../components/navigations/HomeNavigation";
import Calender from "../../../../components/calenders/calender - content/Calender";
import { ButtonContainer, HabitsMobile } from "../../Home.styles";
import GetHabits from "../../../../components/habits/habit - get/GetHabits";
import { Card } from "../../../../styles - global/cards/CardHome";

const HomeHabits = () => {
  const [sortHabits, setSortHabits] = useState({
    todo: true,
    completed: false,
  });
  let { userId } = useParams();

  return (
    <ContentLayout>
      <Mobile>
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
              <GetHabits role="user" sortHabits={sortHabits} />
            </HabitsMobile>
          </CardContentMobile>
        </InnerContentLayout2>
      </Mobile>
    </ContentLayout>
  );
};

export default HomeHabits;
