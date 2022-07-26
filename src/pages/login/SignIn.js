import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContentLayout } from "../../styles - global/global/LayoutStyles";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import LoginForm from "../../components/forms/LoginForm";
import AuthNavigation from "../../components/navigations/AuthNavigation";
import {
  ButtonPrimary,
  ButtonThird,
} from "../../styles - global/global/ButtonStyles";
import { Container, MobileContainer } from "./Auth.styles";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";

const SignIn = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  async function makeLoginRequest(e) {
    e.preventDefault();

    const data = {
      username: userData.username,
      password: userData.password,
    };

    try {
      // request
      const response = await axios.post(
        "http://localhost:8080/authenticate",
        data
      );

      login(response.data.jwt);
    } catch (e) {
      console.error(e);
      setError("Incorrect username or password");
    }
  }

  return (
    <ContentLayout>
      {/*----- DESKTOP -----*/}
      <DesktopWHeight>
        <Container>
          <div className="sign-in content-container">
            <div className="auth-container">
              <div className="auth-title">
                <h1>Sign in</h1>
                <p>
                  Log in with your account to <br /> fix your habits.
                </p>
              </div>

              <form onSubmit={makeLoginRequest}>
                <LoginForm handler={onChangeHandler} userData={userData} />
                {error && <p className="error">{error}</p>}
                <ButtonThird type="submit">Sign in</ButtonThird>
              </form>
            </div>

            <aside className="aside-right">
              <h1>New Here?</h1>
              <div>
                <p>Create an account</p>
                <p>to start your journey</p>
              </div>
              <ButtonPrimary onClick={() => navigate("/auth/create-account")}>
                Create account
              </ButtonPrimary>
            </aside>
          </div>
        </Container>
      </DesktopWHeight>

      {/*----- MOBILE -----*/}
      <MobileWHeight>
        <AuthNavigation />

        <MobileContainer>
          <div className="auth-title">
            <p>Log in with your account to fix your habits.</p>
          </div>

          <CardContentMobile>
            <div className="form-container">
              <form onSubmit={makeLoginRequest}>
                <LoginForm handler={onChangeHandler} userData={userData} />
                <ButtonThird type="submit">Sign in</ButtonThird>
              </form>
            </div>
          </CardContentMobile>
        </MobileContainer>
      </MobileWHeight>
    </ContentLayout>
  );
};

export default SignIn;
