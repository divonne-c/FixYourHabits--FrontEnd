import styled from "styled-components";

export const Container = styled.div`
  .reward-container {
    padding: var(--padding-s);
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-xs);
  }
  span {
    font-size: var(--font-m);
    padding: var(--padding-xs);
    border-radius: var(--border-radius-l);
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: var(--font-sm);
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
  padding: 0 var(--padding-s);

  h2 {
    border-bottom: 1px solid var(--color-white-input);
    padding-bottom: var(--padding-s);
  }

  p {
    color: var(--color-text-orange-dark);
  }
`;
