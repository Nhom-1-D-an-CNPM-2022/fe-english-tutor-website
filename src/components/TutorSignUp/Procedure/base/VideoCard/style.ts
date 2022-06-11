import {
  buttonClasses,
  linkClasses,
  svgIconClasses,
  typographyClasses,
} from "@mui/material";

export default {
  borderRadius: "5px",
  backgroundColor: "rgb(53, 53, 53)",
  boxShadow: "none",
};

export const inputVideoPhaseStyle = {
  outerWrapperStyle: {
    padding: "70px",
    borderRadius: "5px",
    backgroundColor: "rgb(53, 53, 53)",
    boxShadow: "none",
  },

  innerWrapperStyle: {
    minHeight: "396px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  cardContentStyle: {
    padding: 0,
    marginBottom: "10px",

    [`& .${typographyClasses.root}`]: {
      color: "white",

      "&:first-of-type": {
        marginBottom: "10px",
      },
    },
  },

  cardActionsStyle: {
    padding: 0,
    flexDirection: "column",
    alignItems: "flex-start",
  },

  buttonContainerStyle: {
    flexDirection: "row",
    marginBottom: "10px",

    [`& .${buttonClasses.root}:first-of-type`]: {
      marginRight: "10px",
    },
  },

  linkContainerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: "0 !important",

    [`& .${typographyClasses.root}`]: {
      fontSize: "14px",
      color: "white",
      textDecorationColor: "white",

      [`&:not(:last-of-type)`]: {
        marginRight: "8px",
      },
    },
  },
};

export const previewVideoPhaseStyle = {
  wrapperStyle: {
    video: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      verticalAlign: "baseline",
    },
  },

  buttonContainerStyle: {
    height: "56px",
    flexDirection: "row",
    justifyContent: "flex-end",

    [`& .${linkClasses.root}`]: {
      display: "flex",
      alignItems: "center",
      margin: "4px 8px",
      color: "white",

      span: {
        marginRight: "8px",
        marginLeft: "-4px",

        [`& .${svgIconClasses.root}`]: {
          width: "20px",
          height: "20px",
        },
      },

      [`& .${typographyClasses.root}`]: {
        color: "white !important",
      },
    },
  },
};
