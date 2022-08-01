import FaqContent from "../FaqContent";

const FaqHabitsContent = () => {
  return (
    <>
      <FaqContent
        question="What are habits?"
        answer={
          <p>
            Habits are rituals and behaviors that we perform almost every day.
            Like burshing your teeth or taking a shower. There are "bad" habits
            and "good" habits. On this app we will focus on the good ones!
          </p>
        }
      />
      <FaqContent
        question="How can I add a habit from Discover?"
        answer={
          <p>
            In <span>discover</span> we have a list of habits that are already
            made. You can add these habits simply by hovering over the habit and
            click on the <span>add button</span>.
          </p>
        }
      />
      <FaqContent
        question="How can I create a new habit?"
        answer={
          <div className="questions-container">
            <p>
              To create a new habit, you can go to <span>home</span> on your
              computer. Click on the{" "}
              <span className="material-symbols-outlined">add_box</span> button
              to make the habit.
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
        question="How do I edit a habit?"
        answer={
          <div className="questions-container">
            <p>
              To edit a habit, you need to go to <span>home</span>. Click on{" "}
              <span className="material-symbols-outlined">more_horiz</span>{" "}
              right above the habit to open the menu. You'll see a menu where
              you need to click on the edit{" "}
              <span className="material-symbols-outlined">edit</span> button.
            </p>
            <p>
              On your phone you need to click on the{" "}
              <span className="material-symbols-outlined">more_vert</span> on
              the right side of the habit. The same menu will open and you also
              need to click on the edit button.{" "}
            </p>
          </div>
        }
      />
      <FaqContent
        question="How do I delete a habit?"
        answer={
          <div className="questions-container">
            <p>
              To delete a habit, you need to go to <span>home</span>. Click on{" "}
              <span className="material-symbols-outlined">more_horiz</span>{" "}
              right above the habit to open the menu. You'll see a menu where
              you need to click on the delete{" "}
              <span className="material-symbols-outlined">delete</span> button.
            </p>
            <p>
              On your phone you need to click on the{" "}
              <span className="material-symbols-outlined">more_vert</span> on
              the right side of the habit. The same menu will open and you also
              need to click on the delete button.{" "}
            </p>
          </div>
        }
      />
      <FaqContent
        question="How do I complete a habit?"
        answer={
          <div className="questions-container">
            <p>
              To complete a habit, you need to go to <span>home</span>. Hover on
              the habit and you will see the complete button. To complete the
              habit you need to click on this button and the habit will be
              placed at the completed habits.
            </p>
            <p>
              On your phone you need to click on{" "}
              <span className="material-symbols-outlined">
                check_box_outline_blank
              </span>{" "}
              to complete a habit.
            </p>
          </div>
        }
      />
      <FaqContent
        question="Where can I find all my habits?"
        answer={
          <p>
            {" "}
            You can find all your habits at <span>home</span>. You can see al
            your habits that are completed and the habits that need to be
            completed.
          </p>
        }
      />
      <FaqContent
        question="Can I choose my own icon for a habit?"
        answer={
          <p>
            No, unfortunately you can not choose your own icon. The icon will be
            determined by the type of the habit.
          </p>
        }
      />
    </>
  );
};

export default FaqHabitsContent;
