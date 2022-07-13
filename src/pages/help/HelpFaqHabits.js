import React from "react";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import HelpNavigation from "../../components/navigations/HelpNavigation";
import { HelpFaqStyles, HelpStyles, HelpStylesMobile } from "./Help.styles";
import FaqNavigation from "../../components/navigations/FaqNavigation";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";

const HelpFaqHabits = () => {
  return (
    <ContentLayout>
      <InnerContentLayout>
        <HelpNavigation />

        {/*------- DesktopWHeight --------*/}
        <DesktopWHeight>
          <HelpFaqStyles>
            <FaqNavigation />
            <p>help faq habits content</p>
          </HelpFaqStyles>
        </DesktopWHeight>

        {/*------- MobileWHeight --------*/}
        <MobileWHeight>
          <HelpStylesMobile>
            <CardContentMobile>
              <FaqNavigation />
              <p>help faq habits content</p>
            </CardContentMobile>
          </HelpStylesMobile>
        </MobileWHeight>
      </InnerContentLayout>
    </ContentLayout>
  );
};

export default HelpFaqHabits;
