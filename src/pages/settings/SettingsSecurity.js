import React from "react";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import SettingsNavigation from "../../components/navigations/SettingsNavigation";
import { SettingStyles, SettingStylesMobile } from "./settings.styles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import { Desktop, Mobile } from "../../styles - global/media/MediaQueryDisplay";

const SettingsSecurity = () => {
  return (
    <>
      <ContentLayout>
        <InnerContentLayout>
          <SettingsNavigation />

          {/*------- Desktop --------*/}
          <Desktop>
            <SettingStyles>
              <p>Settings security content</p>
            </SettingStyles>
          </Desktop>

          {/*------- Mobile --------*/}
          <Mobile>
            <SettingStylesMobile>
              <CardContentMobile>
                <p>Settings security content mobile</p>
              </CardContentMobile>
            </SettingStylesMobile>
          </Mobile>
        </InnerContentLayout>
      </ContentLayout>
    </>
  );
};

export default SettingsSecurity;
