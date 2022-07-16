import styled from "styled-components";

export const Container = styled.div`
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
