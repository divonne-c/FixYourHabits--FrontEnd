import styled from "styled-components";

export const Container = styled.div`
  margin-top: var(--margin-m);

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--gap-s);
    padding: var(--padding-s) 0;
  }

  .today {
    border-left: 1px solid var(--color-white-input);
  }

  .today-content {
    display: flex;
    align-items: center;
    gap: var(--gap-s);
    padding-left: var(--padding-m);

    h2 {
      text-align: center;
      font-weight: var(--font-weight-bold);
    }
  }

  @media (min-width: 1025px) and (max-width: 1150px) {
    flex-direction: column;

    .today {
      border: none;
      border-top: 1px solid var(--color-white-input);
    }
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: var(--gap-m);

    .title {
      font-size: var(--font-sm);
    }

    .today {
      border: none;
    }

    .today-content {
      h2 {
        font-size: var(--font-s);
      }
    }
  }
`;
