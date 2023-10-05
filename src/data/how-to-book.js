import select1 from "../assets/how_to_book/select_1.png";
import select2 from "../assets/how_to_book/select_2.png";
import select3 from "../assets/how_to_book/select_3.png";
import select4 from "../assets/how_to_book/select_4.png";

export const howToBookTimeline = [
  {
    id: 1,
    img: { src: select1, alt: "Kalash Icon" },
    timeline_dot_color: "primary",
    title: "Select Puja",
    description: "Pick a puja according to your preference",
  },
  {
    id: 2,
    img: { src: select2, alt: "whatsapp Icon" },
    timeline_dot_color: "primary",
    title: "Talk on WhatsApp",
    description: "Talk to us on whatsapp for further details",
  },
  {
    id: 3,
    img: { src: select3, alt: "Confirmation Icon" },
    timeline_dot_color: "success",
    title: "Receive your Confirmation",
    description: "Get your confirmation for booking",
  },
  {
    id: 4,
    img: { src: select4, alt: "bell icon" },
    timeline_dot_color: "secondary",
    title: "Receive Regular Updates",
    description: "Receive all the information via email, SMS, and WhatsApp.",
  },
];
