import styled from "styled-components";

export const HelpStyles = styled.div`
  margin: var(--margin-m);
  min-width: 600px;
  max-width: 1100px;

  .title {
    margin-bottom: var(--margin-m);
  }

  .form-container {
    padding: var(--padding-l);
  }
`;

export const HelpStylesMobile = styled.div`
  height: var(--height-100);

  .faq-container {
    margin: var(--margin-m);
    display: flex;
    flex-direction: column;
    gap: var(--gap-sm);
  }
`;

export const HelpFaqStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-l);
  margin: var(--margin-m);

  .content-container {
    display: flex;
    gap: var(--gap-xxxl);
  }

  .faq-container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-sm);
  }

  .title-link {
    color: var(--color-text-orange-dark);
  }
`;

export const FaqNavStylesMobile = styled.div`
  display: flex;
  justify-content: space-around;
  gap: var(--gap-m);
  color: var(--color-text-grey);
  margin: var(--margin-s) var(--margin-l);
`;

export const ContentContainer = styled.div`
  width: 30vw;
  border-bottom: solid var(--color-orange) var(--border-width-xxs);
  padding-bottom: var(--padding-m);

  button {
    width: var(--width-100);
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: var(--color-orange);
    }
  }

  .question {
    color: var(--color-text-grey);
    font-size: var(--font-sm);
    font-family: var(--font-family);
    font-weight: lighter;
  }

  .questions-container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-sm);
  }

  .answer {
    margin-top: var(--margin-s);
    display: flex;
    flex-direction: column;
    gap: var(--gap-s);

    a,
    span {
      color: var(--color-text-orange-dark);
    }
  }

  @media (max-width: 1024px) {
    width: var(--width-100);
    padding-bottom: var(--padding-s);
    font-size: var(--font-s);

    .question {
      font-size: var(--font-s);
      text-align: left;
    }

    .answer {
      margin-top: var(--margin-s);
    }
  }
`;

export const HelpMobile = styled.div`
  padding: var(--padding-s);
`;
