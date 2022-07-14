import styled from "styled-components";
import { ButtonPrimary } from "../../../styles - global/global/ButtonStyles";

export const Button = styled(ButtonPrimary)`
  width: 100%;
  padding: var(--padding-sm);
  margin-top: var(--margin-m);

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--gap-s);
  }

  @media (max-width: 1024px) {
    background: var(--color-white-background);
  }
`;
