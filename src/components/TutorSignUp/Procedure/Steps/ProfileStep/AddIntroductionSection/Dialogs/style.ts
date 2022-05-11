import { avatarClasses, dialogClasses, iconButtonClasses } from "@mui/material";

export const wrapperStyle = {
  [`& .${dialogClasses.paper}`]: {
    width: "calc(100% - 64px)",
    maxWidth: "500px",
    maxHeight: "calc(100% - 40px)",
  },
};

export const titleStyle = {
  display: "inline-flex",
  alignItems: "center",

  [`& > svg, & .${avatarClasses.root}`]: {
    width: "24px",
    height: "24px",
    marginRight: "10px",
    color: "#228891",
  },
};
