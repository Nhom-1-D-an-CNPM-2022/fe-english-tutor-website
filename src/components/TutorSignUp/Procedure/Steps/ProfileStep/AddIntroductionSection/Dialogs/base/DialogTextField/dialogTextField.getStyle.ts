import {
  autocompleteClasses,
  formHelperTextClasses,
  inputLabelClasses,
  outlinedInputClasses,
} from "@mui/material";

const common = {
  margin: "16px 0 8px",

  [`& .${inputLabelClasses.root}`]: {
    color: "rgba(0, 0, 0, 0.54)",
  },

  [`& .${formHelperTextClasses.root}`]: {
    letterSpacing: 0,
  },

  [`& .${outlinedInputClasses.root}`]: {
    [`& .${outlinedInputClasses.notchedOutline}`]: {
      borderWidth: "1px",
      borderColor: "rgba(0, 0, 0, 0.23)",
    },

    [`&.${outlinedInputClasses.focused}`]: {
      [`& .${outlinedInputClasses.notchedOutline}`]: {
        borderWidth: "2px",
      },
    },
  },

  [`& .${inputLabelClasses.root}.${inputLabelClasses.error}`]: {
    [`&.${inputLabelClasses.focused}`]: {
      color: "#d32f2f",
    },
  },

  [`& .${outlinedInputClasses.error}`]: {
    [`&.${outlinedInputClasses.focused}`]: {
      [`& .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "#d32f2f",
      },
    },
  },

  [`& .${outlinedInputClasses.multiline}`]: {
    padding: "18.5px 14px",
    letterSpacing: 0,
    lineHeight: 1.2,
  },
};

const colors = {
  primary: {
    [`& .${inputLabelClasses.root}`]: {
      [`&.${inputLabelClasses.focused}`]: {
        color: "#228891",
      },
    },

    [`& .${outlinedInputClasses.root}`]: {
      [`&.${outlinedInputClasses.focused}`]: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: "#228891",
        },
      },
    },
  },

  secondary: {
    [`& .${inputLabelClasses.root}`]: {
      [`&.${inputLabelClasses.focused}`]: {
        color: "#ffc929",
      },
    },

    [`& .${outlinedInputClasses.root}`]: {
      [`&.${outlinedInputClasses.focused}`]: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: "#ffc929",
        },
      },
    },
  },
};

type DialogTextFieldColor = "primary" | "secondary";

export default (color: DialogTextFieldColor) => ({
  ...common,
  ...colors[color],
});
