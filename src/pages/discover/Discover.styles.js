import styled from "styled-components";

export const DiscoverStyles = styled.div`
  margin: var(--margin-s) var(--margin-l);
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);

  @media (max-width: 1024px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--gap-l);
  }
`;

export const DiscoverNavStyles = styled.div`
  display: flex;
  gap: var(--gap-m);
  color: var(--color-text-grey);
  margin: var(--margin-s) var(--margin-l);
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-m);
  border-radius: var(--border-radius-m);
  background-color: var(--color-white);
  padding: var(--padding-s) var(--padding-m);
  margin-left: var(--margin-m);

  h1 {
    text-align: center;
    border-bottom: 1px solid var(--color-white-background);
    font-weight: lighter;
  }

  @media (max-width: 1024px) {
    padding: 0;
  }
`;

export const DiscoverMobile = styled.div`
  .filter-container {
    display: flex;
    justify-content: flex-end;
    margin: var(--margin-xs) var(--margin-s) var(--margin-s) var(--margin-s);
  }

  .filter-button {
    display: flex;
    align-items: center;
    gap: var(--gap-s);
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 30vh;
  background-color: var(--color-orange-active);
  border-radius: var(--border-radius-m);
  position: relative;
  margin-top: var(--margin-s);

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-m);
    box-shadow: var(--shadow-medium);
  }

  .banner-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: var(--gap-m);
    margin: var(--margin-l);

    h1 {
      color: var(--color-orange);
    }
  }

  @media (max-width: 1024px) {
    min-height: 30vh;
    margin-top: 0;
    text-align: center;

    .banner-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin: var(--margin-xs);
    }

    p {
      width: 80%;
    }
  }
`;

export const Habits = styled.div`
  margin-top: var(--margin-s);
  display: flex;
  gap: var(--gap-s);
  overflow-x: scroll;
`;
