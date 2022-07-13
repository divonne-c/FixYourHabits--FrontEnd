import React from "react";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import HelpNavigation from "../../components/navigations/HelpNavigation";
import { HelpStyles, HelpStylesMobile } from "./Help.styles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";

const HelpContact = () => {
  return (
    <ContentLayout>
      <InnerContentLayout>
        <HelpNavigation />

        {/*------- DesktopWHeight --------*/}
        <DesktopWHeight>
          <HelpStyles>
            <p>Help contact content</p>
          </HelpStyles>
        </DesktopWHeight>

        {/*------- MobileWHeight --------*/}
        <MobileWHeight>
          <HelpStylesMobile>
            <CardContentMobile>
              <p>Help contact content mobile</p>
            </CardContentMobile>
          </HelpStylesMobile>
        </MobileWHeight>
      </InnerContentLayout>
    </ContentLayout>
  );
};

export default HelpContact;
