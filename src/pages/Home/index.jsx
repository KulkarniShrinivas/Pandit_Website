import React from "react";
import CardList from "../../components/card-list";
import AboutUs from "../../components/AboutUs/AboutUs";
import HowToBook from "../../components/how-to-book";
import Main from "../../components/main";
import RangeOfServices from "../../components/range-of-services";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Main />
      <AboutUs />
      <CardList />
      <RangeOfServices />
      <HowToBook />
    </div>
  );
};

export default Home;
