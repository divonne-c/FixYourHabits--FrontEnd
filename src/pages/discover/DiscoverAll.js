import React, { useState } from "react";
import {
  ContentLayout,
  InnerContentLayout2,
  InnerContentLayout3,
} from "../../styles - global/global/LayoutStyles";
import DiscoverNavigation from "../../components/navigations/DiscoverNavigation";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import { DiscoverStyles, DiscoverStylesMobile } from "./Discover.styles";

const DiscoverAll = () => {
  return (
    <ContentLayout>
      <InnerContentLayout2>
        <DiscoverNavigation />

        {/*------- DesktopWHeight --------*/}
        <DesktopWHeight>
          <DiscoverStyles>
            <InnerContentLayout3>
              <p>Discover all</p>
            </InnerContentLayout3>
          </DiscoverStyles>
        </DesktopWHeight>

        {/*------- MobileWHeight --------*/}
        <MobileWHeight>
          <DiscoverStylesMobile>
            <CardContentMobile>
              <p>Discover all</p>
            </CardContentMobile>
          </DiscoverStylesMobile>
        </MobileWHeight>
      </InnerContentLayout2>
    </ContentLayout>
  );
};

export default DiscoverAll;
