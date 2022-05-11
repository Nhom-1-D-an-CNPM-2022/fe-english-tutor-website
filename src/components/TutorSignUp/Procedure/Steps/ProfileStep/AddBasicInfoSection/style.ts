import { iconButtonClasses } from "@mui/material";

export const outerWrapperStyle = {
  position: "sticky",
  top: "73px",
  left: 0,
  backgroundColor: "white",
  borderBottom: "2px solid rgb(238, 238, 238)",
  zIndex: 1100,
};

export const innerWrapperStyle = {
  paddingTop: 2.25,
  paddingBottom: 2,
  flexDirection: "row",
  alignItems: "center",
};

export const profilePictureWrapperStyle = {
  marginRight: "16px",

  [`& .${iconButtonClasses.root}`]: {
    width: "60px",
    height: "60px",
    padding: 0,
  },

  img: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
};
