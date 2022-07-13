import styled from "styled-components";

export const Container = styled.div`
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
    height: 150px;
    width: 150px;
    border-radius: var(--border-radius-s);
    z-index: 1;
    display: flex;
    justify-content: center;
    gap: var(--gap-xs);
    align-items: center;
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
