import styled from "styled-components";

export const Desktop = styled.div`
  height: var(--height-100);
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  height: var(--height-100);

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const DesktopNav = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MobileNav = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`;
