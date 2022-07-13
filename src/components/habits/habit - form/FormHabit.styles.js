import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--gap-m);

  input[type="text"] {
    width: var(--width-100);
    background-color: var(--color-white-input);
    padding: var(--padding-s);
    border: none;
    border-radius: var(--border-radius-s);
    margin-top: var(--margin-s);
  }

  input[type="text"]:focus {
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

export const Container = styled.div`
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
