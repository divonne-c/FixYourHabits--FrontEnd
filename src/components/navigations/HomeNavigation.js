import React, { useContext } from "react";
import { MobileNav } from "../../styles - global/media/MediaQueryDisplay";
import { NavLink } from "react-router-dom";
import { NavLinkFifth } from "../../styles - global/navlinks/NavLinkStyles";
import { AuthContext } from "../../context/AuthContext";
import { Nav } from "../../pages/home/Home.styles";

const HomeNavigation = () => {
  const { auth } = useContext(AuthContext);

  return (
    <MobileNav>
      <NavLinkFifth>
        <Nav>
          <NavLink
            to={auth.isAuth ? `/home/${auth.user.username}/habits` : "*"}
          >
            <p>Habits</p>
          </NavLink>
          <NavLink
            to={auth.isAuth ? `/home/${auth.user.username}/scores` : "*"}
          >
            <p>Scores</p>
          </NavLink>
        </Nav>
      </NavLinkFifth>
    </MobileNav>
  );
};

export default HomeNavigation;
