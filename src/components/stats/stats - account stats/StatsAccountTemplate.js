import React from "react";

const StatsAccountTemplate = ({ className, title, number }) => {
  return (
    <div className={`${className} stat`}>
      <p>{title}</p>
      <h1>{number}</h1>
    </div>
  );
};

export default StatsAccountTemplate;
