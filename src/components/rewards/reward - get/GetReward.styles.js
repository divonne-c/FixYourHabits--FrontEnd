import styled from "styled-components";

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

export const Container = styled.div`
  .reward-container {
    padding: var(--padding-s);
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-xs);
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: var(--font-sm);
    }
  }
`;
