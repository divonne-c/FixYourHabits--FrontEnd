import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--gap-s);

  input[type="text"],
  input[type="number"],
  input[type="password"],
  input[type="email"],
  textarea {
    width: var(--width-100);
    background-color: var(--color-white-input);
    padding: var(--padding-s);
    border: none;
    border-radius: var(--border-radius-s);
    margin-top: var(--margin-s);
  }

  input[type="text"]:focus,
  input[type="password"]:focus,
  input[type="email"]:focus,
  input[type="number"]:focus {
    outline-color: var(--color-orange);
  }

  input[type="radio"] {
    transform: scale(1.5);
    position: relative;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    gap: var(--gap-s);
  }
`;

export const RadioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: var(--gap-s);
  padding: var(--padding-s) var(--padding-xs);

  div {
    display: flex;
    gap: var(--gap-s);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Template = styled.div`
  display: flex;
  flex-direction: column;

  input::placeholder {
    font-family: "Material Icons";
    font-size: var(--font-sm);
    color: var(--color-orange);
    text-align: right;
  }

  span {
    color: var(--color-error);
    font-size: var(--font-xs);
    height: 10px;
    opacity: 0;
    margin-top: var(--margin-s);
  }

  input:invalid[focused="true"] {
    outline: var(--border-width-xs) solid var(--color-error);
  }

  input:invalid[focused="true"] ~ .error {
    opacity: 1;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--gap-m);
  margin-top: var(--margin-s);

  button {
    padding: var(--padding-s) var(--padding-m);
  }

  input {
    border: none;
    border-radius: var(--border-radius-m);
    padding: var(--padding-s) var(--padding-m);
    background-color: var(--color-orange);
    color: var(--color-white);
    text-transform: uppercase;

    :hover {
      cursor: pointer;
      background-color: var(--color-orange-salmon);
      color: var(--color-white);
    }
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;
