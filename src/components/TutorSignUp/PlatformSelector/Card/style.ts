export const cardStyle = {
  maxWidth: "260px",
  margin: "10px",
  padding: "12px",
  border: "1px solid rgb(238, 238, 238)",
  borderRadius: "12px",
  boxShadow: "none",
  cursor: "pointer",

  "&:hover, &:focus": {
    borderColor: "#54BAC4",
  },

  "&:last-child": {
    "& .MuiBox-root": {
      paddingTop: "10px",
    },
  },
};

export const cardMediaWrapperStyle = {
  width: "100%",
};

export const cardMediaStyle = {
  width: "200px",
  margin: "0 auto",
};

export const cardContentStyle = {
  padding: "20px !important",
  textAlign: "center",
};

export const platformNameStyle = {
  margin: "10px 0",
};
