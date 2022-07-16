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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          laboriosam!
        </p>
      </div>
    </Container>
  );
};

export default Banner;
