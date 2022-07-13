import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: var(--gap-s);

  @media (max-width: 1024px) {
    display: grid;
    justify-content: center;
    background-color: var(--color-white-background);
    border-radius: var(--border-radius-s);

    .habit-container-mobile {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
  }
`;

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
`;

export const Habit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: var(--gap-xs);
  padding: var(--padding-s);
  height: 120px;
  width: 120px;
  text-align: center;
  font-size: var(--font-s);
  position: relative;

  p {
    font-size: var(--font-xs);
  }

  h4 {
    text-transform: capitalize;
  }

  .complete-btn {
    position: absolute;
    top: 0;
    opacity: 0;
    height: var(--height-100);
    width: var(--width-100);
    background: var(--color-background-modal);
    border-radius: var(--border-radius-s);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :hover {
    cursor: pointer;
  }

  :hover .complete-btn {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    height: 50px;
    width: var(--width-100);
    flex-direction: row;
    gap: var(--gap-s);

    span {
      transform: scale(0.8);
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
