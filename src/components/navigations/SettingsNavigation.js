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

const SettingsNavigation = () => {
  return (
    <>
      {/*------- Desktop --------*/}
      <DesktopNav>
        <NavLinkPrimary>
          <h1>Settings</h1>
          <NavLink to="/settings/account">
            <p>Account</p>
          </NavLink>
          <NavLink to="/settings/security">
            <p>Security</p>
          </NavLink>
        </NavLinkPrimary>
      </DesktopNav>

      {/*------- Mobile --------*/}
      <MobileNav>
        <NavLinkThird>
          <h1>Settings</h1>
          <p>Update, reset or delete your account here</p>
          <div className="links">
            <NavLink to="/settings/account">Account</NavLink>
            <NavLink to="/settings/security">Security</NavLink>
          </div>
        </NavLinkThird>
      </MobileNav>
    </>
  );
};

export default SettingsNavigation;
