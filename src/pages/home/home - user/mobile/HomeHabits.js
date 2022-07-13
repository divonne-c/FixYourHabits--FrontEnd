import React, { useState } from "react";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../../../styles - global/global/LayoutStyles";
import { Mobile } from "../../../../styles - global/media/MediaQueryDisplay";
import { useParams } from "react-router-dom";

const HomeHabits = () => {
  let { userId } = useParams();

  return (
    <ContentLayout>
      <Mobile>
        <InnerContentLayout2>
          <p>main</p>
        </InnerContentLayout2>
      </Mobile>
    </ContentLayout>
  );
};

export default HomeHabits;
