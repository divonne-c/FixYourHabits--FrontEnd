import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Desktop, Mobile } from "../../globalstyles/MediaQueryDisplay";
import { NavLinkPrimary, NavLinkThird } from "./NavLink.styles";

const HelpNavigation = () => {
  return (
    <>
      {/*------- Desktop --------*/}
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

      {/*------- Mobile --------*/}
      <Mobile>
        <NavLinkThird>
          <h1>Help</h1>
          <p>
            Feel free to{" "}
            <Link to="/help/contact" className="title-link">
              contact
            </Link>{" "}
            us for any other questions.
          </p>
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
