import React from "react";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import FaqNavigation from "../../components/navigations/FaqNavigation";
import HelpNavigation from "../../components/navigations/HelpNavigation";
import { HelpFaqStyles, HelpStylesMobile } from "./Help.styles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import FaqContent from "./FaqContent";

const HelpFaqAccount = () => {
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
              <p>help faq account content</p>
            </CardContentMobile>
          </HelpStylesMobile>
        </MobileWHeight>
      </InnerContentLayout>
    </ContentLayout>
  );
};

export default HelpFaqAccount;
