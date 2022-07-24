import React, { useContext, useState } from "react";
import { ContentLayout } from "../../styles - global/global/LayoutStyles";
import { useNavigate } from "react-router-dom";
import CreateAccountForm from "../../components/forms/CreateAccountForm";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import { Container } from "./Auth.styles";
import {
  ButtonPrimary,
  ButtonThird,
} from "../../styles - global/global/ButtonStyles";
import bcrypt from "bcryptjs";
import AuthNavigation from "../../components/navigations/AuthNavigation";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import LoginForm from "../../components/forms/LoginForm";

const CreateAccount = () => {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });
  const [error, setError] = useState("");
  const { notifications, setNotifications } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const createAccountHandler = async (e) => {
    e.preventDefault();

    const data = {
      name: userData.name,
      username: userData.username,
      email: userData.email,
      password: bcrypt.hashSync(userData.password, 10),
    };

    if (userData.verifyPassword === userData.password) {
      try {
        await axios
          .post(`http://localhost:8080/users`, data)
          .then((response) => console.log(response));
        setNotifications([
          ...notifications,
          {
            type: "success",
            message:
              "You successfully created a new account. Login in to enter your account",
          },
        ]);

        navigate("/auth/sign-in");
      } catch (e) {
        console.error(e);
        setError("Username or email already in use.");
      }
    }
  };

  return (
    <ContentLayout>
      {/*----- DESKTOP -----*/}
      <DesktopWHeight>
        <Container>
          <div className="auth-container">
            <div className="auth-title">
              <h1>Get Started</h1>
              <p>
                Welcome to Fix Your Habits. <br /> Fill in your info to get
                started and fix your habits.
              </p>
            </div>

            <form onSubmit={createAccountHandler}>
              <CreateAccountForm
                handler={onChangeHandler}
                userData={userData}
              />
              {error && <p className="error">{error}</p>}
              <ButtonThird type="submit">Create</ButtonThird>
            </form>
          </div>

          <aside>
            <h1>Welcome Back!</h1>
            <div>
              <p>Already have an account?</p>
              <p>Click on the button below to sign in.</p>
            </div>
            <ButtonPrimary onClick={() => navigate("/auth/sign-in")}>
              Sign in
            </ButtonPrimary>
          </aside>
        </Container>
      </DesktopWHeight>

      {/*----- MOBILE -----*/}
      <MobileWHeight>
        <AuthNavigation />
        <p>Log in with your account to fix your habits.</p>

        <CardContentMobile>
          <form onSubmit={createAccountHandler}>
            <CreateAccountForm handler={onChangeHandler} userData={userData} />
            {error && <p className="error">{error}</p>}
            <ButtonThird type="submit">Create</ButtonThird>
          </form>
        </CardContentMobile>
      </MobileWHeight>
    </ContentLayout>
  );
};

export default CreateAccount;
