import { useParams } from "react-router-dom";
import HomeNavigation from "../../../../components/navigations/HomeNavigation";
import Calender from "../../../../components/calender/Calender";
import Stats from "../../../../components/stats/Stats";
import GetUserRewards from "../../../../components/rewards/reward - get/GetUserRewards";
import Welcome from "../../../../components/welcome/Welcome";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../../../styles - global/global/LayoutStyles";
import { MobileWHeight } from "../../../../styles - global/global/MediaQueryDisplay";
import { CardContentMobile } from "../../../../styles - global/cards/CardContentMobile";

const HomeScores = () => {
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

            {/*Stats*/}
            <Stats />

            {/*Rewards*/}
            <GetUserRewards />
          </CardContentMobile>
        </InnerContentLayout2>
      </MobileWHeight>
    </ContentLayout>
  );
};

export default HomeScores;
