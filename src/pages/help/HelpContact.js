import HelpNavigation from "../../components/navigations/HelpNavigation";
import ContactForm from "../../components/forms/ContactForm";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import { HelpMobile, HelpStyles, HelpStylesMobile } from "./Help.styles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import { Card } from "../../styles - global/cards/CardHome";

const HelpContact = () => {
  return (
    <ContentLayout>
      <InnerContentLayout>
        <HelpNavigation />

        {/*------- Desktop --------*/}
        <DesktopWHeight>
          <HelpStyles>
            <div className="title">
              <h1>Get in touch</h1>
              <p>Fill in the contact form for any questions or comments.</p>
            </div>
            <Card>
              <div className="form-container">
                <ContactForm />
              </div>
            </Card>
          </HelpStyles>
        </DesktopWHeight>

        {/*------- Mobile --------*/}
        <MobileWHeight>
          <HelpStylesMobile>
            <CardContentMobile>
              <HelpMobile>
                <ContactForm />
              </HelpMobile>
            </CardContentMobile>
          </HelpStylesMobile>
        </MobileWHeight>
      </InnerContentLayout>
    </ContentLayout>
  );
};

export default HelpContact;
