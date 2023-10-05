import React, { useEffect, useRef } from "react";
import "./style.scss";
import Card from "./card/index";
import CustomButton from "../custom-button";
import { servicesData } from "../../data/all-services-data";
import { useNavigate } from "react-router-dom";

const CardList = () => {
  const cardListRef = useRef();
  const navigate = useNavigate();

  function scrollToRight() {
    cardListRef.current.scrollLeft =
      cardListRef.current.scrollWidth - cardListRef.current.clientWidth - 100;
  }

  useEffect(() => {
    scrollToRight();
  }, []);

  return (
    <>
      <section className="card-list-section">
        <h2 className="card-list-heading">Recommended Pujas</h2>
        <CustomButton
          text={"See All Puja Services"}
          onClick={() => navigate("/allpujas/pujas")}
        />
        <div ref={cardListRef} className="card-list">
          {servicesData
            .filter((c) => c.category === "pujas")
            .slice(0, 5)
            .map((card, index) => (
              <Card
                key={card.title + index}
                poojaTitle={card.title}
                src={card.src}
                handleViewMoreClick={() => navigate("/puja/" + card.title)}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default CardList;
