import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Container, ModalContainer, Preview } from "./ProfileImage.styles";
import { ProfileContext } from "../../context/ProfileContext";
import ProfileImageContent from "./ProfileImageContent";

const ProfileImage = ({ role }) => {
  const [error, setError] = useState("");
  const [file, setFile] = useState([]);
  const [profilePicture, setProfilePicture] = useState("");
  const { auth, setRenderData, renderData, notifications, setNotifications } =
    useContext(AuthContext);
  const { userProfile, adminProfile } = useContext(ProfileContext);

  function handleImageChange(e) {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setProfilePicture(URL.createObjectURL(uploadedFile));
  }

  useEffect(() => {
    if (file.size > 1e6) {
      setError("The file is too large. Image size must be smaller than 1 MB.");
    } else {
      setError("");
    }
  }, [file]);

  async function sendImage(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `http://localhost:8080/${role}profiles/${auth.user.username}/photo`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNotifications([
        ...notifications,
        {
          type: "success",
          message: "Your profile picture has been updated successfully",
        },
      ]);
      setRenderData(!renderData);
      setError("");
    } catch (e) {
      console.error(e);
      setNotifications([
        ...notifications,
        {
          type: "error",
          message:
            "Something went wrong with uploading the image. Please try again.",
        },
      ]);
    }
  }

  return (
    <>
      {/*USER*/}
      {auth.isAuth && auth.user.role === "ROLE_USER" && (
        <ProfileImageContent
          profilePicture={profilePicture}
          sendImage={sendImage}
          profile={userProfile}
          handleImageChange={handleImageChange}
          error={error}
        />
      )}

      {/*ADMIN*/}
      {auth.isAuth && auth.user.role === "ROLE_ADMIN" && (
        <ProfileImageContent
          profilePicture={profilePicture}
          sendImage={sendImage}
          profile={adminProfile}
          handleImageChange={handleImageChange}
          error={error}
        />
      )}
    </>
  );
};

export default ProfileImage;
