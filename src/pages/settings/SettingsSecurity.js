import SettingsNavigation from "../../components/navigations/SettingsNavigation";
import EditPassword from "../../components/account/EditPassword";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import {
  SecurityForm,
  SettingStyles,
  SettingStylesMobile,
} from "./settings.styles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import { Card } from "../../styles - global/cards/CardHome";

const SettingsSecurity = () => {
  return (
    <ContentLayout>
      <InnerContentLayout>
        <SettingsNavigation />

        {/*------- Desktop --------*/}
        <DesktopWHeight>
          <SettingStyles>
            <div>
              <h1>Password</h1>
              <p>Update your password here.</p>
            </div>

            <Card>
              <SecurityForm>
                <h2>Change Password</h2>
                <EditPassword />
              </SecurityForm>
            </Card>
          </SettingStyles>
        </DesktopWHeight>

        {/*------- Mobile --------*/}
        <MobileWHeight>
          <SettingStylesMobile>
            <CardContentMobile>
              <SecurityForm>
                <h3>Change Password</h3>
                <EditPassword />
              </SecurityForm>
            </CardContentMobile>
          </SettingStylesMobile>
        </MobileWHeight>
      </InnerContentLayout>
    </ContentLayout>
  );
};

export default SettingsSecurity;
