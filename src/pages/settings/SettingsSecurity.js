import React from "react";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import SettingsNavigation from "../../components/navigations/SettingsNavigation";
import { SettingStyles, SettingStylesMobile } from "./settings.styles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import { Card } from "../../styles - global/cards/CardHome";
import EditPassword from "../../components/account/account - edit password/EditPassword";

const SettingsSecurity = () => {
  return (
    <>
      <ContentLayout>
        <InnerContentLayout>
          <SettingsNavigation />

          {/*------- DesktopWHeight --------*/}
          <DesktopWHeight>
            <SettingStyles>
              <div>
                <h1>Password</h1>
                <p>Update your password here.</p>
              </div>

              <Card>
                <h2>Change Password</h2>
                <EditPassword />
              </Card>
            </SettingStyles>
          </DesktopWHeight>

          {/*------- MobileWHeight --------*/}
          <MobileWHeight>
            <SettingStylesMobile>
              <CardContentMobile>
                <p>Settings security content mobile</p>
              </CardContentMobile>
            </SettingStylesMobile>
          </MobileWHeight>
        </InnerContentLayout>
      </ContentLayout>
    </>
  );
};

export default SettingsSecurity;
