import React, { useContext } from "react";
import {
  ContentLayout,
  InnerContentLayout,
} from "../../styles - global/global/LayoutStyles";
import SettingsNavigation from "../../components/navigations/SettingsNavigation";
import {
  Div,
  PersonalInfo,
  SettingStyles,
  SettingStylesMobile,
} from "./settings.styles";
import { CardContentMobile } from "../../styles - global/cards/CardContentMobile";
import {
  DesktopWHeight,
  MobileWHeight,
} from "../../styles - global/global/MediaQueryDisplay";
import { Card } from "../../styles - global/cards/CardHome";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";
import ProfileImage from "../../components/account/account - profile image/ProfileImage";
import moment from "moment";
import EditAccount from "../../components/account/account - edit personal info/EditAccount";
import ResetAccount from "../../components/account/account - reset account/ResetAccount";
import DeleteAccount from "../../components/account/account - delete account/DeleteAccount";
import { ButtonFourth } from "../../styles - global/global/ButtonStyles";

const SettingsAccount = () => {
  const { auth, logout } = useContext(AuthContext);
  const { userProfile, adminProfile } = useContext(ProfileContext);

  return (
    <>
      <ContentLayout>
        <InnerContentLayout>
          <SettingsNavigation />

          {/*------- DesktopWHeight --------*/}
          <DesktopWHeight>
            <SettingStyles>
              {/*TITLE*/}
              <div>
                <h1>General Details</h1>
                <p>
                  Update your personal infomation, reset or delete your account
                  here.
                </p>
              </div>

              {/*PERSONAL INFO*/}
              <Card>
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
                        <p>{auth.user && auth.user.username}</p>
                        <p>{auth.user && auth.user.email}</p>
                        <p>
                          {auth.user && auth.user.role === "ROLE_USER"
                            ? "User"
                            : "Admin"}
                        </p>
                        <p>
                          {auth.isAuth &&
                            auth.user.role === "ROLE_USER" &&
                            userProfile &&
                            moment(userProfile.userStartDate).format(
                              "DD-MM-YYYY"
                            )}
                        </p>
                      </div>
                    </div>

                    {/*IMAGE*/}
                    <div>
                      <ProfileImage />
                    </div>
                  </div>
                </PersonalInfo>
              </Card>

              <Card>
                <Div>
                  <div>
                    <h2>Edit Information</h2>
                    <EditAccount />
                  </div>
                </Div>
              </Card>

              <Card>
                <Div>
                  <div>
                    <h2>Reset Account</h2>
                    <p>
                      If you reset your account, you will lose all of your
                      progress and data
                    </p>
                  </div>
                  <ResetAccount />
                </Div>
              </Card>

              <Card>
                <Div>
                  <div>
                    <h2>Delete Account</h2>
                    <p>
                      If you delete your account, you will lose all of your
                      progress and data. Your account will be destroyed and it
                      can not be restored.
                    </p>
                  </div>
                  <DeleteAccount />
                </Div>
              </Card>

              <Card>
                <Div>
                  <div>
                    <h2>Sign out</h2>
                    <p>You will be signed out of your account.</p>
                  </div>
                  <ButtonFourth type="button" onClick={logout}>
                    Sign out
                  </ButtonFourth>
                </Div>
              </Card>
            </SettingStyles>
          </DesktopWHeight>

          {/*------- MobileWHeight --------*/}
          <MobileWHeight>
            <SettingStylesMobile>
              <CardContentMobile>
                <p>Settings account content mobile</p>
              </CardContentMobile>
            </SettingStylesMobile>
          </MobileWHeight>
        </InnerContentLayout>
      </ContentLayout>
    </>
  );
};

export default SettingsAccount;
