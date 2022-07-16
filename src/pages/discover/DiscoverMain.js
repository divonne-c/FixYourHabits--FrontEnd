import DiscoverNavigation from "../../components/navigations/DiscoverNavigation";
import DiscoverMainContent from "./DiscoverMainContent";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../styles - global/global/LayoutStyles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";

const DiscoverMain = () => {
  return (
    <ContentLayout>
      <InnerContentLayout2>
        <DiscoverNavigation />

        {/*------- Desktop --------*/}
        <DesktopWHeight>
          <DiscoverMainContent />
        </DesktopWHeight>

        {/*------- Mobile --------*/}
        <MobileWHeight>
          <CardContentMobile>
            <DiscoverMainContent />
          </CardContentMobile>
        </MobileWHeight>
      </InnerContentLayout2>
    </ContentLayout>
  );
};

export default DiscoverMain;
