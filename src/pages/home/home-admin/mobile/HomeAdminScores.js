import React, { useContext, useEffect, useState } from "react";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../../../styles - global/global/LayoutStyles";
import { MobileWHeight } from "../../../../styles - global/global/MediaQueryDisplay";
import { useParams } from "react-router-dom";
import Welcome from "../../../../components/welcome/Welcome";
import { CardContentMobile } from "../../../../styles - global/cards/CardContentMobile";
import HomeNavigation from "../../../../components/navigations/HomeNavigation";
import Calender from "../../../../components/calender/Calender";
import StatsAdmin from "../../../../components/stats/stats - admin /StatsAdmin";

const HomeAdminScores = () => {
  let { userId } = useParams();

  return (
    <ContentLayout>
      <MobileWHeight>
        <InnerContentLayout2>
          <Welcome />
          <CardContentMobile>
            <Calender />
            <HomeNavigation />

            {/*  Stats*/}
            <StatsAdmin />
          </CardContentMobile>
        </InnerContentLayout2>
      </MobileWHeight>
    </ContentLayout>
  );
};

export default HomeAdminScores;
