import React, { useContext } from "react";
import { Mobile } from "../../styles - global/global/MediaQueryDisplay";
import { NavLink } from "react-router-dom";
import { NavLinkFifth } from "./NavLink.styles";
import { AuthContext } from "../../context/AuthContext";
import { Nav } from "../../pages/home/Home.styles";

const HomeNavigation = () => {
  const { auth } = useContext(AuthContext);

  return (
    <Mobile>
      <NavLinkFifth>
        <Nav>
          <NavLink
            to={
              auth.isAuth && auth.user.role === "ROLE_USER"
                ? `/home/${auth.user.username}/habits`
                : `/admin/home/${auth.user.username}/habits`
            }
          >
            <p>
              {auth.isAuth && auth.user.role === "ROLE_USER"
                ? "Habits"
                : "Overview"}
            </p>
          </NavLink>
          <NavLink
            to={
              auth.isAuth && auth.user.role === "ROLE_USER"
                ? `/home/${auth.user.username}/scores`
                : `/admin/home/${auth.user.username}/scores`
            }
          >
            <p>Scores</p>
          </NavLink>
        </Nav>
      </NavLinkFifth>
    </Mobile>
  );
};

export default HomeNavigation;
