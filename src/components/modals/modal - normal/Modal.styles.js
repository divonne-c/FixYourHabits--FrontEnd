import styled from "styled-components";

export const ModalContainer = styled.div`
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  height: var(--height-100vh);
  width: var(--width-100vw);
  z-index: 2;

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: var(--height-100);
    background: var(--color-background-modal);
  }

  .element {
    display: flex;
    flex-direction: column;
    gap: var(--gap-m);
    min-height: var(--height-50vh);
    min-width: 35vw;
    background: var(--color-white);
    padding: var(--padding-l);
    border-radius: var(--border-radius-m);
    overflow: scroll;
  }

  .modal-reward {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: var(--gap-m);

    span {
      font-size: var(--font-xxxl);
      color: var(--color-orange);
    }

    .reward-description {
      color: var(--color-text-orange-dark);
      font-size: var(--font-m);
    }

    button {
      width: 30%;
      margin: var(--margin-m) auto 0 auto;
    }
  }

  @media (max-width: 1024px) {
    .element {
      min-height: var(--height-50vh);
      width: var(--width-modal-mobile);
      padding: var(--padding-m);
    }

    .cancel-button {
      display: flex;
      justify-content: center;
    }
  }
`;
