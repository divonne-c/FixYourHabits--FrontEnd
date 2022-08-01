import { useParams } from "react-router-dom";
import Welcome from "../../../../components/welcome/Welcome";
import HomeNavigation from "../../../../components/navigations/HomeNavigation";
import Calender from "../../../../components/calender/Calender";
import StatsAdmin from "../../../../components/stats/stats/StatsAdmin";
import CreateReward from "../../../../components/rewards/reward - create/CreateReward";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../../../globalstyles/LayoutStyles";
import { MobileWHeight } from "../../../../globalstyles/MediaQueryDisplay";
import { CardContentMobile } from "../../../../globalstyles/CardContentMobile";

const HomeAdminScores = () => {
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

            {/*STATS*/}
            <StatsAdmin />

            {/*CREATE REWARD BUTTON*/}
            <CreateReward />
          </CardContentMobile>
        </InnerContentLayout2>
      </MobileWHeight>
    </ContentLayout>
  );
};

export default HomeAdminScores;
