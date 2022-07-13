import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  height: var(--height-100vh);
  width: var(--width-100vw);
  z-index: 1;

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
    min-height: 10vh;
    min-width: var(--width-40px);
    background: var(--color-white);
    padding: var(--padding-m);
    border-radius: var(--border-radius-s);
    border-top: var(--color-white-background) solid 40px;
  }

  @media (max-width: 1024px) {
    .element {
      max-height: var(--height-70vh);
      width: var(--width-80vw);
      padding: var(--padding-m);
    }
  }
`;
