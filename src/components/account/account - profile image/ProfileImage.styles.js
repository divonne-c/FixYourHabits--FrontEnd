import styled from "styled-components";

export const Container = styled.div`
  margin: 0 var(--margin-m);
  display: flex;

  input[type="file"] {
    display: none;
  }

  .profile-image {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xs);

    button {
      display: flex;
      //align-items: center;
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
      border-radius: var(--border-radius-l);
      padding: var(--padding-sm);
    }

    img {
      height: 150px;
      width: 150px;
      object-fit: cover;
      border-radius: var(--border-radius-xl);
    }
  }

  .edit-btn {
    cursor: pointer;
    border: 1px solid #ccc;
  }

  .preview {
    display: flex;
    flex-direction: column;

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: var(--border-radius-xl);
    }
  }
`;
