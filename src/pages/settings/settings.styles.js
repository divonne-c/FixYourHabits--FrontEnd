import styled from "styled-components";

export const SettingStyles = styled.div`
  max-width: 1000px;
  margin: var(--margin-m);
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
`;

export const SettingStylesMobile = styled.div`
  height: 100%;
`;

export const PersonalInfo = styled.div`
  padding: var(--padding-m) var(--padding-l);
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
