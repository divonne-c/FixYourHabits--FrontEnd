import styled from "styled-components";

export const Container = styled.div`
  width: var(--width-100);
`;

export const SettingStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
  max-width: 1000px;
  min-width: 500px;
  margin: var(--margin-m);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);

  .edit-account {
    display: flex;
    flex-direction: column;
    gap: var(--gap-m);
    padding: var(--padding-m);
  }

  @media (max-width: 1024px) {
    margin-top: 0;

    .card-container {
      border-bottom: 1px solid var(--color-white-background);
    }
  }
`;

export const SettingStylesMobile = styled.div`
  height: var(--height-100);
`;

export const PersonalInfo = styled.div`
  padding: var(--padding-m);
  display: flex;
  flex-direction: column;

  .container,
  .info-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .container {
      display: flex;
      flex-direction: column-reverse;
      grid-gap: var(--gap-m);
    }

    .info-container {
      display: flex;
      justify-content: center;
      gap: var(--gap-m);
    }
  }
`;

export const SecurityForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
  padding: var(--padding-l);
  min-width: 600px;

  @media (max-width: 1024px) {
    min-width: var(--width-100);
    padding: var(--padding-m);
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-m);
  padding: var(--padding-m);

  button {
    min-width: 200px;
    box-shadow: var(--shadow-medium);
  }

  @media (max-width: 1024px) {
    gap: var(--gap-s);

    .description {
      display: flex;
      flex-direction: column;
      gap: var(--gap-s);
      font-size: var(--font-xs);
    }

    button {
      min-width: 30vw;
    }
  }
`;
