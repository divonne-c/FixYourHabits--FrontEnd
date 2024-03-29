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
    overflow-x: scroll;
    scroll-behavior: smooth;
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
        min-width: 180px;
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

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-s);
  padding: 0 var(--padding-m) var(--padding-m) var(--padding-m);

  input[type="checkbox"] {
    transform: scale(1.5);
    position: relative;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 0 var(--padding-m) 0;
  }
`;
