import SettingsNavigation from "../../components/navigations/SettingsNavigation";
import SettingsAccountContent from "./SettingsAccountContent";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../globalstyles/LayoutStyles";
import {
  Container,
  SettingStyles,
  SettingStylesMobile,
} from "./settings.styles";
import { CardContentMobile } from "../../globalstyles/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../globalstyles/MediaQueryDisplay";

const SettingsAccount = () => {
  return (
    <ContentLayout>
      <InnerContentLayout>
        <SettingsNavigation />

        {/*------- Desktop --------*/}
        <Container>
          <DesktopWHeight>
            <SettingStyles>
              {/*TITLE*/}
              <div>
                <h1>General Details</h1>
                <p>
                  Update your personal information, reset or delete your account
                  here.
                </p>
              </div>
              <SettingsAccountContent />
            </SettingStyles>
          </DesktopWHeight>
        </Container>

        {/*------- Mobile --------*/}
        <MobileWHeight>
          <SettingStylesMobile>
            <CardContentMobile>
              <SettingsAccountContent />
            </CardContentMobile>
          </SettingStylesMobile>
        </MobileWHeight>
      </InnerContentLayout>
    </ContentLayout>
  );
};

export default SettingsAccount;
