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
import { Card } from "../../../../styles - global/cards/CardHome";
import GetAdminRewards from "../../../../components/rewards/reward - get/GetAdminRewards";
import GetHabits from "../../../../components/habits/habit - get/GetHabits";
import { HabitsMobile } from "../../Home.styles";

const HomeAdminHabits = () => {
  let { userId } = useParams();

  return (
    <ContentLayout>
      <MobileWHeight>
        <InnerContentLayout2>
          <Welcome />
          <CardContentMobile>
            <Calender />
            <HomeNavigation />

            <HabitsMobile>
              <div className="admin-habit-container">
                <div>
                  <h3>Rewards</h3>
                  <Card>
                    <div className="habit-container">
                      <GetAdminRewards />
                    </div>
                  </Card>
                </div>

                <div>
                  <h3>Habits</h3>
                  <Card>
                    <div className="habit-container">
                      <GetHabits role="admin" />
                    </div>
                  </Card>
                </div>
              </div>
            </HabitsMobile>
          </CardContentMobile>
        </InnerContentLayout2>
      </MobileWHeight>
    </ContentLayout>
  );
};

export default HomeAdminHabits;
