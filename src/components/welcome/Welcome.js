import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Container } from "./Welcome.styles";
import axios from "axios";

const Welcome = () => {
  const [name, setName] = useState("");
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:8080/users/${auth.user.username}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setName(response.data.name);
      } catch (e) {
        console.error(e);
      }
    }
    auth.isAuth && getData();
  }, []);

  return (
    <Container>
      {name ? (
        <h1>
          Hi, <span>{name}</span>{" "}
        </h1>
      ) : (
        "Loading..."
      )}
      <p>Today is your opportunity to build the tomorrow you want</p>
    </Container>
  );
};

export default Welcome;
