import React, { useContext, useEffect, useState } from "react";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../../../styles - global/global/LayoutStyles";
import { Mobile } from "../../../../styles - global/media/MediaQueryDisplay";
import { AuthContext } from "../../../../context/AuthContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import Welcome from "../../../../components/welcome/Welcome";
import { CardContentMobile } from "../../../../styles - global/cards/CardContentMobile";
import HomeNavigation from "../../../../components/navigations/HomeNavigation";
import Calender from "../../../../components/calenders/calender - content/Calender";

const HomeAdminScores = () => {
  let { userId } = useParams();

  return (
    <ContentLayout>
      <Mobile>
        <InnerContentLayout2>
          <Welcome />
          <CardContentMobile>
            <Calender />
            <HomeNavigation />
          </CardContentMobile>
        </InnerContentLayout2>
      </Mobile>
    </ContentLayout>
  );
};

export default HomeAdminScores;
