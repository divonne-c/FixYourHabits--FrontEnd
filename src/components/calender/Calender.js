import React from "react";
import moment from "moment";
import { Container } from "./Calender.styles";
import CalenderTemplate from "./CalenderTemplate";

const Calender = () => {
  const weekNumber = moment().format("w");
  const monday = moment().startOf("week").weekday(1).format("DD-MM-YYYY");
  const sunday = moment().startOf("week").weekday(7).format("DD-MM-YYYY");

  return (
    <Container>
      {/*----- WEEK -----*/}
      <div className="week">
        <p>Week {weekNumber}</p>
        <p className="week-dates">
          {monday} - {sunday}
        </p>
      </div>

      {/*----- DAYS -----*/}
      <div className="date-container">
        <CalenderTemplate number={1} />
        <CalenderTemplate number={2} />
        <CalenderTemplate number={3} />
        <CalenderTemplate number={4} />
        <CalenderTemplate number={5} />
        <CalenderTemplate number={6} />
        <CalenderTemplate number={7} />
      </div>
    </Container>
  );
};

export default Calender;
