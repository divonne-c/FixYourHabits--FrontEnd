import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContentLayout } from "../../styles - global/global/LayoutStyles";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  async function makeLoginRequest(e) {
    e.preventDefault();

    const data = {
      username: userName,
      password: password,
    };

    ///////////// Post request: login /////////////
    try {
      // request
      const response = await axios.post(
        "http://localhost:8080/authenticate",
        data
      );

      login(response.data.jwt);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <ContentLayout>
      <h1>Sign in</h1>

      <form onSubmit={makeLoginRequest}>
        <label htmlFor="username">Username</label>
        <input type="text" value={userName} onChange={emailChangeHandler} />
        <label htmlFor="password">Password</label>
        <input type="text" value={password} onChange={passwordChangeHandler} />
        <button type="submit">log in</button>
      </form>

      <button onClick={() => navigate("/auth/create-account")}>
        Create account
      </button>
    </ContentLayout>
  );
};

export default SignIn;
