export const serviceCardStyles = (src) => ({
  boxSizing: "border-box",
  width: "300px",
  height: "375px",
  border: "1px solid white",
  boxShadow: "12px 17px 51px rgba(0, 0, 0, 0.22)",
  backdropFilter: "blur(6px)",
  borderRadius: "17px",
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.5s",
  userSelect: "none",
  fontWeight: "bolder",
  color: "white",
  border: "1px solid black",
  transform: "scale(0.95)",
  transition: "transform 0.5s",

  "&:hover, &:focus, &:active": {
    transform: "scale(1.02) rotateZ(1.7deg)",
  },

  "& .img-container": {
    position: "relative",
    width: "100%",
    height: "80%",
    borderRadius: "17px 17px 0 0",
    overflow: "hidden",

    "& .service-img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top",
    },

    "& .gradient-overlay": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))",
      mixBlendMode: "multiply",
    },
  },
  "& .text": {
    width: "100%",
    borderRadius: "0 0 17px 17px",
    padding: "0 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
    zIndex: "100",

    "& h3": {
      color: "var(--primary-color)",
      fontSize: "1.1rem",
    },
  },

  "@media (min-width: 700px)": {
    width: "380px",
    height: "475px",

    "& .text h3": {
      fontSize: "1.25rem",
    },
  },
});
