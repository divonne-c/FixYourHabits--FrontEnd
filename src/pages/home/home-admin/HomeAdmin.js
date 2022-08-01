import { useParams } from "react-router-dom";
import Welcome from "../../../components/welcome/Welcome";
import Calender from "../../../components/calender/Calender";
import GetHabits from "../../../components/habits/habit - get/GetHabits";
import CreateHabit from "../../../components/habits/habit - create/CreateHabit";
import GetAdminRewards from "../../../components/rewards/reward - get/GetAdminRewards";
import CreateReward from "../../../components/rewards/reward - create/CreateReward";
import StatsAdmin from "../../../components/stats/stats/StatsAdmin";
import {
  ContentLayout,
  InnerContentLayout3,
} from "../../../globalstyles/LayoutStyles";
import { Main, Sidebar } from "../Home.styles";
import { Card } from "../../../globalstyles/CardHome";

const HomeAdmin = () => {
  let { userId } = useParams();

  return (
    <ContentLayout>
      <InnerContentLayout3>
        {/*----- MAIN -----*/}
        <Main>
          {/*WELCOME*/}
          <Welcome />

          {/*CALENDER*/}
          <Calender />

          {/*HABITS & REWARDS*/}
          <div>
            <h2>Rewards</h2>
            <Card>
              <div className="habit-container">
                <GetAdminRewards />
              </div>
            </Card>
          </div>

          <div>
            <h2>Habits</h2>
            <Card>
              <div className="habit-container">
                <GetHabits role="admin" />
              </div>
            </Card>
          </div>
        </Main>

        {/*----- SIDEBAR -----*/}
        <Sidebar>
          {/*STATS*/}
          <StatsAdmin />

          {/*CREATE REWARD BUTTON*/}
          <CreateReward />

          {/*CREATE HABIT BUTTON*/}
          <CreateHabit role="admin" profile="adminProfile">
            Create Habit
          </CreateHabit>
        </Sidebar>
      </InnerContentLayout3>
    </ContentLayout>
  );
};

export default HomeAdmin;
