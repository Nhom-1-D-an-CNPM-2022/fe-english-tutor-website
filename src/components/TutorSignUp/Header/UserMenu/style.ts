import { menuClasses, typographyClasses } from "@mui/material";

export const menuStyle = {
  [`& .${menuClasses.paper}`]: {
    minWidth: "250px",
    marginTop: "54px",
  },
};

export const menuItemStyle = {
  [`& .${typographyClasses.root}`]: {
    fontSize: "14px",
    color: "rgba(0, 0, 0, 0.87)",
    lineHeight: 1.43,
  },
};

export const dividerStyle = {
  margin: "0 !important",
};
