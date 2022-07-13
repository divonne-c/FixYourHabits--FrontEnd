import React from "react";
import {
  ContentLayout,
  InnerContentLayout3,
} from "../../../../styles - global/global/LayoutStyles";
import { useParams } from "react-router-dom";
import { Main, Sidebar } from "../../Home.styles";
import { Desktop } from "../../../../styles - global/media/MediaQueryDisplay";

const Home = () => {
  let { userId } = useParams();

  return (
    <ContentLayout>
      <Desktop>
        <InnerContentLayout3>
          {/*--------------- MAIN --------------*/}
          <Main>
            <p>Main</p>
          </Main>

          {/*--------------- SIDEBAR --------------*/}
          <Sidebar>
            <p>Side</p>
          </Sidebar>
        </InnerContentLayout3>
      </Desktop>
    </ContentLayout>
  );
};

export default Home;
