import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);

  p {
    font-size: var(--font-s) !important;
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
  }
`;
