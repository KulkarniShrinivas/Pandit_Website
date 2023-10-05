import React from "react";
import { aboutUsPageData } from "../../../data/about-us-page-data";
import "./aboutUsContent.scss";
import { Box, Typography } from "@mui/material";

const ImgContainer = ({ img, title, width }) => {
  console.log(width);
  return (
    <div className="img">
      <img loading="lazy" width={width} src={img} />
      <Typography
        sx={{
          width,
          textAlign: "center",
        }}
        className="img-text"
      >
        {title}
      </Typography>
    </div>
  );
};

const AboutUsContent = () => {
  const width = "300px";

  return (
    <div className="about-us-content">
      <div className="about-us-container">
        <div className="languages">
          <h2 className="language-heading">
            Languages Known by <span>Pandit Ji</span>
          </h2>
          <div className="container">
            {aboutUsPageData.content.languages.map((language) => (
              <div className="tilt">
                <h4>{language}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="about-us-left">
          <p className="text">
            {aboutUsPageData.content.gokarna.text.split("<s>")[0]}
            <strong>
              {aboutUsPageData.content.gokarna.text.split("<s>")[1]}
            </strong>
            {aboutUsPageData.content.gokarna.text.split("<s>")[2]}
          </p>
          <ImgContainer
            img={aboutUsPageData.content.gokarna.img}
            title={aboutUsPageData.content.gokarna.imgTitle}
            width={width}
          />
        </div>

        <div className="about-us-right">
          <p className="text">
            {aboutUsPageData.content.nepal.text.split("<s>")[0]}
            <strong>
              {aboutUsPageData.content.nepal.text.split("<s>")[1]}
            </strong>
            {aboutUsPageData.content.nepal.text.split("<s>")[2]}
          </p>
          <ImgContainer
            img={aboutUsPageData.content.nepal.img}
            title={aboutUsPageData.content.nepal.imgTitle}
            width={width}
          />
        </div>
        <div className="about-us-left">
          <p className="text">
            {aboutUsPageData.content.kashi.text.split("<s>")[0]}
            <strong>
              {aboutUsPageData.content.kashi.text.split("<s>")[1]}
            </strong>
          </p>
          <ImgContainer
            img={aboutUsPageData.content.kashi.img}
            title={aboutUsPageData.content.kashi.imgTitle}
            width={width}
          />
        </div>
        <div className="about-us-right">
          <p className="text">{aboutUsPageData.content.hyderabad}</p>
          <ImgContainer
            width={width}
            img={aboutUsPageData.content.formerPm.img}
            title={aboutUsPageData.content.formerPm.imgTitle}
          />
        </div>

        <p className="text">{aboutUsPageData.content.differentStates}</p>
        <div className="about-us-left">
          <p className="text">
            {aboutUsPageData.content.dkshiv.text.split("<s>")[0]}
            <strong>
              {aboutUsPageData.content.dkshiv.text.split("<s>")[1]}
            </strong>
            {aboutUsPageData.content.dkshiv.text.split("<s>")[2]}
          </p>
          <ImgContainer
            img={aboutUsPageData.content.dkshiv.img}
            title={aboutUsPageData.content.dkshiv.imgTitle}
            width={width}
          />
        </div>
        <p className="text">
          {aboutUsPageData.content.gopal.split("<s>")[0]}
          <strong>{aboutUsPageData.content.gopal.split("<s>")[1]}</strong>
          {aboutUsPageData.content.gopal.split("<s>")[2]}
        </p>
        <div className="about-us-right">
          <p className="text">
            {aboutUsPageData.content.tumukar.text.split("<s>")[0]}
            <strong>
              {aboutUsPageData.content.tumukar.text.split("<s>")[1]}
            </strong>
          </p>
          <ImgContainer
            width={width}
            img={aboutUsPageData.content.tumukar.img}
            title={aboutUsPageData.content.tumukar.imgTitle}
          />
        </div>

        <p className="text">
          {aboutUsPageData.content.Bhud.split("<s>")[0]}
          <strong>{aboutUsPageData.content.Bhud.split("<s>")[1]}</strong>
          {aboutUsPageData.content.Bhud.split("<s>")[2]}
          <strong>{aboutUsPageData.content.Bhud.split("<s>")[3]}</strong>
          {aboutUsPageData.content.Bhud.split("<s>")[4]}
        </p>

        <div className="about-us-left">
          <p className="text">
            {aboutUsPageData.content.shivRaj.text.split("<s>")[0]}
            <strong>
              {aboutUsPageData.content.shivRaj.text.split("<s>")[1]}
            </strong>
            {aboutUsPageData.content.shivRaj.text.split("<s>")[2]}
            <strong>
              {aboutUsPageData.content.shivRaj.text.split("<s>")[3]}
            </strong>
            {aboutUsPageData.content.shivRaj.text.split("<s>")[4]}
          </p>
          <ImgContainer
            img={aboutUsPageData.content.shivRaj.img}
            title={aboutUsPageData.content.shivRaj.imgTitle}
            width={width}
          />
        </div>
        <div className="about-us-right">
          <p className="text">
            {aboutUsPageData.content.variousLocation.text.split("<s>")[0]}
            <strong>
              {aboutUsPageData.content.variousLocation.text.split("<s>")[1]}
            </strong>
            {aboutUsPageData.content.variousLocation.text.split("<s>")[2]}
            <strong>
              {aboutUsPageData.content.variousLocation.text.split("<s>")[3]}
            </strong>
            {aboutUsPageData.content.variousLocation.text.split("<s>")[4]}
          </p>
          <ImgContainer
            title={aboutUsPageData.content.variousLocation.imgTitle}
            img={aboutUsPageData.content.variousLocation.img}
            width={width}
          />
        </div>
        <div className="about-us-left">
          <p className="text">
            {aboutUsPageData.content.duniyaVijay.text.split("<s>")[0]}
            <strong>
              {aboutUsPageData.content.duniyaVijay.text.split("<s>")[1]}
            </strong>
            {aboutUsPageData.content.duniyaVijay.text.split("<s>")[2]}
            <strong>
              {aboutUsPageData.content.duniyaVijay.text.split("<s>")[3]}
            </strong>
            {aboutUsPageData.content.duniyaVijay.text.split("<s>")[4]}
          </p>
          <ImgContainer
            title={aboutUsPageData.content.duniyaVijay.imgTitle}
            img={aboutUsPageData.content.duniyaVijay.img}
            width={width}
          />
        </div>
        <p className="text">
          {aboutUsPageData.content.shrikant.split("<s>")[0]}
          <strong>{aboutUsPageData.content.shrikant.split("<s>")[1]}</strong>
          {aboutUsPageData.content.shrikant.split("<s>")[2]}
          <strong>{aboutUsPageData.content.shrikant.split("<s>")[3]}</strong>
          {aboutUsPageData.content.shrikant.split("<s>")[4]}
        </p>
      </div>
    </div>
  );
};

export default AboutUsContent;
