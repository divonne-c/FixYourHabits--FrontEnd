import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius-m);
  box-shadow: var(--shadow-medium);

  @media (max-width: 1024px) {
    min-height: 0;
  }
`;
