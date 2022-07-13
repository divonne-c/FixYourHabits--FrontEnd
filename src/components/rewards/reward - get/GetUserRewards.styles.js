import styled from "styled-components";

export const Container = styled.div`
  .reward-container {
    padding: var(--padding-s);
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-xs);
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: var(--font-sm);
    }
  }
`;
