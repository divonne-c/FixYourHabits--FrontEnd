import React, { useState } from "react";
import Modal from "../modals/modal - normal/Modal";
import ModalButtons from "../modals/modal - buttons/ModalButtons";
import { Container, ModalContainer, Preview } from "./ProfileImage.styles";

const ProfileImageContent = ({
  profile,
  error,
  sendImage,
  handleImageChange,
  profilePicture,
}) => {
  const [showModal, toggleShowModal] = useState(false);

  const show = () => {
    toggleShowModal(!showModal);
  };

  return (
    <Container>
      {/*----- PROFILE IMAGE AND BUTTON -----*/}
      <div className="profile-image">
        {profile.file ? (
          <img src={profile.file.url} alt={profile.name} />
        ) : (
          <span className="material-symbols-outlined img">person</span>
        )}
        <button type="button" onClick={show}>
          <p>Edit</p>
          <span className="material-symbols-outlined">border_color</span>
        </button>
      </div>

      {/*----- MODAL -----*/}
      {showModal && (
        <Modal title="Edit Profile image">
          <ModalContainer>
            <form onSubmit={sendImage}>
              {/*PREVIEW*/}
              <Preview>
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt="Example of the chosen profile picture"
                    className="image-preview"
                  />
                ) : profile.file ? (
                  <img src={profile.file.url} alt={profile.name} />
                ) : (
                  <span className="material-symbols-outlined profile-icon">
                    person
                  </span>
                )}

                {/*BUTTONS*/}
                <label className="edit-btn">
                  <input
                    type="file"
                    name="image-field"
                    id="student-image"
                    onChange={handleImageChange}
                  />
                  <span className="material-symbols-outlined">edit</span>
                </label>
              </Preview>

              <ModalButtons show={show} buttonText="Save" />
            </form>

            {/*ERROR*/}
            {error && (
              <div className="error">
                <span className="material-symbols-outlined">error</span>
                {error}
              </div>
            )}
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
};

export default ProfileImageContent;
