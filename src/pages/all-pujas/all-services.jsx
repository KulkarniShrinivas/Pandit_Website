import "./all-services.scss";
import ServiceCard from "../../components/all-services/service-card/service-card";
import { useEffect, useLayoutEffect, useState } from "react";
import { btnText, servicesData } from "../../data/all-services-data";
import ServicesButton from "../../components/all-services/services-button";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const AllPujaServices = () => {
  const [allData, setData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

  const handleBtnClick = (category) => {
    navigate("/allpujas/" + category);
    !isDesktopScreen &&
      window.scrollTo({
        top: 400,
        behavior: "smooth", // Smooth scrolling animation
      });
  };

  useLayoutEffect(() => {
    setData(servicesData.filter((service) => service.category === id));
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="all-puja-services">
      <div className="all-puja-services-headers">
        <h1 className="heading">Puja Services</h1>
        <p className="para">
          Explore the complete range of puja services we provide
        </p>
      </div>

      <div className="btn-container">
        {btnText.map((btn) => (
          <ServicesButton
            category={btn.category}
            text={btn.text}
            key={btn.text}
            handleClick={() => handleBtnClick(btn.category)}
          />
        ))}
      </div>

      <div className="all-services">
        {allData?.map((data, index) => (
          <ServiceCard
            key={data.title + index}
            text={data.title}
            src={data.src}
            handleClick={() => navigate("/puja/" + data.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllPujaServices;
