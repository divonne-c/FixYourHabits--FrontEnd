import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  color: var(--color-text-grey);
  background-color: var(--color-white);
  border-radius: var(--border-radius-s);
  box-shadow: var(--shadow-medium);

  .week {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--gap-xs);
    background-color: var(--color-pink);
    color: var(--color-white);
    padding: var(--padding-xs) var(--padding-s);
    border-radius: var(--border-radius-s);
  }

  .date-container {
    display: flex;
    justify-content: space-evenly;
    gap: var(--gap-xs);
  }

  .date {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-s) var(--padding-sm);
    border-radius: var(--border-radius-s);

    p {
      text-transform: uppercase;
      font-size: var(--font-xs);
    }
  }

  .current {
    background-color: var(--color-pink);
    color: var(--color-white);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    color: var(--color-text-grey);
    gap: var(--gap-xs);
    box-shadow: none;

    .week {
      flex-direction: row;
      justify-content: flex-start;
      gap: var(--gap-m);
      color: var(--color-text-grey);
      background-color: var(--color-white);
      font-size: var(--font-xs);
      padding: 0;
    }

    .date-container {
      justify-content: space-around;
    }

    .date {
      padding: var(--padding-xs);
      border-radius: var(--border-radius-m);

      h2 {
        font-size: var(--font-sm);
      }

      p {
        font-size: var(--font-xxs);
      }
    }

    .current {
      box-shadow: var(--shadow-medium);
    }
  }
`;
