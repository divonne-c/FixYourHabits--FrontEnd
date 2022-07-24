import styled from "styled-components";

export const MenuButtonContainer = styled.div`
  span {
    font-size: var(--font-m);
    padding: var(--padding-xxs);
    border-radius: var(--border-radius-s);
    color: var(--color-text-orange-dark);
  }

  @media (max-width: 1024px) {
    p {
      font-size: var(--font-s);
      text-transform: capitalize;
    }

    .menu-button-container {
      display: flex;
      align-items: center;
      gap: var(--gap-xxs);
    }
  }
`;

export const DotsButton = styled.button`
  color: var(--color-orange);
  height: 18px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    transform: rotate(90deg);
  }
`;
