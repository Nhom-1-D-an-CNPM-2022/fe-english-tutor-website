import { buttonClasses, typographyClasses } from "@mui/material";

export default {
  position: "relative",
  width: "100%",
  maxWidth: "700px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  padding: "32px 16px 0px",
  margin: "0 auto 64px",

  [`& .${typographyClasses.root}`]: {
    color: "#333333",
  },
};

export const bodyStyle = {
  marginBottom: "83px",
};

export const footerStyle = {
  outerWrapper: {
    position: "fixed",
    bottom: 0,
    width: "calc(100vw - 316px)",
    maxWidth: "700px",
    padding: "0 16px",
    backgroundColor: "white",
    zIndex: 1100,
  },

  innerWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px 0",
    borderTop: "1px solid",
    borderColor: "divider",

    [`& .${buttonClasses.root}`]: {
      lineHeight: 1.45,
    },
  },
};
