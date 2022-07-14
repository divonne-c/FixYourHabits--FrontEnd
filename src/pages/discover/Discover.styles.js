import styled from "styled-components";

export const DiscoverStyles = styled.div`
  margin: var(--margin-s) var(--margin-l);
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
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

  h1 {
    text-align: center;
    border-bottom: 1px solid var(--color-white-background);
    font-weight: lighter;
  }
`;
