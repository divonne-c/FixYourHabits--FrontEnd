import React from "react";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import FaqNavigation from "../../components/navigations/FaqNavigation";
import HelpNavigation from "../../components/navigations/HelpNavigation";
import { HelpFaqStyles, HelpStylesMobile } from "./Help.styles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import { Desktop, Mobile } from "../../styles - global/media/MediaQueryDisplay";

const HelpFaqAccount = () => {
  return (
    <ContentLayout>
      <InnerContentLayout>
        <HelpNavigation />

        {/*------- Desktop --------*/}
        <Desktop>
          <HelpFaqStyles>
            <FaqNavigation />
            <p>help faq account content</p>
          </HelpFaqStyles>
        </Desktop>

        {/*------- Mobile --------*/}
        <Mobile>
          <HelpStylesMobile>
            <CardContentMobile>
              <FaqNavigation />
              <p>help faq account content</p>
            </CardContentMobile>
          </HelpStylesMobile>
        </Mobile>
      </InnerContentLayout>
    </ContentLayout>
  );
};

export default HelpFaqAccount;
