import React from "react";
import banner from "../../assets/banner2.webp";
import { Container } from "./Banner.styles";

const Banner = () => {
  return (
    <Container>
      <img src={banner} alt="orange banner" />
      <div className="banner-text">
        <h1>Make a difference</h1>
        <p>
          Discover here all the pre-made habits. Simply click on the "add habit"
          button to add them and you'll find them in home!
        </p>
      </div>
    </Container>
  );
};

export default Banner;
