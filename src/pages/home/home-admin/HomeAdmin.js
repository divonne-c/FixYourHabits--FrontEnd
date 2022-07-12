import React from "react";
import {
  ContentLayout,
  InnerContentLayout3,
} from "../../../styles - global/global/LayoutStyles";
import { useParams } from "react-router-dom";
import { Main, Sidebar } from "../Home.styles";

const HomeAdmin = () => {
  let { userId } = useParams();

  return (
    <ContentLayout>
      <InnerContentLayout3>
        {/*--------------- MAIN --------------*/}
        <Main>
          <p>main</p>
        </Main>

        {/*--------------- SIDEBAR --------------*/}
        <Sidebar>
          <p>side</p>
        </Sidebar>
      </InnerContentLayout3>
    </ContentLayout>
  );
};

export default HomeAdmin;
