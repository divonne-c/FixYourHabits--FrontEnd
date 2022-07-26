import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  grid-gap: var(--gap-s);
  margin: var(--margin-m) 0;
  color: var(--color-white);

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-s);
    border-radius: var(--border-radius-s);

    h1 {
      font-size: var(--font-l);
    }
  }

  .orange-dark {
    background: rgb(248, 163, 87);
    background: linear-gradient(
      180deg,
      rgba(248, 163, 87, 1) 0%,
      rgba(200, 144, 94, 1) 100%
    );
  }

  .pink-dark {
    background: rgb(251, 188, 168);
    background: linear-gradient(
      180deg,
      rgba(251, 188, 168, 1) 0%,
      rgba(243, 147, 117, 1) 100%
    );
  }

  .pink-light {
    background: rgb(251, 200, 168);
    background: linear-gradient(
      180deg,
      rgba(251, 200, 168, 1) 0%,
      rgba(245, 168, 119, 1) 100%
    );
  }

  .orange-light {
    background: rgb(254, 161, 101);
    background: linear-gradient(
      180deg,
      rgba(254, 161, 101, 1) 0%,
      rgba(221, 144, 94, 1) 100%
    );
  }

  @media (min-width: 1025px) and (max-width: 1150px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: var(--gap-xs);
    color: var(--color-white);

    .stat {
      padding: var(--padding-xs) 0;

      p {
        font-size: var(--font-xxs);
        font-weight: var(--font-weight-bold);
      }

      h1 {
        font-size: var(--font-m);
      }
    }
  }
`;
