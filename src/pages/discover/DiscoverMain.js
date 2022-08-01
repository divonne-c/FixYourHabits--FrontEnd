import DiscoverNavigation from "../../components/navigations/DiscoverNavigation";
import DiscoverMainContent from "./DiscoverMainContent";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../globalstyles/LayoutStyles";
import { CardContentMobile } from "../../globalstyles/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../globalstyles/MediaQueryDisplay";

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
