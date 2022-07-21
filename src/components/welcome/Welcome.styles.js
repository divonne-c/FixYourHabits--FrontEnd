import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-weight: normal;
  }

  span {
    color: var(--color-orange);
    text-transform: capitalize;
  }

  @media (max-width: 1024px) {
    padding: var(--padding-s) var(--padding-s) 0 var(--padding-s);

    img {
      height: 20px;
      width: 20px;
    }
  }
`;
