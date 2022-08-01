import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import Modal from "../../modals/modal - normal/Modal";
import { ButtonFourth } from "../../../globalstyles/ButtonStyles";
import { ProfileContext } from "../../../context/ProfileContext";
import rewards from "../../../helpers/rewards";

const CreateUserReward = () => {
  const [exist, toggleExist] = useState(false);
  const [showReward, toggleShowReward] = useState(false);
  const { auth, setRenderData, renderData } = useContext(AuthContext);
  const { userProfile, adminRewards } = useContext(ProfileContext);

  const show = () => {
    toggleShowReward(false);
  };

  useEffect(() => {
    const rewardName = rewards(userProfile.totalHabits);
    let getReward = {};

    userProfile.userRewards &&
      userProfile.userRewards.find((reward) => {
        if (userProfile.userRewards.length > 0 && reward.name === rewardName) {
          return toggleExist(true);
        }
      });

    adminRewards &&
      adminRewards.find((reward) => {
        if (reward.name === rewardName && exist === false) {
          return (getReward = reward);
        }
      });

    if (getReward && Object.keys(getReward).length > 0) {
      const data = {
        name: getReward.name,
        type: getReward.type,
        description: getReward.description,
        userProfile: {
          id: auth.user.id,
        },
      };

      const token = localStorage.getItem("token");

      async function makeReward() {
        try {
          await axios.post(`http://localhost:8080/userrewards/`, data, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          setRenderData(!renderData);
          toggleShowReward(true);
          getReward = {};
        } catch (e) {
          console.error(e);
        }
      }

      getReward && makeReward();
      toggleExist(false);
    }
  }, [userProfile.totalHabits]);

  return (
    <>
      {userProfile.userRewards &&
        userProfile.userRewards.map((reward) => {
          return (
            <div key={reward.id}>
              {showReward && (
                <Modal title="Congratulations!">
                  <div className="modal-reward">
                    <span className="material-symbols-outlined">
                      workspace_premium
                    </span>
                    <p>You have earned a reward for:</p>
                    <p className="reward-description">{reward.description}</p>
                    <ButtonFourth onClick={show}>close</ButtonFourth>
                  </div>
                </Modal>
              )}
            </div>
          );
        })}
    </>
  );
};

export default CreateUserReward;
