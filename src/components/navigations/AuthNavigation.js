import React from "react";
import { Mobile } from "../../globalstyles/MediaQueryDisplay";
import { NavLinkThird } from "./NavLink.styles";
import { NavLink } from "react-router-dom";

const AuthNavigation = () => {
  return (
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
  );
};

export default AuthNavigation;
