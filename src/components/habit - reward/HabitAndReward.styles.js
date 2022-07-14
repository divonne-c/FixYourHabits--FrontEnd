import styled from "styled-components";

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: var(--gap-xs);
  padding: var(--padding-s);
  height: var(--height-habit);
  width: var(--width-habit);
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

export const GetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
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

  .reward {
    height: var(--height-reward);
    width: var(--width-reward);
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
