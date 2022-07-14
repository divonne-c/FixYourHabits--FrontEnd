import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--gap-m);
  margin-top: var(--margin-s);

  button {
    padding: var(--padding-s) var(--padding-m);
    border-radius: var(--border-radius-l);
  }

  button:hover {
    opacity: 0.8;
  }
`;
