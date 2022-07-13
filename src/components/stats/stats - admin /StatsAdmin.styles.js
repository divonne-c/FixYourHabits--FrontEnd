import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 1024px) {
    margin-top: var(--margin-m);
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-m);
  padding: var(--padding-s);

  span {
    font-size: var(--font-l);
    background-color: var(--color-orange);
    color: var(--color-white);
    border-radius: var(--border-radius-l);
    padding: var(--padding-xs);
  }

  .role {
    color: var(--color-text-orange-dark);
  }

  @media (min-width: 1025px) and (max-width: 1150px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 1024px) {
    gap: var(--gap-l);
  }
`;
