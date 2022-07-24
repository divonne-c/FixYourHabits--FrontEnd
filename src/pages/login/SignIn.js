import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContentLayout } from "../../styles - global/global/LayoutStyles";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import LoginForm from "../../components/forms/LoginForm";
import {
  ButtonPrimary,
  ButtonThird,
} from "../../styles - global/global/ButtonStyles";
import { Container } from "./Auth.styles";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import AuthNavigation from "../../components/navigations/AuthNavigation";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";

const SignIn = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
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
      {/*----- DESKTOP -----*/}
      <DesktopWHeight>
        <Container>
          <div className="auth-container">
            <div className="auth-title">
              <h1>Sign in</h1>
              <p>
                Log in with your account to <br /> fix your habits.
              </p>
            </div>

            <form onSubmit={makeLoginRequest}>
              <LoginForm handler={onChangeHandler} userData={userData} />
              <ButtonThird type="submit">Sign in</ButtonThird>
            </form>
          </div>

          <aside>
            <h1>New Here?</h1>
            <div>
              <p>Create an account</p>
              <p>to start your journey</p>
            </div>
            <ButtonPrimary onClick={() => navigate("/auth/create-account")}>
              Create account
            </ButtonPrimary>
          </aside>
        </Container>
      </DesktopWHeight>

      {/*----- MOBILE -----*/}
      <MobileWHeight>
        <AuthNavigation />
        <p>Log in with your account to fix your habits.</p>

        <CardContentMobile>
          <form onSubmit={makeLoginRequest}>
            <LoginForm handler={onChangeHandler} userData={userData} />
            <ButtonThird type="submit">Sign in</ButtonThird>
          </form>
        </CardContentMobile>
      </MobileWHeight>
    </ContentLayout>
  );
};

export default SignIn;
