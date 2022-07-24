import styled from "styled-components";

export const HabitColorStyle = styled.div`
  .sport {
    background-color: var(--color-habit-sport);
    border-radius: var(--border-radius-s);
    width: var(--width-100);

    span {
      background: var(--color-white);
      color: var(--color-habit-sport);
      border-radius: var(--border-radius-xl);
      max-width: var(--width-40px);
      padding: var(--padding-xs);
    }
  }

  .food {
    background-color: var(--color-habit-food);
    border-radius: var(--border-radius-s);
    width: var(--width-100);

    span {
      background: var(--color-white);
      color: var(--color-habit-food);
      border-radius: var(--border-radius-xl);
      max-width: var(--width-40px);
      padding: var(--padding-xs);
    }
  }

  .mind {
    background-color: var(--color-habit-mind);
    border-radius: var(--border-radius-s);
    width: var(--width-100);

    span {
      background: var(--color-white);
      color: var(--color-habit-mind);
      border-radius: var(--border-radius-xl);
      max-width: var(--width-40px);
      padding: var(--padding-xs);
    }
  }

  .health {
    background-color: var(--color-habit-health);
    border-radius: var(--border-radius-s);
    width: var(--width-100);

    span {
      background: var(--color-white);
      color: var(--color-habit-health);
      border-radius: var(--border-radius-xl);
      max-width: var(--width-40px);
      padding: var(--padding-xs);
    }
  }

  .hobby {
    background-color: var(--color-habit-hobby);
    border-radius: var(--border-radius-s);
    width: var(--width-100);

    span {
      background: var(--color-white);
      color: var(--color-habit-hobby);
      border-radius: var(--border-radius-xl);
      max-width: var(--width-40px);
      padding: var(--padding-xs);
    }
  }

  .finance {
    background-color: var(--color-habit-finance);
    border-radius: var(--border-radius-s);
    width: var(--width-100);

    span {
      background: var(--color-white);
      color: var(--color-habit-finance);
      border-radius: var(--border-radius-xl);
      max-width: var(--width-40px);
      padding: var(--padding-xs);
    }
  }

  .business {
    background-color: var(--color-habit-business);
    border-radius: var(--border-radius-s);
    width: var(--width-100);

    span {
      background: var(--color-white);
      color: var(--color-habit-business);
      border-radius: var(--border-radius-xl);
      max-width: var(--width-40px);
      padding: var(--padding-xs);
    }
  }

  .study {
    background-color: var(--color-habit-study);
    border-radius: var(--border-radius-s);
    width: var(--width-100);

    span {
      background: var(--color-white);
      color: var(--color-habit-study);
      border-radius: var(--border-radius-xl);
      max-width: var(--width-40px);
      padding: var(--padding-xs);
    }
  }

  .home {
    background-color: var(--color-habit-home);
    border-radius: var(--border-radius-s);
    width: var(--width-100);

    span {
      background: var(--color-white);
      color: var(--color-habit-home);
      border-radius: var(--border-radius-xl);
      max-width: var(--width-40px);
      padding: var(--padding-xs);
    }
  }

  .family {
    background-color: var(--color-habit-family);
    border-radius: var(--border-radius-s);
    width: var(--width-100);

    span {
      background: var(--color-white);
      color: var(--color-habit-family);
      border-radius: var(--border-radius-xl);
      max-width: var(--width-40px);
      padding: var(--padding-xs);
    }
  }
`;

export const ContainerMobile = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    width: 75vw;
  }
`;

export const HabitMobile = styled.div`
  display: flex;
  padding: var(--padding-xxs);
  box-shadow: var(--shadow-medium);
  border-radius: var(--border-radius-s);
`;
