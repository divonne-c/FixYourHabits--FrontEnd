import styled from "styled-components";

export const DesktopWHeight = styled.div`
  height: var(--height-100);
  overflow: scroll;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MobileWHeight = styled.div`
  height: var(--height-100);

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const Desktop = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`;
