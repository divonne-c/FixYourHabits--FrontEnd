import styled from "styled-components";

export const Container = styled.div`
  margin: 0 var(--margin-m);
  display: flex;

  .profile-image {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xs);

    button {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: var(--gap-xs);
      color: var(--color-orange);

      :hover {
        opacity: 0.7;
      }

      span {
        transform: scale(0.8);
      }

      p {
        font-size: var(--font-s);
        text-transform: uppercase;
      }
    }

    .img {
      font-size: var(--font-xl);
      background-color: var(--color-orange);
      color: var(--color-white);
      border-radius: var(--border-radius-xxl);
      padding: var(--padding-sm);
    }

    img {
      height: 150px;
      width: 150px;
      object-fit: cover;
      border-radius: var(--border-radius-xxl);
    }
  }

  .error {
    display: flex;
    align-items: center;
    gap: var(--gap-s);
    color: var(--color-error);
    text-align: center;
    margin-top: var(--margin-l);
  }
`;

export const ModalContainer = styled.div`
  .button-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: var(--margin-l);

    button {
      padding: var(--padding-s) var(--padding-m);
    }
  }
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: var(--margin-l);

  .profile-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border-radius: var(--border-radius-xxl);
    font-size: var(--font-xxl);
    background-color: var(--color-orange);
    color: var(--color-white);
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--border-radius-xxl);
  }

  .edit-btn {
    position: absolute;
    bottom: -20px;
    cursor: pointer;
    background-color: var(--color-white-input);
    color: var(--color-orange);
    padding: var(--padding-xs);
    border-radius: var(--border-radius-xl);

    input[type="file"] {
      display: none;
    }

    :hover {
      opacity: 0.9;
    }
  }
`;
