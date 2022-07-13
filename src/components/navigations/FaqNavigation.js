import React from "react";
import { NavLink } from "react-router-dom";
import {
  DesktopNav,
  MobileNav,
} from "../../styles - global/media/MediaQueryDisplay";
import { FaqNavStylesMobile } from "../../pages/help/Help.styles";
import {
  NavLinkSecondary,
  NavLinkFourth,
} from "../../styles - global/navlinks/NavLinkStyles";

const FaqNavigation = () => {
  return (
    <>
      {/*------- Desktop --------*/}
      <DesktopNav>
        <NavLinkFourth>
          <NavLink to="/help/faq/account">
            <p>Account</p>
          </NavLink>
          <NavLink to="/help/faq/rewards">
            <p>Rewards</p>
          </NavLink>
          <NavLink to="/help/faq/habits">
            <p>Habits</p>
          </NavLink>
        </NavLinkFourth>
      </DesktopNav>
      {/*<FaqNavStyles></FaqNavStyles>*/}

      {/*------- Mobile --------*/}
      <MobileNav>
        <NavLinkSecondary>
          <FaqNavStylesMobile>
            <NavLink to="/help/faq/account">
              <p>Account</p>
            </NavLink>
            <NavLink to="/help/faq/rewards">
              <p>Rewards</p>
            </NavLink>
            <NavLink to="/help/faq/habits">
              <p>Habits</p>
            </NavLink>
          </FaqNavStylesMobile>
        </NavLinkSecondary>
      </MobileNav>
    </>
  );
};

export default FaqNavigation;
