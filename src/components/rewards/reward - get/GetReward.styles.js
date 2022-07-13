import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-s);

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

  @media (max-width: 1024px) {
    display: grid;
    justify-content: center;

    .rewards-container-mobile {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
  }
`;

export const Reward = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: var(--gap-xs);
  padding: var(--padding-s);
  height: 150px;
  width: 150px;
  text-align: center;
  font-size: var(--font-s);
  position: relative;

  p {
    font-size: var(--font-xs);
  }

  h4 {
    text-transform: capitalize;
  }

  @media (max-width: 1024px) {
    height: 50px;
    width: var(--width-100);
    //width: 80vw;
    flex-direction: row;
    gap: var(--gap-s);

    span {
      transform: scale(0.8);
    }
  }
`;

export const RewardColor = styled.div`
  .pink {
    background-color: var(--color-pink);

    span {
      color: var(--color-pink);
    }
  }

  .green {
    background-color: var(--color-habit-food);

    span {
      color: var(--color-habit-food);
    }
  }

  .yellow {
    background-color: var(--color-habit-finance);

    span {
      color: var(--color-habit-finance);
    }
  }

  .blue {
    background-color: var(--color-habit-hobby);

    span {
      color: var(--color-habit-hobby);
    }
  }

  .purple {
    background-color: var(--color-habit-mind);

    span {
      color: var(--color-habit-mind);
    }
  }
`;

export const RewardIconColor = styled.div`
  .pink {
    span {
      color: var(--color-white);
      background-color: var(--color-pink);
    }
  }

  .green {
    span {
      color: var(--color-white);
      background-color: var(--color-habit-food);
    }
  }

  .yellow {
    span {
      color: var(--color-white);
      background-color: var(--color-habit-finance);
    }
  }

  .blue {
    span {
      color: var(--color-white);
      background-color: var(--color-habit-hobby);
    }
  }

  .purple {
    span {
      color: var(--color-white);
      background-color: var(--color-habit-mind);
    }
  }
`;
