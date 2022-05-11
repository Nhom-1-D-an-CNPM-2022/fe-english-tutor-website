import {
  formHelperTextClasses,
  iconButtonClasses,
  textFieldClasses,
} from "@mui/material";

export const wrapperStyle = {
  row: {
    marginTop: "18px",

    "& > .MuiBox-root": {
      marginLeft: "auto",
      paddingTop: "7%",
    },
  },

  column: {
    "&:not(:first-of-type)": {
      marginTop: "36px",
    },

    "& > .MuiBox-root": {
      marginLeft: "3.5%",
    },
  },
};

export const buttonWrapperStyle = {
  width: "4%",

  [`& .${iconButtonClasses.root}`]: {
    width: "20px",
    height: "20px",
    padding: "0px",
    backgroundColor: "gray",
    color: "white",

    [`&.${iconButtonClasses.disabled}`]: {
      opacity: 0,
      visibility: "hidden",
    },
  },
};

const commonStyle = {
  width: "94%",
};

export default {
  row: {
    ...commonStyle,
    flexDirection: "row",
    alignItems: "center",

    [`& .${textFieldClasses.root}:first-of-type`]: {
      marginRight: "5px",
    },

    "& > *": {
      width: "49.25%",
    },
  },

  column: {
    ...commonStyle,
    flexDirection: "column",

    [`& .${formHelperTextClasses.root}`]: {
      textAlign: "right",

      [`&.${formHelperTextClasses.error}`]: {
        textAlign: "left",
      },
    },
  },
};
