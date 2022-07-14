import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-s);
  padding: 0 var(--padding-m) var(--padding-m) var(--padding-m);

  input[type="checkbox"] {
    transform: scale(1.5);
    position: relative;
    cursor: pointer;
  }
  //
  //input[type="checkbox"]:before {
  //  content: "";
  //  position: absolute;
  //  width: var(--width-100);
  //  height: var(--height-100);
  //  background-color: var(--color-white-background);
  //  z-index: 1;
  //}
  //
  //.checked input[type="checkbox"]:before {
  //  font-family: "Material Icons";
  //  content: "\\e876";
  //  display: flex;
  //  align-items: center;
  //  justify-content: center;
  //  background-color: var(--color-orange);
  //  color: var(--color-white);
  //}
`;
