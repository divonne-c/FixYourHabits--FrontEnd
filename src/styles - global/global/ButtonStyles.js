import styled from "styled-components";

export const Button = styled.button`
  text-transform: uppercase;
  padding: var(--padding-s);
  border-radius: var(--border-radius-m);

  :hover {
    cursor: pointer;
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: var(--color-white);
  color: var(--color-orange);

  :hover {
    background-color: var(--color-orange);
    color: var(--color-white);
  }
`;

export const ButtonSecondary = styled(Button)`
  background-color: var(--color-white-background);
  color: var(--color-orange);
`;

export const ButtonThird = styled(Button)`
  background-color: var(--color-orange);
  color: var(--color-white);

  :hover {
    background-color: var(--color-orange-salmon);
    color: var(--color-white);
  }
`;

export const ButtonFourth = styled(Button)`
  border: 1px solid var(--color-orange);
  color: var(--color-orange);

  :hover {
    background-color: var(--color-orange-light);
    border: 1px solid var(--color-orange-light);
    color: var(--color-text-orange-dark);
  }
`;
