import React, { useState } from "react";
import { ContentContainer } from "./Help.styles";

const FaqContent = ({ question, answer }) => {
  const [showContent, toggleShowContent] = useState(false);

  const show = () => {
    toggleShowContent(!showContent);
  };

  return (
    <ContentContainer>
      <button type="button" onClick={show}>
        <p className="question">{question}</p>
        <span className="material-symbols-outlined">
          {!showContent ? "add" : "horizontal_rule"}
        </span>
      </button>

      {showContent && (
        <div className="answer">
          <div>{answer}</div>
        </div>
      )}
    </ContentContainer>
  );
};

export default FaqContent;
