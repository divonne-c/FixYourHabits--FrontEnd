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

const HomeScores = () => {
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
          </CardContentMobile>
        </InnerContentLayout2>
      </Mobile>
    </ContentLayout>
  );
};

export default HomeScores;
