import { chipClasses } from "@mui/material";

export const chipStyle = {
  height: "24px",
  margin: "4px",

  [`& .${chipClasses.label}`]: {
    padding: "0 8px",
  },
};
