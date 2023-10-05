import { useParams } from "react-router-dom";
import "./pujaPage.scss";
import { useEffect, useRef, useState } from "react";
import { servicesData } from "../../data/all-services-data";
import CustomButton from "../../components/custom-button";
import { Box } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { whatsappData } from "../../utils/whatsapp";

const PujaPage = () => {
  const [pujaData, setPujaData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const puja_data = servicesData.find((data) => data.title === id);
    window.scrollTo({ top: 0 });
    setPujaData(puja_data);
  }, [id]);
  return (
    <>
      {pujaData && (
        <main className="puja-details-card">
          <Tilt>
            <Box
              sx={{
                borderRadius: "10px",
                width: "300px",
                height: "300px",
                position: "relative",
                overflow: "hidden",

                "@media (min-width: 1000px)": {
                  width: "400px",
                  height: "400px",
                },
              }}
              className="tilt-card"
            >
              <div className="img-container">
                <img
                  src={pujaData?.src}
                  alt={pujaData?.title}
                  loading="lazy"
                  className="service-img"
                />
                <div className="gradient-overlay"></div>
              </div>
            </Box>
          </Tilt>

          <div className="puja-text-container">
            <div className="puja-header">
              <h1 className="puja-title">{pujaData?.title}</h1>
              <div className="puja-btn">
                <CustomButton onClick={() => whatsappData()} text="Book Now" />
              </div>
            </div>

            <div className="animation-container">
              <section className="puja-desc">
                {pujaData?.description.map((data, index) => (
                  <p key={data + index}>{data}</p>
                ))}
              </section>

              <section className="puja-benefits-container">
                {pujaData?.benefits?.title && (
                  <h4 className="puja-header">{pujaData?.benefits?.title}</h4>
                )}
                <ul className="puja-benefits">
                  {pujaData?.benefits?.points?.map((data, index) => (
                    <li className="puja-benefits-list" key={data.title + index}>
                      <h5 className="puja-benefits-title">{data.title}</h5>
                      <p className="puja-benefits-desc">{data.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default PujaPage;
