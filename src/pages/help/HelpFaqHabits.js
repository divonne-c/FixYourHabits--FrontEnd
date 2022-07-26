import React from "react";
import { Link } from "react-router-dom";
import HelpNavigation from "../../components/navigations/HelpNavigation";
import FaqNavigation from "../../components/navigations/FaqNavigation";
import FaqContent from "./FaqContent";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import { HelpFaqStyles, HelpStylesMobile } from "./Help.styles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import FaqRewardsContent from "./faq - questions and answers/FaqRewardsContent";
import FaqHabitsContent from "./faq - questions and answers/FaqHabitsContent";

const HelpFaqHabits = () => {
  return (
    <ContentLayout>
      <InnerContentLayout>
        <HelpNavigation />

        {/*------- Desktop --------*/}
        <DesktopWHeight>
          <HelpFaqStyles>
            <div>
              <h1>Have a question?</h1>
              <p>
                Feel free to{" "}
                <Link to="/help/contact" className="title-link">
                  contact
                </Link>{" "}
                us for any other questions.
              </p>
            </div>

            <div className="content-container">
              <FaqNavigation />
              <div className="faq-container">
                <FaqHabitsContent />
              </div>
            </div>
          </HelpFaqStyles>
        </DesktopWHeight>

        {/*------- Mobile --------*/}
        <MobileWHeight>
          <HelpStylesMobile>
            <CardContentMobile>
              <FaqNavigation />
              <div className="faq-container">
                <FaqHabitsContent />
              </div>
            </CardContentMobile>
          </HelpStylesMobile>
        </MobileWHeight>
      </InnerContentLayout>
    </ContentLayout>
  );
};

export default HelpFaqHabits;
