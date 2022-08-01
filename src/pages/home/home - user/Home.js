import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Welcome from "../../../components/welcome/Welcome";
import Calender from "../../../components/calender/Calender";
import GetHabits from "../../../components/habits/habit - get/GetHabits";
import GetUserRewards from "../../../components/rewards/reward - get/GetUserRewards";
import Stats from "../../../components/stats/stats/Stats";
import {
  ContentLayout,
  InnerContentLayout3,
} from "../../../globalstyles/LayoutStyles";
import { ButtonContainer, Container, Main, Sidebar } from "../Home.styles";
import { DesktopWHeight } from "../../../globalstyles/MediaQueryDisplay";
import { Card } from "../../../globalstyles/CardHome";

const Home = () => {
  const [sortHabits, setSortHabits] = useState({
    todo: true,
    completed: false,
  });
  let { userId } = useParams();

  return (
    <ContentLayout>
      <DesktopWHeight>
        <InnerContentLayout3>
          {/*----- MAIN -----*/}
          <Main>
            {/*WELCOME*/}
            <Welcome />

            {/*CALENDER*/}
            <Calender />

            {/*HABITS*/}
            <div>
              <Container>
                <h2>Habits</h2>
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
              </Container>

              <Card>
                <div className="habit-container">
                  <GetHabits role="user" sortHabits={sortHabits} />
                </div>
              </Card>
            </div>
          </Main>

          {/*----- SIDEBAR -----*/}
          <Sidebar>
            {/*STATS*/}
            <Stats />

            {/*REWARDS*/}
            <GetUserRewards />
          </Sidebar>
        </InnerContentLayout3>
      </DesktopWHeight>
    </ContentLayout>
  );
};

export default Home;
