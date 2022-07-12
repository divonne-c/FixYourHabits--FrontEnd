import React from "react";
import DiscoverNavigation from "../../components/navigations/DiscoverNavigation";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../styles - global/global/LayoutStyles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import { Desktop, Mobile } from "../../styles - global/media/MediaQueryDisplay";
import { DiscoverStyles, DiscoverStylesMobile } from "./Discover.styles";

const DiscoverMain = () => {
  return (
    <ContentLayout>
      <InnerContentLayout2>
        <DiscoverNavigation />

        {/*------- Desktop --------*/}
        <Desktop>
          <DiscoverStyles>
            <p>Discover main content</p>
          </DiscoverStyles>
        </Desktop>

        {/*------- Mobile --------*/}
        <Mobile>
          <DiscoverStylesMobile>
            <CardContentMobile>
              <p>Discover main content mobile</p>
            </CardContentMobile>
          </DiscoverStylesMobile>
        </Mobile>
      </InnerContentLayout2>
    </ContentLayout>
  );
};

export default DiscoverMain;
