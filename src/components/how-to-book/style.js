export const howToBookHeadingStyle = {
  marginTop: "0",
  padding: "0 1rem",
  fontSize: "2rem",
  color: "var(--primary-color)",
  fontWeight: "800",
  textShadow: "0 0 5px var(--primary-color-extraLight)",
  margin: "0 0 1rem",
  textAlign: "center",
  "& span": {
    color: "var(--secondary-color)",
  },

  "@media (min-width: 400px)": {
    fontSize: "2.25rem",
  },

  "@media (min-width: 1200px)": {
    fontSize: "3.5rem",
  },
};

export const timelineIcon = {
  width: "30px",
  height: "30px",
  margin: "2px",

  "@media (min-width: 400px)": {
    width: "40px",
    height: "40px",
    margin: "3px",
  },

  "@media (min-width: 700px)": {
    width: "50px",
    height: "50px",
    margin: "5px",
  },

  "@media (min-width: 1200px)": {
    width: "60px",
    height: "60px",
    margin: "10px",
  },
};

export const timelineContentStyle = {
  py: "12px",
  px: 2,

  "@media (min-width: 400px)": {
    py: "25px",
    px: 2,
  },

  "@media (min-width: 700px)": { py: "50px", px: 2 },

  "@media (min-width: 1200px)": { py: "70px", px: 2 },
};

export const timelineTitle = {
  fontSize: "1rem",
  fontWeight: "600",

  "@media (min-width: 700px)": {
    fontSize: "1.2rem",
  },
};

export const timelinePara = {
  fontSize: "0.75rem",
  fontWeight: "400",

  "@media (min-width: 700px)": {
    fontSize: "1rem",
    fontWeight: "400",
  },
};

export const timelineConnectorStyles = {
  height: "1rem",
};
