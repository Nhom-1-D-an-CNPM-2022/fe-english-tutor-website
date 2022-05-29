import { buttonClasses } from "@mui/material";

const primaryColor = {
  light: "rgba(34, 136, 145, 0.5)",
  main: "#228891",
  dark: "#1e4d5f",
};

const secondaryColor = {
  main: "#ffc929",
  dark: "#eea320",
};

const colors = {
  primary: {
    contained: {
      backgroundColor: primaryColor.main,

      "&:hover, &:focus": {
        backgroundColor: primaryColor.dark,
      },
    },

    outlined: {
      borderColor: primaryColor.main,
      color: primaryColor.main,

      "&:hover, &:focus": {
        borderColor: primaryColor.main,
      },
    },

    text: {
      color: primaryColor.main,
    },
  },

  secondary: {
    contained: {
      backgroundColor: secondaryColor.main,
      color: "#353535",

      "&:hover, &:focus": {
        backgroundColor: secondaryColor.dark,
      },
    },

    outlined: {
      borderColor: primaryColor.light,
      color: primaryColor.main,

      "&:hover, &:focus": {
        borderColor: primaryColor.light,
      },
    },

    text: {
      color: secondaryColor.main,
    },
  },

  white: {
    contained: {},

    outlined: {
      borderColor: "white",
      color: "white",

      "&:hover, &:focus": {
        borderColor: "white",
        backgroundColor: "transparent",
      },
    },

    text: {},
  },

  lightGrey: {
    contained: {
      backgroundColor: "#e0e0e0",
      color: "rgba(0, 0, 0, 0.87)",

      "&:hover, &:focus": {
        backgroundColor: "#e0e0e0",
        color: "rgba(0, 0, 0, 0.87)",
      },
    },

    outlined: {},

    text: {},
  },
};

const sizes = {
  small: {
    contained: {
      padding: "6px 8px",
    },

    outlined: {
      padding: "6px 8px",

      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: "-4px",
      },
    },

    text: {},
  },

  normal: {
    contained: {
      padding: "6px 16px",
    },

    outlined: {
      padding: "5px 15px",
    },

    text: {},
  },

  large: {
    contained: {
      width: "200px",
    },

    outlined: {
      padding: "6px 16px",
    },

    text: {
      width: "200px",
    },
  },
};

const common = {
  contained: {},

  outlined: {
    [`& .${buttonClasses.startIcon}`]: {
      marginLeft: 0,
    },
  },

  text: {},
};

interface Params {
  type: "contained" | "outlined" | "text";
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
}

export default ({ type, color, size }: Params) => ({
  ...common[type],
  ...colors[color!][type],
  ...sizes[size!][type],
});
