import { linearProgressClasses } from "@mui/material";

export default {
  width: "100%",
  height: "16px",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  boxShadow: "inset 0 1px 2px #0000001a",

  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "#228891",
  },
};
