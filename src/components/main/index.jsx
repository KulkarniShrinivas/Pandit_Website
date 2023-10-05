import React, { useEffect, useRef } from "react";
import { mainData } from "./mainData";
import "./main.scss";
import Typed from "typed.js";
import homeImg from "../../assets/home.webp";
import CustomButton from "../custom-button";
import left from "../../assets/pLeft.webp";
import right from "../../assets/pRight.webp";
import Tilt from "react-parallax-tilt";
import { whatsappData } from "../../utils/whatsapp";
import BookNowBtn from "../book-now-btn/bookNowBtn";

const Main = () => {
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: mainData.typeWriterText,
        typeSpeed: 50,
        loop: true,
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, []);
  return (
    <section className="main">
      {/* <div className="half-circle"></div>
      <div className="half-circle-2"></div> */}
      <img src={left} className="pattern-left" />
      <img src={right} className="pattern-right" />
      <div className="img-div">
        <Tilt>
          <img src={homeImg} alt="Ganesh Image" />
        </Tilt>
      </div>

      <div className="main-headings">
        <h1>Experience</h1>
        <span ref={el} />
      </div>
      <div className="btn-container">
        <BookNowBtn onClick={() => whatsappData()} />
        {/* <CustomButton text={"Book Now"} onClick={() => whatsappData()} /> */}
      </div>
      <div className="fade-div"></div>
    </section>
  );
};

export default Main;
