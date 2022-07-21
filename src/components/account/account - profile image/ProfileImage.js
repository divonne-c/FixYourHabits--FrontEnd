import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { Container, ModalContainer, Preview } from "./ProfileImage.styles";
import { ProfileContext } from "../../../context/ProfileContext";
import Modal from "../../modals/modal - normal/Modal";
import {
  ButtonFourth,
  ButtonThird,
} from "../../../styles - global/global/ButtonStyles";

const ProfileImage = ({ role }) => {
  const [showModal, toggleShowModal] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState([]);
  const [profilePicture, setProfilePicture] = useState("");
  const { auth, setRenderData, renderData } = useContext(AuthContext);
  const { userProfile, adminProfile } = useContext(ProfileContext);

  const show = () => {
    toggleShowModal(!showModal);
  };

  function handleImageChange(e) {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setProfilePicture(URL.createObjectURL(uploadedFile));
  }

  useEffect(() => {
    if (file.size > 1e6) {
      setError("file is too large");
    }
  }, [file]);

  async function sendImage(e) {
    if (error) {
      console.log("error is er");
    } else {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", file);

      const token = localStorage.getItem("token");

      try {
        const result = await axios
          .post(
            `http://localhost:8080/${role}profiles/${auth.user.username}/photo`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            console.log(response);
            setRenderData(!renderData);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (e) {
        console.error(e);
      }
    }
  }
  return (
    <Container>
      {error}
      {auth.isAuth && auth.user.role === "ROLE_USER" && (
        <>
          <div className="profile-image">
            {auth.user.role === "ROLE_USER" &&
            userProfile &&
            userProfile.file ? (
              <img src={userProfile.file.url} alt={userProfile.name} />
            ) : (
              <span className="material-symbols-outlined img">person</span>
            )}
            <button type="button" onClick={show}>
              <p>Edit</p>
              <span className="material-symbols-outlined">border_color</span>
            </button>
          </div>

          {showModal && (
            <Modal title="Edit Profile image">
              <ModalContainer>
                <form onSubmit={sendImage}>
                  {/*PREVIEW*/}
                  <Preview>
                    {profilePicture ? (
                      <img
                        src={profilePicture}
                        alt="Voorbeeld van de afbeelding die zojuist gekozen is"
                        className="image-preview"
                      />
                    ) : // ) :
                    userProfile.file ? (
                      <img src={userProfile.file.url} alt={userProfile.name} />
                    ) : (
                      <span className="material-symbols-outlined profile-icon">
                        person
                      </span>
                    )}

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
                  <div className="button-container">
                    <ButtonFourth type="button" onClick={show}>
                      Cancel
                    </ButtonFourth>
                    <ButtonThird type="submit">Save</ButtonThird>
                  </div>
                </form>
              </ModalContainer>
            </Modal>
          )}
        </>
      )}

      {auth.isAuth && auth.user.role === "ROLE_ADMIN" && (
        <>
          <div className="profile-image">
            {adminProfile && adminProfile.file ? (
              <img src={adminProfile.file.url} alt={adminProfile.name} />
            ) : (
              <span className="material-symbols-outlined img">person</span>
            )}
            <button type="button" onClick={show}>
              <p>Edit</p>
              <span className="material-symbols-outlined">border_color</span>
            </button>
          </div>

          {showModal && (
            <Modal title="Edit Profile image">
              <ModalContainer>
                <form onSubmit={sendImage}>
                  {/*PREVIEW*/}
                  <Preview>
                    {profilePicture ? (
                      <img
                        src={profilePicture}
                        alt="Voorbeeld van de afbeelding die zojuist gekozen is"
                        className="image-preview"
                      />
                    ) : // ) :
                    adminProfile.file ? (
                      <img
                        src={adminProfile.file.url}
                        alt={adminProfile.name}
                      />
                    ) : (
                      <span className="material-symbols-outlined profile-icon">
                        person
                      </span>
                    )}

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
                  <div className="button-container">
                    <ButtonFourth type="button" onClick={show}>
                      Cancel
                    </ButtonFourth>
                    <ButtonThird type="submit">Save</ButtonThird>
                  </div>
                </form>
              </ModalContainer>
            </Modal>
          )}
        </>
      )}
    </Container>
  );
};

export default ProfileImage;
