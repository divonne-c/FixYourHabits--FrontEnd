import styled from "styled-components";

export const MenuButtonContainer = styled.div`
  span {
    font-size: var(--font-m);
    padding: var(--padding-xxs);
    border-radius: var(--border-radius-s);
    color: var(--color-text-orange-dark);
  }

  @media (max-width: 1024px) {
    p {
      font-size: var(--font-s);
    }

    .container {
      display: flex;
      align-items: center;
      gap: var(--gap-xxs);
    }

    .container:hover {
      opacity: 0.8;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  .test {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
  }

  .button-container {
    background: var(--color-white-background);
    position: absolute;
    top: 18px;
    text-align: center;
    padding: 20px 0;
    height: var(--height-habit);
    width: var(--width-habit);
    border-radius: var(--border-radius-s);
    z-index: 1;
    display: flex;
    justify-content: center;
    gap: var(--gap-xs);
    align-items: center;
  }

  .reward {
    height: 150px;
    width: 150px;
  }

  @media (max-width: 1024px) {
    .button-container-mobile {
      display: flex;
      justify-content: space-evenly;
    }

    .buttons {
      display: flex;
      align-items: center;
    }

    .cancel-button-container {
      text-align: center;
    }
  }
`;

export const MenuButtons = styled.button`
  color: var(--color-orange);
  height: 18px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    transform: rotate(90deg);
  }
`;

export const ModalButtons = styled.div`
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
