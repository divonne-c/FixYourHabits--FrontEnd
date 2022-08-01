import React from "react";
import { NavLink } from "react-router-dom";
import { Desktop, Mobile } from "../../globalstyles/MediaQueryDisplay";
import { FaqNavStylesMobile } from "../../pages/help/Help.styles";
import { NavLinkSecondary, NavLinkFourth } from "./NavLink.styles";

const FaqNavigation = () => {
  return (
    <>
      {/*------- Desktop --------*/}
      <Desktop>
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
      </Desktop>

      {/*------- Mobile --------*/}
      <Mobile>
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
      </Mobile>
    </>
  );
};

export default FaqNavigation;
