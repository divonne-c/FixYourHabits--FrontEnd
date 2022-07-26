import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Container } from "./Welcome.styles";

const Welcome = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      {user.name ? (
        <h1>
          Hi, <span>{user.name}</span>{" "}
        </h1>
      ) : (
        "Loading..."
      )}
      <p>Today is your opportunity to build the tomorrow you want</p>
    </Container>
  );
};

export default Welcome;
