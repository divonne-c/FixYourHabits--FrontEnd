import styled from "styled-components";

export const CreateHabitButton = styled.button`
  height: var(--height-habit);

  span {
    font-size: var(--font-xxxl);
    padding: 0 var(--padding-sm);
    color: var(--color-orange);
    border: solid var(--color-orange) var(--border-width-m);
    border-radius: var(--border-radius-xs);
  }

  span:hover {
    color: var(--color-white);
    background-color: var(--color-orange);
    border-radius: var(--border-radius-xs);
  }

  @media (max-width: 1024px) {
    height: inherit;

    span {
      color: var(--color-orange) !important;
      font-size: var(--font-m);
      padding: var(--padding-xs) var(--padding-s);
      background-color: var(--color-white);
      border: none;
      border-radius: var(--border-radius-l);
    }

    span:hover {
      color: var(--color-orange);
      background-color: var(--color-white);
      border-radius: var(--border-radius-l);
    }
  }
`;
