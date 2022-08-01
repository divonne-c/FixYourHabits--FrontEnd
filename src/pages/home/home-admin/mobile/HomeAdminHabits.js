import { useParams } from "react-router-dom";
import Welcome from "../../../../components/welcome/Welcome";
import HomeNavigation from "../../../../components/navigations/HomeNavigation";
import Calender from "../../../../components/calender/Calender";
import GetAdminRewards from "../../../../components/rewards/reward - get/GetAdminRewards";
import GetHabits from "../../../../components/habits/habit - get/GetHabits";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../../../globalstyles/LayoutStyles";
import { MobileWHeight } from "../../../../globalstyles/MediaQueryDisplay";
import { CardContentMobile } from "../../../../globalstyles/CardContentMobile";
import { Card } from "../../../../globalstyles/CardHome";
import { HabitsMobile } from "../../Home.styles";

const HomeAdminHabits = () => {
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

            {/*HABITS & REWARDS*/}
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
