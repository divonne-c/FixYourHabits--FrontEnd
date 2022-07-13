import styled from "styled-components";

export const Container = styled.div`
  .modal {
    text-align: center;

    .modal-reward {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: var(--gap-m);

      span {
        font-size: var(--font-xxxl);
        color: var(--color-orange);
      }

      .reward-description {
        color: var(--color-text-orange-dark);
        font-size: var(--font-m);
      }

      button {
        width: 30%;
        margin: var(--margin-m) auto 0 auto;
      }
    }
`;
