import styled from "styled-components";

export const GlobalLayout = styled.div`
  display: flex;
  height: var(--height-100vh);
  width: var(--width-100vw);

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: space-between;
  }
`;

export const ContentLayout = styled.div`
  margin-left: var(--layout-margin-content-l);
  width: var(--width-100);
  height: 100%;

  ////////// Laptop
  @media screen and (max-width: 1400px) {
    margin-left: var(--layout-margin-content-m);
  }

  ////////// Tablet / phone
  @media screen and (max-width: 1024px) {
    min-height: var(--height-100vh);
    margin-left: 0;
  }
`;

export const InnerContentLayout = styled.div`
  display: flex;
  height: 100%;

  ////////// Tablet / phone
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: var(--gap-m);
    min-height: var(--height-100);
  }
`;

export const InnerContentLayout2 = styled.div`
  ////////// Tablet / phone
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: var(--gap-m);
    min-height: var(--height-100);
  }
`;

export const InnerContentLayout3 = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: var(--height-100);

  ////////// Tablet / phone
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--gap-m);
    height: var(--height-100);
  }
`;
