import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
  margin: var(--margin-s) var(--margin-m);

  .habit-container {
    gap: var(--gap-s);
    padding: var(--padding-s) var(--padding-m) var(--padding-m) var(--padding-m);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HabitsMobile = styled.div`
  display: flex;
  flex-direction: column;

  .habit-container {
    background: var(--color-white-background);
    border-radius: var(--border-radius-s);
    padding: 2em;
  }

  .button-container {
    margin: var(--margin-l) 0 var(--margin-xs) 0;
    align-self: flex-end;
  }

  .admin-habit-container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-m);
    margin-top: var(--margin-m);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: var(--gap-xs);

  button {
    padding: var(--padding-s) var(--padding-s) var(--padding-m) var(--padding-s);
    margin-bottom: var(--margin-negative);
    color: var(--color-text-grey);
    border-radius: var(--border-radius-s) var(--border-radius-s) 0 0;
  }

  .active {
    color: var(--color-orange);
    background: var(--color-white);
  }

  @media (max-width: 1024px) {
    .active {
      background: var(--color-white-background);
    }
  }
`;

export const Sidebar = styled.div`
  background-color: var(--color-orange-light);
  padding: var(--padding-s) var(--padding-m);
`;
