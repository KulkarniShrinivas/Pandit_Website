import React from "react";
import "./style.scss";
import { whatsappData } from "../../../utils/whatsapp";

const Card = ({ poojaTitle, src, handleViewMoreClick }) => {
  return (
    <article className="card">
      <header className="card-header">
        <h2 onClick={handleViewMoreClick}>{poojaTitle}</h2>
      </header>
      <div className="card-img">
        <img src={src} loading="lazy" />
      </div>

      <div className="tags">
        <a onClick={() => whatsappData()}>Book Now</a>
        <a onClick={handleViewMoreClick}>View More</a>
      </div>
    </article>
  );
};

export default Card;
