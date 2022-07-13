import React from "react";
import moment from "moment";

const CalenderTemplate = ({ number }) => {
  const weekday = (day) => {
    return moment().startOf("isoWeek").weekday(day).format("DD");
  };

  const weekName = (day) => {
    return moment().startOf("week").weekday(day).format("ddd");
  };

  const currentDay = (day) => {
    if (day === weekName(moment().day())) {
      return "current";
    } else {
      return "";
    }
  };

  return (
    <div className={`date ${currentDay(weekName(number))}`}>
      <h2>{weekday(number)}</h2>
      <p>{weekName(number)}</p>
    </div>
  );
};

export default CalenderTemplate;
