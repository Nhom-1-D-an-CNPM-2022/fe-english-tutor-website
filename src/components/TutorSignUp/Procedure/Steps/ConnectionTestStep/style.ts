import { buttonClasses, typographyClasses } from "@mui/material";

export const gridContainerStyle = {
  alignItems: "center",
};

export const gridItemStyle = {
  padding: "12px 20px",
  textAlign: "center",

  [`& .${typographyClasses.root}`]: {
    typography: "body2",
  },

  "&:last-of-type": {
    marginTop: "10px",
  },
};

export const imageWrapperStyle = {
  width: "100px",
  height: "100px",
  margin: "0 auto 6px",

  img: {
    width: "100%",
    height: "100%",
  },
};
