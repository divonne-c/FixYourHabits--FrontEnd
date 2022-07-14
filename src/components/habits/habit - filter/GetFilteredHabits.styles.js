import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-s);
  margin-top: var(--margin-m);

  .reward-icon {
    border-radius: var(--border-radius-s);
    background-color: var(--color-habit-food);

    span {
      font-size: var(--font-s);
      padding: var(--padding-xs);
      border-radius: var(--border-radius-l);
      background-color: var(--color-white);
    }
  }

  .reward {
    height: var(--height-reward);
    width: var(--width-reward);
    display: flex;
    justify-content: center;
  }

  .discover {
    height: 160px;
    width: 160px;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    display: grid;
    justify-content: center;

    .container-mobile {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
  }
`;
