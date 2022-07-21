import styled from "styled-components";

export const Container = styled.div`
  .discover-all {
    display: flex;
    gap: var(--gap-s);
    flex-wrap: wrap;
  }

  .discover-main {
    display: flex;
    gap: var(--gap-s);
  }

  .discover {
    height: 160px;
    width: 160px;
    display: flex;
    justify-content: center;
  }

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
    .discover-main {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      margin-top: var(--margin-xs);
      overflow: scroll;

      .discover-main-element {
        min-height: 120px;
        min-width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--gap-xs);
        text-align: center;
        font-size: var(--font-s);
        position: relative;
      }
    }

    .discover-all {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--gap-xs);

      .discover-all-element {
        min-width: 0;
      }
    }
  }
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: var(--gap-xs);
  padding: var(--padding-s) var(--padding-xxs);
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

  .large-element {
    height: 160px;
    width: 160px;
  }

  :hover {
    cursor: pointer;
  }

  :hover .complete-btn {
    opacity: 1;
  }
`;

export const ElementMobile = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: var(--gap-xxs);
  padding: var(--padding-xs);
  min-height: 120px;

  .name-habit {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  span {
    transform: scale(0.7);
  }

  h4 {
    font-size: var(--font-xs);
    font-weight: bolder;
  }

  p {
    font-size: var(--font-xs);
    border-left: 1px solid white;
    padding-left: var(--padding-s);
  }

  .complete-btn-mobile {
    position: absolute;
    left: 0;
    top: 0;
  }

  .add-button-mobile {
    button {
      padding: 2px 0 0 5px;
      background-color: transparent;
      color: var(--color-white);
      font-size: var(--font-m);
      border-radius: 5px;
      border: none;
    }
  }
`;
