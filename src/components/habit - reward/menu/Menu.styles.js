import styled from "styled-components";

export const Container = styled.div`
  .container {
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
    display: flex;
    justify-content: center;
    gap: var(--gap-xs);
    align-items: center;
    z-index: 1;
  }

  .reward {
    height: var(--height-reward);
    width: var(--width-reward);
  }

  @media (max-width: 1024px) {
    .button-container-mobile {
      display: flex;
      justify-content: space-evenly;
    }

    .cancel-button-container {
      text-align: center;
    }
  }
`;
