import styled from "styled-components";

export const NavLinkPrimary = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
  color: var(--color-text-grey);
  background-color: var(--color-white);
  height: var(--height-100vh);
  padding: var(--padding-s) var(--padding-m);
  width: var(--layout-width-navigation-xl);

  a {
    color: var(--color-text-grey);
    padding: var(--padding-s);
  }

  a.active {
    background-color: var(--color-white-background);
    border-radius: var(--border-radius-s);
  }
`;

export const NavLinkSecondary = styled.div`
  a {
    color: var(--color-text-grey);
  }

  a.active {
    border-bottom: solid var(--color-orange) var(--border-width-s);
  }
`;

export const NavLinkThird = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--margin-xs) var(--margin-m);

  a {
    color: var(--color-orange-salmon);
    background-color: var(--color-white);
    width: var(--width-100);
    padding: var(--padding-s);
    margin-top: var(--margin-m);
    text-align: center;
  }

  a:first-child {
    border-radius: var(--border-radius-s) 0 0 var(--border-radius-s);
  }

  a:last-child {
    border-radius: 0 var(--border-radius-s) var(--border-radius-s) 0;
  }

  a.active {
    color: var(--color-white);
    background-color: var(--color-orange-salmon);
  }

  .links {
    display: flex;
    justify-content: center;
  }

  .title-link {
    background: none;
    padding: 0;
    color: var(--color-text-orange-dark);
  }
`;

export const NavLinkFourth = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);

  a {
    color: var(--color-text-grey);
    padding: var(--padding-xs);
    width: 100px;
    text-align: center;
  }

  a.active {
    background-color: var(--color-orange-salmon);
    color: var(--color-white);
    border-radius: var(--border-radius-s);
  }
`;

export const NavLinkFifth = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: var(--color-orange-salmon);
    background-color: var(--color-white-background);
    width: var(--width-100);
    padding: var(--padding-s);
    margin-top: var(--margin-m);
    text-align: center;
  }

  a:first-child {
    border-radius: var(--border-radius-s) 0 0 var(--border-radius-s);
  }

  a:last-child {
    border-radius: 0 var(--border-radius-s) var(--border-radius-s) 0;
  }

  a.active {
    color: var(--color-white);
    background-color: var(--color-orange-salmon);
  }

  .links {
    display: flex;
    justify-content: center;
  }
`;
