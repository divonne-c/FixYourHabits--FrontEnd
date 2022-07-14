import styled from "styled-components";

export const Message = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
  animation: slideIn 2s;
  color: var(--color-text-grey);

  .container {
    min-width: 200px;
    padding: var(--padding-s);
    display: flex;
    justify-content: space-between;
    gap: var(--gap-m);
  }

  .message {
    display: flex;
    align-items: center;
    gap: var(--gap-s);
  }

  .success {
    border-radius: var(--border-radius-s);
    background: var(--color-success-background);
    border: var(--color-success) var(--border-width-xs) solid;
    margin-right: var(--margin-m);

    span {
      color: #98bd98;
    }
  }

  .error {
    border-radius: var(--border-radius-s);
    background: var(--color-error-background);
    border: var(--color-error) var(--border-width-xs) solid;
    margin-right: var(--margin-m);

    span {
      color: #d58d8d;
    }
  }

  @keyframes slideIn {
    0% {
      margin-top: -4em;
      opacity: 0;
    }
    100% {
      margin-top: var(--margin-m);
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
