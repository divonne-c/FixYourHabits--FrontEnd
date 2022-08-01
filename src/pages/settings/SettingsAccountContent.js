import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ProfileContext } from "../../context/ProfileContext";
import moment from "moment";
import ProfileImage from "../../components/account/ProfileImage";
import EditAccount from "../../components/account/EditAccount";
import ResetAccount from "../../components/account/ResetAccount";
import DeleteAccount from "../../components/account/DeleteAccount";
import { Card } from "../../globalstyles/CardHome";
import { Content, Div, PersonalInfo } from "./settings.styles";
import { ButtonFourth } from "../../globalstyles/ButtonStyles";

const SettingsAccountContent = () => {
  const { auth, logout, user } = useContext(AuthContext);
  const { userProfile } = useContext(ProfileContext);

  return (
    <Content>
      {/*PERSONAL INFO*/}
      <Card>
        <div className="card-container">
          <PersonalInfo>
            <h2>Account details</h2>
            <div className="container">
              <div className="info-container">
                <div>
                  <p>Username:</p>
                  <p>Email:</p>
                  <p>Role:</p>
                  {auth.isAuth && auth.user.role === "ROLE_USER" ? (
                    <p>Active since:</p>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  {/*USER*/}
                  {auth.isAuth && auth.user.role === "ROLE_USER" && user && (
                    <>
                      <p>{user.username}</p>
                      <p>{user.email}</p>
                      <p>User</p>
                      <p>
                        {userProfile &&
                          moment(userProfile.userStartDate).format(
                            "DD-MM-YYYY"
                          )}
                      </p>
                    </>
                  )}

                  {/*ADMIN*/}
                  {auth.isAuth && auth.user.role === "ROLE_ADMIN" && user && (
                    <>
                      <p>{user.username}</p>
                      <p>{user.email}</p>
                      <p>Admin</p>
                    </>
                  )}
                </div>
              </div>

              {/*IMAGE*/}
              {auth.isAuth && auth.user.role === "ROLE_USER" && (
                <div>
                  <ProfileImage role="user" />
                </div>
              )}

              {auth.isAuth && auth.user.role === "ROLE_ADMIN" && (
                <div>
                  <ProfileImage role="admin" />
                </div>
              )}
            </div>
          </PersonalInfo>
        </div>
      </Card>

      {/*EDIT INFORMATION*/}
      <Card>
        <div className="card-container">
          <div className="edit-account">
            <h2>Edit Information</h2>
            <EditAccount />
          </div>
        </div>
      </Card>

      {/*RESET ACCOUNT*/}
      <Card>
        <div className="card-container">
          <Div>
            <div className="description">
              <h2>Reset Account</h2>
              <p>
                If you reset your account, you will lose all of your progress
                and data
              </p>
            </div>

            {auth.isAuth && auth.user.role === "ROLE_USER" ? (
              <ResetAccount role="user" />
            ) : (
              <ResetAccount role="admin" />
            )}
          </Div>
        </div>
      </Card>

      {/*DELETE ACCOUNT*/}
      <Card>
        <div className="card-container">
          <Div>
            <div className="description">
              <h2>Delete Account</h2>
              <p>
                If you delete your account, you will lose all of your progress
                and data. Your account will be destroyed and it can not be
                restored.
              </p>
            </div>
            <DeleteAccount />
          </Div>
        </div>
      </Card>

      {/*SIGN OUT*/}
      <Card>
        <div className="card-container">
          <Div>
            <div className="description">
              <h2>Sign out</h2>
              <p>You will be signed out of your account.</p>
            </div>
            <ButtonFourth type="button" onClick={logout}>
              Sign out
            </ButtonFourth>
          </Div>
        </div>
      </Card>
    </Content>
  );
};

export default SettingsAccountContent;
