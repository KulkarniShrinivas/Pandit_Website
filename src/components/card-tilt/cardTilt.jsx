import React from "react";
import Tilt from "react-parallax-tilt";
import "./cardTilt.scss";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const CardTilt = (props) => {
  return (
    <Tilt>
      <Box
        sx={{
          width: props?.width || "180px",
          height: props?.width || "180px",
        }}
        className="tilt-card"
      >
        <div className="img-container">
          <img
            src={props.img}
            loading="lazy"
            alt={props.title}
            className="service-img"
          />
          <div className="gradient-overlay"></div>
        </div>
        <h3 className="card-tilt-heading">
          <Link className="card-tilt-tag" to={props.link}>
            {props.title}
          </Link>
        </h3>
      </Box>
    </Tilt>
  );
};

export default CardTilt;
