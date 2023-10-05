import { aboutUsPageData } from "../../../data/about-us-page-data";
import "./aboutUsMain.scss";
import { ParticlesBackground } from "../../particlesConfig/particlesConfig";

const AboutUsMain = () => {
  return (
    <div className="about-us-main">
      <ParticlesBackground />
      <div className="about-us-main-img">
        <img
          src={aboutUsPageData.main.pandit_img}
          alt="Manoj Kulkarni Purohit"
        />
        <h1>{aboutUsPageData.main.pandit_name}</h1>
      </div>
    </div>
  );
};

export default AboutUsMain;
