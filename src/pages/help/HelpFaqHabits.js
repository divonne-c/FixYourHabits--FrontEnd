import React from "react";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import HelpNavigation from "../../components/navigations/HelpNavigation";
import { HelpFaqStyles, HelpStyles, HelpStylesMobile } from "./Help.styles";
import FaqNavigation from "../../components/navigations/FaqNavigation";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import { Desktop, Mobile } from "../../styles - global/media/MediaQueryDisplay";

const HelpFaqHabits = () => {
  return (
    <ContentLayout>
      <InnerContentLayout>
        <HelpNavigation />

        {/*------- Desktop --------*/}
        <Desktop>
          <HelpFaqStyles>
            <FaqNavigation />
            <p>help faq habits content</p>
          </HelpFaqStyles>
        </Desktop>

        {/*------- Mobile --------*/}
        <Mobile>
          <HelpStylesMobile>
            <CardContentMobile>
              <FaqNavigation />
              <p>help faq habits content</p>
            </CardContentMobile>
          </HelpStylesMobile>
        </Mobile>
      </InnerContentLayout>
    </ContentLayout>
  );
};

export default HelpFaqHabits;
