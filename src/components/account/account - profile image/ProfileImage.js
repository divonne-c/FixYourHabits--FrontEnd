import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { Container } from "./ProfileImage.styles";
import { ProfileContext } from "../../../context/ProfileContext";

const ProfileImage = () => {
  const [error, setError] = useState("");
  const [file, setFile] = useState([]);
  const [profilePicture, setProfilePicture] = useState("");
  const { auth, setRenderData, renderData } = useContext(AuthContext);
  const { userProfile } = useContext(ProfileContext);

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
            `http://localhost:8080/userprofiles/${auth.user.username}/photo`,
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
      <div className="profile-image">
        {userProfile && userProfile.file ? (
          <img src={userProfile.file.url} alt={userProfile.name} />
        ) : (
          <span className="material-symbols-outlined">person</span>
        )}
      </div>
      <form onSubmit={sendImage}>
        <label className="edit-btn">
          <input
            type="file"
            name="image-field"
            id="student-image"
            onChange={handleImageChange}
          />
          <span className="material-symbols-outlined">edit</span>
        </label>

        {/*PREVIEW*/}
        {profilePicture && (
          <label>
            Preview:
            <img
              src={profilePicture}
              alt="Voorbeeld van de afbeelding die zojuist gekozen is"
              className="image-preview"
            />
          </label>
        )}
        <button type="submit">Uploaden</button>
      </form>
    </Container>
  );
};

export default ProfileImage;
