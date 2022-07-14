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

const SettingsAccount = () => {
  return (
    <>
      <ContentLayout>
        <InnerContentLayout>
          <SettingsNavigation />

          {/*------- DesktopWHeight --------*/}
          <DesktopWHeight>
            <SettingStyles>
              <p>Settings account content</p>
            </SettingStyles>
          </DesktopWHeight>

          {/*------- MobileWHeight --------*/}
          <MobileWHeight>
            <SettingStylesMobile>
              <CardContentMobile>
                <p>Settings account content mobile</p>
              </CardContentMobile>
            </SettingStylesMobile>
          </MobileWHeight>
        </InnerContentLayout>
      </ContentLayout>
    </>
  );
};

export default SettingsAccount;
