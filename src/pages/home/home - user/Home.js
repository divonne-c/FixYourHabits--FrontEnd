import React, { useState } from "react";
import {
  ContentLayout,
  InnerContentLayout3,
} from "../../../styles - global/global/LayoutStyles";
import { useParams } from "react-router-dom";
import { ButtonContainer, Container, Main, Sidebar } from "../Home.styles";
import { Desktop } from "../../../styles - global/media/MediaQueryDisplay";
import Welcome from "../../../components/welcome/Welcome";
import Calender from "../../../components/calenders/calender - content/Calender";
import GetHabits from "../../../components/habits/habit - get/GetHabits";
import { Card } from "../../../styles - global/cards/CardHome";
import GetUserRewards from "../../../components/rewards/reward - get/GetUserRewards";

const Home = () => {
  const [sortHabits, setSortHabits] = useState({
    todo: true,
    completed: false,
  });
  let { userId } = useParams();

  return (
    <ContentLayout>
      <Desktop>
        <InnerContentLayout3>
          {/*--------------- MAIN --------------*/}
          <Main>
            <Welcome />
            <Calender />

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

          {/*--------------- SIDEBAR --------------*/}
          <Sidebar>
            <GetUserRewards />
          </Sidebar>
        </InnerContentLayout3>
      </Desktop>
    </ContentLayout>
  );
};

export default Home;
