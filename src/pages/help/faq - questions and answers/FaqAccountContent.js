import React from "react";
import FaqContent from "../FaqContent";

const FaqAccountContent = () => {
  return (
    <>
      <FaqContent
        question="How do I create an account?"
        answer={
          <p>
            To create an account you can go to the <span>register</span> page.
          </p>
        }
      />
      <FaqContent
        question="How do I delete my account?"
        answer={
          <p>
            To delete your account you can go to <span>settings</span>. You'll
            find the button to delete your account. Be aware that you can not
            restore your account and all your data will be lost.
          </p>
        }
      />
      <FaqContent
        question="How do I reset my account?"
        answer={
          <p>
            To reset your account you can go to <span>settings</span>. You'll
            find the button to reset your account. Be aware that all of your
            progress wil be lost.
          </p>
        }
      />

      <FaqContent
        question="Where can I change my personal information?"
        answer={
          <p>
            To edit your personal information you can go to{" "}
            <span>settings</span>. You can change your name or email under Edit
            Information.
          </p>
        }
      />

      <FaqContent
        question="Is it possible to change my username?"
        answer={
          <p>
            No, unfortunately it's not possible to edit your username. You can
            only change your name, email or password.
          </p>
        }
      />

      <FaqContent
        question="Where can I change my password?"
        answer={
          <p>
            To change your password you can go to <span>settings</span>. You
            have to fill in your current password and can choose a new one.
          </p>
        }
      />

      <FaqContent
        question="How can I add a profile picture to my account?"
        answer={
          <div className="answer">
            <p>
              To add a new profile picture or change the current one, you can go
              to <span>settings</span>. Under Account Details you can click on
              the EDIT button.
            </p>
            <p>
              Click on <span className="material-symbols-outlined">edit</span>{" "}
              to choose a picture. Be aware that the picture can not be bigger
              than 1 MB.
            </p>
          </div>
        }
      />

      <FaqContent
        question="What are Total Created at home?"
        answer={
          <p>
            On the right side in home you'll see the statistic{" "}
            <span>Total Created.</span> It means the total habit you have
            created. When you delete a habit, the total created habits will not
            decrease.
          </p>
        }
      />
      <FaqContent
        question="What are Total Completed at home?"
        answer={
          <p>
            {" "}
            On the right side in home you'll see the statistic{" "}
            <span>Total Completed.</span> It means the total habit you have
            completed. When you completed the habit but undo completing it on
            the same day, the total completed will decrease.
          </p>
        }
      />
      <FaqContent
        question="What are Days Active at home?"
        answer={
          <p>
            {" "}
            On the right side in home you'll see the statistic{" "}
            <span>Days Active.</span> It means the total days you have your
            account. When you reset your account, this number remains the same.
          </p>
        }
      />
      <FaqContent
        question="What does the information under Today at home mean?"
        answer={
          <p>
            On the right side in home you'll see the statistic{" "}
            <span>Today.</span> Here you will see the percentage of the current
            day. You will also see how many habits you have in total, the amount
            of habits you completed and the amount of habits you need to
            complete.
          </p>
        }
      />
    </>
  );
};

export default FaqAccountContent;
