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
import FaqContent from "./FaqContent";

const HelpFaqHabits = () => {
  return (
    <ContentLayout>
      <InnerContentLayout>
        <HelpNavigation />

        {/*------- DesktopWHeight --------*/}
        <DesktopWHeight>
          <HelpFaqStyles>
            <div>
              <h1>Have a question?</h1>
              <p>
                Feel free to contact us for any other questoin with the (link:
                contactform)
              </p>
            </div>

            <div className="content-container">
              <FaqNavigation />
              <div>
                <FaqContent
                  question="How do I create an account?"
                  answer="To create an account you can go to the register page: link"
                />
              </div>
            </div>
          </HelpFaqStyles>
        </DesktopWHeight>

        {/*------- MobileWHeight --------*/}
        <MobileWHeight>
          <HelpStylesMobile>
            <CardContentMobile>
              <FaqNavigation />
              <div className="faq-container">
                <FaqContent
                  question="How do I create an account?"
                  answer="To create an account you can go to the register page: link"
                />
              </div>
            </CardContentMobile>
          </HelpStylesMobile>
        </MobileWHeight>
      </InnerContentLayout>
    </ContentLayout>
  );
};

export default HelpFaqHabits;
