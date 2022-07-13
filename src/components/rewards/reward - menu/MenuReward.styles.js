import styled from "styled-components";

export const ButtonHabitMenu = styled.button`
  color: var(--color-orange);
  height: 18px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    transform: rotate(90deg);
  }
`;
