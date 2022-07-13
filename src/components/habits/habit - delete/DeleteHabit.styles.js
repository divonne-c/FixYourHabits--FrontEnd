import styled from "styled-components";

export const HabitMenuContainer = styled.div`
  span {
    font-size: var(--font-m);
    padding: var(--padding-xxs);
    border-radius: var(--border-radius-s);
    color: var(--color-text-orange-dark);
  }

  @media (max-width: 1024px) {
    .container {
      display: flex;
      align-items: center;
      gap: var(--gap-xs);
    }

    p {
      font-size: var(--font-s);
    }

    .container:hover {
      opacity: 0.8;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--gap-m);
`;
