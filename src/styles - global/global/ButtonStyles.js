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

export const ButtonAddHabit = styled.button`
  height: 120px;

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

/////////////////// Button: complete button //////////////////

export const CompleteButton = styled(ButtonPrimary)`
  border-radius: 5px;
  padding: var(--padding-s);

  @media (max-width: 1024px) {
    background-color: transparent;

    input[type="checkbox"] {
      transform: scale(1.5);
      position: relative;
      cursor: pointer;
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--color-white-background);
      z-index: 1;
    }

    .checked input[type="checkbox"]:before,
    input[type="checkbox"]:hover:before {
      font-family: "Material Icons";
      content: "\\e876";
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-orange);
      color: var(--color-white);
    }
  }
`;
