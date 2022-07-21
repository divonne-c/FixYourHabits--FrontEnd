import React, { useState } from "react";
import { ContentConainter } from "./Help.styles";

const FaqContent = ({ question, answer }) => {
  const [showContent, toggleShowContent] = useState(false);

  const show = () => {
    toggleShowContent(!showContent);
  };

  return (
    <ContentConainter>
      <button type="button" onClick={show}>
        <p className="question">{question}</p>
        <span className="material-symbols-outlined">
          {!showContent ? "add" : "horizontal_rule"}
        </span>
      </button>

      {showContent && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
    </ContentConainter>
  );
};

export default FaqContent;
