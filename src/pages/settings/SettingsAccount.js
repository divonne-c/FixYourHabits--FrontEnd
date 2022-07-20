import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import SettingsNavigation from "../../components/navigations/SettingsNavigation";
import {
  Container,
  SettingStyles,
  SettingStylesMobile,
} from "./settings.styles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import SettingsAccountContent from "./SettingsAccountContent";

const SettingsAccount = () => {
  return (
    <>
      <ContentLayout>
        <InnerContentLayout>
          <SettingsNavigation />

          {/*------- DesktopWHeight --------*/}
          <Container>
            <DesktopWHeight>
              <SettingStyles>
                {/*TITLE*/}
                <div>
                  <h1>General Details</h1>
                  <p>
                    Update your personal infomation, reset or delete your
                    account here.
                  </p>
                </div>
                <SettingsAccountContent />
              </SettingStyles>
            </DesktopWHeight>
          </Container>

          {/*------- MobileWHeight --------*/}
          <MobileWHeight>
            <SettingStylesMobile>
              <CardContentMobile>
                <SettingsAccountContent />
              </CardContentMobile>
            </SettingStylesMobile>
          </MobileWHeight>
        </InnerContentLayout>
      </ContentLayout>
    </>
  );
};

export default SettingsAccount;
