import React from "react";
import { NavLink } from "react-router-dom";
import {
  Desktop,
  Mobile,
} from "../../styles - global/global/MediaQueryDisplay";
import {
  NavLinkPrimary,
  NavLinkThird,
} from "../../styles - global/navlinks/NavLinkStyles";

const HelpNavigation = () => {
  return (
    <>
      {/*------- DesktopWHeight --------*/}
      <Desktop>
        <NavLinkPrimary>
          <h1>Help</h1>
          <NavLink to="/help/faq">
            <p>FAQ</p>
          </NavLink>
          <NavLink to="/help/contact">
            <p>Contact</p>
          </NavLink>
        </NavLinkPrimary>
      </Desktop>

      {/*------- MobileWHeight --------*/}
      <Mobile>
        <NavLinkThird>
          <h1>Help</h1>
          <p>blabla</p>
          <div className="links">
            <NavLink to="/help/faq">FAQ</NavLink>
            <NavLink to="/help/contact">Contact</NavLink>
          </div>
        </NavLinkThird>
      </Mobile>
    </>
  );
};

export default HelpNavigation;
