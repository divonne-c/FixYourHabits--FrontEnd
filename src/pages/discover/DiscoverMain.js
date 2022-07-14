import React from "react";
import DiscoverNavigation from "../../components/navigations/DiscoverNavigation";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../styles - global/global/LayoutStyles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import { DiscoverStyles, DiscoverStylesMobile } from "./Discover.styles";

const DiscoverMain = () => {
  return (
    <ContentLayout>
      <InnerContentLayout2>
        <DiscoverNavigation />

        {/*------- DesktopWHeight --------*/}
        <DesktopWHeight>
          <DiscoverStyles>
            <p>Discover main content</p>
          </DiscoverStyles>
        </DesktopWHeight>

        {/*------- MobileWHeight --------*/}
        <MobileWHeight>
          <DiscoverStylesMobile>
            <CardContentMobile>
              <p>Discover main content mobile</p>
            </CardContentMobile>
          </DiscoverStylesMobile>
        </MobileWHeight>
      </InnerContentLayout2>
    </ContentLayout>
  );
};

export default DiscoverMain;
