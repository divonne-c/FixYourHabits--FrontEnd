import React from "react";
import {
  Desktop,
  Mobile,
} from "../../styles - global/global/MediaQueryDisplay";
import {
  NavLinkSecondary,
  NavLinkThird,
} from "../../styles - global/navlinks/NavLinkStyles";
import { DiscoverNavStyles } from "../../pages/discover/Discover.styles";
import { NavLink } from "react-router-dom";

const AuthNavigation = () => {
  return (
    <>
      {/*------- Mobile --------*/}
      <Mobile>
        <NavLinkThird>
          <div className="links">
            <NavLink to="/auth/sign-in">
              <p>Sign in</p>
            </NavLink>
            <NavLink to="/auth/create-account">
              <p>Sign up</p>
            </NavLink>
          </div>
        </NavLinkThird>
      </Mobile>
    </>
  );
};

export default AuthNavigation;
