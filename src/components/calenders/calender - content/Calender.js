import React from "react";
import moment from "moment";
import { Container } from "./Calender.styles";
import CalenderTemplate from "../calender - template/CalenderTemplate";

const Calender = () => {
  const weekNumber = moment().format("w");
  const firstDay = moment().startOf("week").weekday(1).format("DD-MM-YYYY");
  const lastDay = moment().startOf("week").weekday(7).format("DD-MM-YYYY");

  return (
    <Container>
      <div className="week">
        <p>Week {weekNumber}</p>
        <p>
          {firstDay} - {lastDay}
        </p>
      </div>

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
