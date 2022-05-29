import { svgIconClasses, typographyClasses } from "@mui/material";

export const titleWrapperStyle = (
  activeTitle: boolean,
  isInvalidValue: boolean,
) => {
  const svgIconStyle = {
    paddingTop: "3px",
    color: "rgba(0, 0, 0, 0.25)",
  };

  if (activeTitle && !isInvalidValue) {
    return {
      [`& > div.MuiBox-root > .${svgIconClasses.root}`]: {
        ...svgIconStyle,
      },

      [`& > div.MuiBox-root > .${svgIconClasses.root}, & > div.MuiBox-root > .${typographyClasses.root}`]:
        {
          color: "#228891!important",
        },
    };
  }

  return {
    [`& > div.MuiBox-root > .${svgIconClasses.root}`]: {
      ...svgIconStyle,
    },
  };
};

export const linkButtonStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  color: "#228891 !important",
  textTransform: "capitalize",
  whiteSpace: "nowrap",

  svg: {
    width: "20px",
    height: "20px",
    marginLeft: "8px",
    marginRight: "-4px",
  },
};
