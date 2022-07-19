import styled from "styled-components";

export const Container = styled.div`
  margin: 0 var(--margin-m);
  display: flex;

  input[type="file"] {
    display: none;
  }

  .profile-image {
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
`;
