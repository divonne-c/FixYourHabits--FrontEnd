import styled from "styled-components";
import { NavLink } from "react-router-dom";

////////////////////// Desktop: navigation ////////////////////////
export const NavigationDesktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: var(--height-100vh);
  width: var(--layout-width-navigation-l);
  padding: var(--padding-m) 0;
  color: var(--color-white);
  background-color: var(--color-orange);
  font-weight: var(--font-weight-light);

  ////////// Laptop
  @media (max-width: 1400px) {
    width: var(--layout-width-navigation-m);

    p,
    h2 {
      display: none;
    }
  }
`;

export const NavigationElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);

  a {
    color: var(--color-white);
    border-left: transparent var(--border-width-m) solid;
  }

  a.active {
    color: var(--color-text-orange-dark);
    background-color: var(--color-orange-active);
    border-left: var(--color-white) var(--border-width-m) solid;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  padding: var(--padding-s) var(--padding-m);
`;

export const NavigationLogo = styled.div`
  text-align: center;
  margin-bottom: var(--margin-xxxl);

  h2 {
    font-weight: var(--font-weight-light);
  }

  span {
    font-size: var(--font-m);
  }
`;

////////////////////// Mobile: navigation ////////////////////////
export const NavigationMobile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-orange);
  position: fixed;
  bottom: 0;
  width: 100vw;
  z-index: 1;

  span {
    color: var(--color-white);
    font-size: var(--font-m);
  }

  a {
    padding: var(--padding-s);
    border-top: transparent var(--border-width-m) solid;
  }

  a.active {
    border-top: var(--color-white) var(--border-width-m) solid;
  }
`;
