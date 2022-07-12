import React from "react";
import { NavLink } from "react-router-dom";
import {
  DesktopNav,
  MobileNav,
} from "../../styles - global/media/MediaQueryDisplay";
import { DiscoverNavStyles } from "../../pages/discover/Discover.styles";
import {
  NavLinkSecondary,
  NavLinkThird,
} from "../../styles - global/navlinks/NavLinkStyles";

const DiscoverNavigation = () => {
  return (
    <>
      {/*------- Desktop --------*/}
      <DesktopNav>
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
      </DesktopNav>

      {/*------- Mobile --------*/}
      <MobileNav>
        <NavLinkThird>
          <div className="links">
            <NavLink to="/discover/main">Discover</NavLink>
            <NavLink to="/discover/all">All</NavLink>
          </div>
        </NavLinkThird>
      </MobileNav>
    </>
  );
};

export default DiscoverNavigation;
