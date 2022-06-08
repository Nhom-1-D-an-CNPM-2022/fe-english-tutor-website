import { buttonClasses, typographyClasses } from "@mui/material";

export default {
  [`& .${typographyClasses.root}`]: {
    color: "rgba(0, 0, 0, 0.54)",

    "&:not(:first-of-type)": {
      marginTop: "4px",
    },
  },

  [`& .${buttonClasses.root}`]: {
    marginTop: "10px",
  },
};
