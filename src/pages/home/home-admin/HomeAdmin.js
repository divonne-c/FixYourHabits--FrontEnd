import React, { useContext, useEffect, useState } from "react";
import {
  ContentLayout,
  InnerContentLayout3,
} from "../../../styles - global/global/LayoutStyles";
import { useParams } from "react-router-dom";
import { Main, Sidebar } from "../Home.styles";
import Welcome from "../../../components/welcome/Welcome";
import Calender from "../../../components/calender/Calender";
import GetHabits from "../../../components/habits/habit - get/GetHabits";
import { Card } from "../../../styles - global/cards/CardHome";
import CreateHabit from "../../../components/habits/habit - create/CreateHabit";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import GetAdminRewards from "../../../components/rewards/reward - get/GetAdminRewards";
import CreateReward from "../../../components/rewards/reward - create/CreateReward";
import StatsAdmin from "../../../components/stats/stats - admin /StatsAdmin";

const HomeAdmin = () => {
  const [adminProfile, setAdminProfile] = useState({});
  const { auth, toggleAuth, renderData } = useContext(AuthContext);
  let { userId } = useParams();

  useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:8080/adminprofiles/${auth.user.username}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toggleAuth({
          ...auth,
          user: {
            username: response.data.user.username,
            role: response.data.user.authorities[0].authority,
            id: response.data.id,
          },
        });

        setAdminProfile(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    auth.isAuth && auth.user.role !== "ROLE_USER" && getData();
  }, [renderData]);

  return (
    <ContentLayout>
      <InnerContentLayout3>
        {/*--------------- MAIN --------------*/}
        <Main>
          <Welcome />
          <Calender />

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

        {/*--------------- SIDEBAR --------------*/}
        <Sidebar>
          <StatsAdmin />
        </Sidebar>
      </InnerContentLayout3>
    </ContentLayout>
  );
};

export default HomeAdmin;
