import React from "react";
import { NavLink } from "react-router-dom";
import {
  Desktop,
  Mobile,
} from "../../styles - global/global/MediaQueryDisplay";
import { DiscoverNavStyles } from "../../pages/discover/Discover.styles";
import { NavLinkSecondary, NavLinkThird } from "./NavLink.styles";

const DiscoverNavigation = () => {
  return (
    <>
      {/*------- Desktop --------*/}
      <Desktop>
        <NavLinkSecondary>
          <DiscoverNavStyles>
            <NavLink to="/discover/main">
              <h1>Discover</h1>
            </NavLink>
            <NavLink to="/discover/all">
              <h1>All</h1>
            </NavLink>
          </DiscoverNavStyles>
        </NavLinkSecondary>
      </Desktop>

      {/*------- Mobile --------*/}
      <Mobile>
        <NavLinkThird>
          <div className="links">
            <NavLink to="/discover/main">Discover</NavLink>
            <NavLink to="/discover/all">All</NavLink>
          </div>
        </NavLinkThird>
      </Mobile>
    </>
  );
};

export default DiscoverNavigation;
