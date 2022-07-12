import React from "react";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import HelpNavigation from "../../components/navigations/HelpNavigation";
import { HelpStyles, HelpStylesMobile } from "./Help.styles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import { Desktop, Mobile } from "../../styles - global/media/MediaQueryDisplay";

const HelpContact = () => {
  return (
    <ContentLayout>
      <InnerContentLayout>
        <HelpNavigation />

        {/*------- Desktop --------*/}
        <Desktop>
          <HelpStyles>
            <p>Help contact content</p>
          </HelpStyles>
        </Desktop>

        {/*------- Mobile --------*/}
        <Mobile>
          <HelpStylesMobile>
            <CardContentMobile>
              <p>Help contact content mobile</p>
            </CardContentMobile>
          </HelpStylesMobile>
        </Mobile>
      </InnerContentLayout>
    </ContentLayout>
  );
};

export default HelpContact;
