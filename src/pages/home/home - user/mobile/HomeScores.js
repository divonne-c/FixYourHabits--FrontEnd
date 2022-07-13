import React, { useContext, useEffect, useState } from "react";
import {
  ContentLayout,
  InnerContentLayout2,
} from "../../../../styles - global/global/LayoutStyles";
import { Mobile } from "../../../../styles - global/media/MediaQueryDisplay";
import { AuthContext } from "../../../../context/AuthContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const HomeScores = () => {
  const [profileData, setProfileData] = useState();
  const { auth } = useContext(AuthContext);
  let { userId } = useParams();

  useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:8080/userprofiles/${auth.user.username}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfileData(response.data);
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, []);

  return (
    <ContentLayout>
      <Mobile>
        <InnerContentLayout2>
          <p>main</p>
        </InnerContentLayout2>
      </Mobile>
    </ContentLayout>
  );
};

export default HomeScores;
