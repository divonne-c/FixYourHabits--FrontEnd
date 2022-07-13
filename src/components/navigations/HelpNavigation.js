import React from "react";
import { NavLink } from "react-router-dom";
import {
  DesktopNav,
  MobileNav,
} from "../../styles - global/media/MediaQueryDisplay";
import {
  NavLinkPrimary,
  NavLinkThird,
} from "../../styles - global/navlinks/NavLinkStyles";

const HelpNavigation = () => {
  return (
    <>
      {/*------- Desktop --------*/}
      <DesktopNav>
        <NavLinkPrimary>
          <h1>Help</h1>
          <NavLink to="/help/faq">
            <p>FAQ</p>
          </NavLink>
          <NavLink to="/help/contact">
            <p>Contact</p>
          </NavLink>
        </NavLinkPrimary>
      </DesktopNav>

      {/*------- Mobile --------*/}
      <MobileNav>
        <NavLinkThird>
          <h1>Help</h1>
          <p>blabla</p>
          <div className="links">
            <NavLink to="/help/faq">FAQ</NavLink>
            <NavLink to="/help/contact">Contact</NavLink>
          </div>
        </NavLinkThird>
      </MobileNav>
    </>
  );
};

export default HelpNavigation;
