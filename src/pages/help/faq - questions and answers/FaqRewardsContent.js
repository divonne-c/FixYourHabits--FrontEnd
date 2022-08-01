import FaqContent from "../FaqContent";

const FaqRewardsContent = () => {
  return (
    <>
      <FaqContent
        question="How do I earn rewards?"
        answer={
          <div className="questions-container">
            <p>
              To earn rewards you'll need to create habits. You can create
              habits on your computer at <span>home</span>. Click on the{" "}
              <span className="material-symbols-outlined">add_box</span> button
              to create a habit.
            </p>

            <p>
              You can click on the{" "}
              <span className="material-symbols-outlined">add_circle</span>{" "}
              button in the navigation on your phone to create a new habit.
            </p>
          </div>
        }
      />

      <FaqContent
        question="Can I create rewards?"
        answer={
          <p>
            No, you can not create rewards. You can only earning them by
            creating habits.
          </p>
        }
      />

      <FaqContent
        question="Can I delete rewards?"
        answer={
          <p>
            No, you can not delete rewards. Once you earned the reward it will
            stay in your account. The only way to delete the rewards is by
            resetting your account. Be aware that all of your progress will be
            lost.
          </p>
        }
      />

      <FaqContent
        question="Can I edit rewards?"
        answer={<p>No, you can not edit rewards.</p>}
      />

      <FaqContent
        question="Where can I find my rewards?"
        answer={
          <p>
            You'll find all of your rewards at <span>home</span> under Rewards.
            You can click on the reward to see more information.
          </p>
        }
      />
    </>
  );
};

export default FaqRewardsContent;
