import styled from "styled-components";

export const Container = styled.div`
  .content-container {
    max-width: 1300px;
    min-height: 80vh;
    display: grid;
    justify-content: center;
    align-items: center;
    gap: var(--gap-l);
    margin: var(--margin-l);
    background-color: var(--color-white);
    border-radius: var(--border-radius-xl);
    box-shadow: var(--shadow-medium);
  }

  .error {
    color: var(--color-error);
    text-align: center;
    margin-top: var(--margin-s);
  }

  .sign-in {
    grid-template-columns: 2fr 1fr;
  }

  .create-account {
    grid-template-columns: 1fr 2fr;
  }

  aside {
    height: var(--height-100);
    background: var(--color-orange-salmon);
    text-align: center;
  }

  .aside-left {
    border-radius: var(--border-radius-xl) 0 0 var(--border-radius-xl);
  }

  .aside-right {
    border-radius: 0 var(--border-radius-xl) var(--border-radius-xl) 0;
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
      width: var(--width-100);
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

export const MobileContainer = styled.div`
  @media (max-width: 1024px) {
    .auth-title {
      text-align: center;
      color: var(--color-text-orange-light);
      padding: var(--padding-m);
    }

    .form-container {
      padding: var(--padding-s);

      button {
        display: flex;
        margin: var(--margin-m) auto 0 auto;
        box-shadow: var(--shadow-medium);
      }
    }
  }
`;
