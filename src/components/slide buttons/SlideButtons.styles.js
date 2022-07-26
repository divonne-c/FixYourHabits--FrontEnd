import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .slide-btn {
    color: var(--color-orange-button);
    padding: var(--padding-xs) var(--padding-s);
    border-radius: var(--border-radius-l);

    :hover {
      opacity: 0.7;
    }
  }
`;
