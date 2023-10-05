import "./socialMedia.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { whatsappData } from "../../../utils/whatsapp";

const SocialMedia = ({ whatsapp, fb, insta }) => {
  return (
    <div className="social-buttons">
      <a
        onClick={() => whatsappData()}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button github"
      >
        <WhatsAppIcon />
      </a>
      {/* <a
        href={fb}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button facebook"
      >
        <FacebookIcon />
      </a> */}
      <a
        href={insta}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button instagram"
      >
        <InstagramIcon />
      </a>
    </div>
  );
};

export default SocialMedia;
