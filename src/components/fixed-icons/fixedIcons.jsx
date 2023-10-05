import { IconButton } from "@mui/material";
import "./fixedIcons.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { contactData } from "../../data/contact-us-data";
import { whatsappData } from "../../utils/whatsapp";

const FixedIcons = () => {
  return (
    <div className="fixed-icons">
      <a
        onClick={() => whatsappData()}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button github"
      >
        <WhatsAppIcon />
      </a>
      <a
        href={`tel:${contactData.info.phoneNo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button facebook"
      >
        <LocalPhoneIcon />
      </a>
    </div>
  );
};

export default FixedIcons;
