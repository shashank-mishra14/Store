import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
  return (
    <Carousel fade>
      {Banner.end.map((item, index) => (
        <Carousel.Item
          key={item.image}
          id="banner"
          interval={1000}
          keyboard={true}
        ></Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
