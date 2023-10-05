import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./image-slider.scss";
import { Carousel } from "react-responsive-carousel";
import { data } from "./image-slider-data";

const ImageSlider = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
      stopOnHover={true}
    >
      {data.map((image) => (
        <div>
          <img
            loading="lazy"
            src={image.src}
            alt={`${image.legend} image`}
            className="carousel-img"
          />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
