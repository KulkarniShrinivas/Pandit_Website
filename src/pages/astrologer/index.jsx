import React, { useEffect } from "react";
import "./astrology.scss";
import { astroData } from "../../data/astro-data";
import CustomButton from "../../components/custom-button";
import { whatsappData } from "../../utils/whatsapp";
import Box from "@mui/material/Box";
import astroImage from "../../assets/Astro.jpeg";

const Astrologer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="astrology-container">
      <Box
        className="contact-us-header"
        sx={{
          width: "100%",
          height: "300px",
          backgroundImage: `linear-gradient(to bottom, var(--primary-color), var(--primary-color-dark)),url(${astroImage})`,
          backgroundBlendMode: "multiply",
          backgroundPosition: "right",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "& .heading": {
            color: "white",
          },
        }}
      >
        <h1 className="heading">
          Astro<span>logy</span>
        </h1>
      </Box>
      <div className="astro-container">
        <div className="subhead">
          {astroData.heading.map((data) => (
            <h2 key={data} className="h2">
              {data}
            </h2>
          ))}
        </div>
        <CustomButton text={"Book Now"} onClick={() => whatsappData()} />

        <section className="about-us astro-about">
          <div className="owner-item item-1">
            <h3>{astroData.astroAbout[0].title}</h3>
            <h4>{astroData.astroAbout[0].para}</h4>
          </div>
          <div className="owner-item item-2">
            <h3>{astroData.astroAbout[1].title}</h3>
            <h4>{astroData.astroAbout[1].para}</h4>
          </div>
        </section>
        <section className="astrology-para">
          <p>{astroData.para}</p>
        </section>
      </div>
    </div>
  );
};

export default Astrologer;
