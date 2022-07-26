import React from "react";
import { NavLink } from "react-router-dom";
import {
  Desktop,
  Mobile,
} from "../../styles - global/global/MediaQueryDisplay";
import { NavLinkPrimary, NavLinkThird } from "./NavLink.styles";

const SettingsNavigation = () => {
  return (
    <>
      {/*------- Desktop --------*/}
      <Desktop>
        <NavLinkPrimary>
          <h1>Settings</h1>
          <NavLink to="/settings/account">
            <p>Account</p>
          </NavLink>
          <NavLink to="/settings/security">
            <p>Security</p>
          </NavLink>
        </NavLinkPrimary>
      </Desktop>

      {/*------- Mobile --------*/}
      <Mobile>
        <NavLinkThird>
          <h1>Settings</h1>
          <p>Update, reset or delete your account here</p>
          <div className="links">
            <NavLink to="/settings/account">Account</NavLink>
            <NavLink to="/settings/security">Security</NavLink>
          </div>
        </NavLinkThird>
      </Mobile>
    </>
  );
};

export default SettingsNavigation;
