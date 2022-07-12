import React, { useState } from "react";
import {
  ContentLayout,
  InnerContentLayout2,
  InnerContentLayout3,
} from "../../styles - global/global/LayoutStyles";
import DiscoverNavigation from "../../components/navigations/DiscoverNavigation";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import { Desktop, Mobile } from "../../styles - global/media/MediaQueryDisplay";
import { DiscoverStyles, DiscoverStylesMobile } from "./Discover.styles";

const DiscoverAll = () => {
  return (
    <ContentLayout>
      <InnerContentLayout2>
        <DiscoverNavigation />

        {/*------- Desktop --------*/}
        <Desktop>
          <DiscoverStyles>
            <InnerContentLayout3>
              <p>Discover all</p>
            </InnerContentLayout3>
          </DiscoverStyles>
        </Desktop>

        {/*------- Mobile --------*/}
        <Mobile>
          <DiscoverStylesMobile>
            <CardContentMobile>
              <p>Discover all</p>
            </CardContentMobile>
          </DiscoverStylesMobile>
        </Mobile>
      </InnerContentLayout2>
    </ContentLayout>
  );
};

export default DiscoverAll;
