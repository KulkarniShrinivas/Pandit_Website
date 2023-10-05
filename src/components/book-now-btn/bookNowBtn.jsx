import "./bookNowBtn.scss";
import { whatsappData } from "../../utils/whatsapp";

const BookNowBtn = () => {
  return (
    <button className="btn" type="button" onClick={() => whatsappData()}>
      <strong>Book Now</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default BookNowBtn;