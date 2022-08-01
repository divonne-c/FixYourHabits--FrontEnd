import styled from "styled-components";

export const DiscoverStyles = styled.div`
  margin: var(--margin-s) var(--margin-l);
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
  overflow: hidden;
  max-width: calc(
    100vw - var(--layout-width-navigation-l) - var(--margin-l) - var(--margin-l)
  );

  @media (max-width: 1024px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    max-width: 100vw;

    .filter-container {
      display: flex;
      justify-content: flex-end;
      margin: var(--margin-xs) var(--margin-s) 0 var(--margin-s);
    }

    .filter-button {
      display: flex;
      align-items: center;
      gap: var(--gap-s);
    }
`;

export const DiscoverNavStyles = styled.div`
  display: flex;
  gap: var(--gap-m);
  color: var(--color-text-grey);
  margin: var(--margin-s) var(--margin-l);
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
  border-radius: var(--border-radius-m);
  background-color: var(--color-white);
  padding: var(--padding-s) var(--padding-m);
  margin-left: var(--margin-m);
  max-height: 700px;

  h1 {
    text-align: center;
    border-bottom: var(--border-width-xxs) solid var(--color-white-background);
    font-weight: lighter;
  }

  @media (max-width: 1024px) {
    padding: 0;
  }
`;
