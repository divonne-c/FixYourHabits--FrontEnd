import styled from "styled-components";

export const SettingStyles = styled.div`
  max-width: 1000px;
  min-width: 500px;
  margin: var(--margin-m);
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
`;

export const SettingStylesMobile = styled.div`
  height: 100%;
`;

export const PersonalInfo = styled.div`
  padding: var(--padding-m);
  display: flex;
  flex-direction: column;
  gap: var(--gap-s);

  .container,
  .info-container {
    //display: flex;
    //gap: var(--gap-l);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .container {
    //justify-content: space-between;
  }
`;

export const SecurityForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
  padding: var(--padding-l);
  min-width: 600px;

  @media (max-width: 1024px) {
    min-width: 100%;
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
`;
