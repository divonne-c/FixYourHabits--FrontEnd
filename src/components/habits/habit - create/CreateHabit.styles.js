import styled from "styled-components";
import {
  ButtonFourth,
  ButtonPrimary,
  ButtonSecondary,
  ButtonThird,
} from "../../../styles - global/global/ButtonStyles";

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

export const CreateAdminHabitButton = styled(ButtonPrimary)`
  width: 100%;
  text-align: center;
  padding: var(--padding-sm);
  margin-top: var(--margin-m);

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap-s);
  }

  @media (max-width: 1024px) {
    background: var(--color-white-background);
  }
`;
