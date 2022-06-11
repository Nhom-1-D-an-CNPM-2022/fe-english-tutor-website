import {
  drawerClasses,
  listItemButtonClasses,
  listItemClasses,
  listItemIconClasses,
  listItemTextClasses,
  typographyClasses,
} from "@mui/material";

const headerHeight = "73px";
const drawerWidth = "300px";

export const drawerStyle = {
  width: drawerWidth,
  flexShrink: 0,

  [`& .${drawerClasses.paper}`]: {
    borderRight: "1px solid lightgrey",
    top: headerHeight,
    width: drawerWidth,
  },

  [`& .${listItemButtonClasses.root}, & .${listItemClasses.root}`]: {
    paddingRight: 0,

    [`& .${listItemTextClasses.root}`]: {
      margin: 0,
    },

    [`& .${listItemIconClasses.root}`]: {
      minWidth: "auto",
      paddingRight: "16px",
    },
  },

  [`& .${listItemButtonClasses.selected}`]: {
    backgroundColor: "rgba(0, 0, 0, 0.08) !important",

    "&:hover, &:focus": {
      backgroundColor: "rgba(0, 0, 0, 0.08) !important",
    },
  },
};

export const titleListStyle = {
  paddingTop: "16px",
};

export const welcomeListStyle = {
  padding: "16px 0",

  [`& .${listItemButtonClasses.root}`]: {
    paddingTop: "14px",
    paddingBottom: "14px",
  },
};

export const checkListStyle = {
  [`& > .${typographyClasses.root}:first-of-type`]: {
    paddingLeft: "16px",
    marginBottom: "8px",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.54)",
    lineHeight: 2.66,
    textTransform: "uppercase",
  },

  [`& .${listItemButtonClasses.root}`]: {
    paddingTop: "14px",
    paddingBottom: "14px",

    [`& .${listItemTextClasses.root}`]: {
      color: "#333333",
    },

    [`& .${listItemIconClasses.root}`]: {
      color: "rgba(0, 0, 0, 0.54)",
    },
  },
};

export const progressWrapperStyle = {
  marginLeft: "auto",
  paddingRight: "16px",
  textAlign: "right",

  [`& .${typographyClasses.root}`]: {
    fontSize: "14px",
    color: "rgba(0, 0, 0, 0.54)",
    marginBottom: "8px",
  },
};
