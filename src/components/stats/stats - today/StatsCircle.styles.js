import styled from "styled-components";

export const Circle = styled.div`
  .svg {
    display: inline-block;
    max-width: 100%;
  }

  .svg-circle-bg {
    fill: none;
    transform: rotate(-90, 25px, 25px);
    stroke: var(--color-white-background);
    stroke-width: 7px;
  }

  .svg-circle {
    fill: none;
    stroke: var(--color-orange);
    stroke-width: 7px;
  }

  .svg-circle-text {
    text-anchor: middle;
    dominant-baseline: middle;
    font-size: var(--font-s);
    fill: var(--color-orange);
  }

  @media (max-width: 1024px) {
    .svg-circle-text {
      font-size: var(--font-sm);
    }
  }
`;
