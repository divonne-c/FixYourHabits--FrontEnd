import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;
  gap: var(--gap-l);
  max-width: 1300px;
  min-height: 60%;
  margin: var(--margin-l);

  background-color: var(--color-white);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-medium);

  aside {
    height: 100%;
    background: var(--color-orange-salmon);
    border-radius: 0 var(--border-radius-xl) var(--border-radius-xl) 0;
    text-align: center;
  }

  aside,
  .auth-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--gap-m);
    padding: var(--padding-l);
  }

  .auth-container {
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    button {
      min-width: 30%;
      margin: var(--margin-l) auto;
    }
  }

  .auth-title {
    margin-bottom: var(--margin-m);
    text-align: center;

    p {
      color: var(--color-text-orange-light);
      margin-top: var(--margin-s);
    }
  }

  .error {
    color: var(--color-error);
    text-align: center;
  }
`;
