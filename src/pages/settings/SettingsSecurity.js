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

const SettingsSecurity = () => {
  return (
    <>
      <ContentLayout>
        <InnerContentLayout>
          <SettingsNavigation />

          {/*------- DesktopWHeight --------*/}
          <DesktopWHeight>
            <SettingStyles>
              <p>Settings security content</p>
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
