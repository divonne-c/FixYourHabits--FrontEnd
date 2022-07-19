import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const DeleteAccount = () => {
  const { auth, setRenderData, renderData, logout } = useContext(AuthContext);

  const deleteAccountHandler = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios
        .delete(`http://localhost:8080/users/${auth.user.username}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => console.log(response));

      setRenderData(!renderData);
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button type="button" onClick={deleteAccountHandler}>
        Delete
      </button>
    </div>
  );
};

export default DeleteAccount;
