import React from "react";
import { Box } from "@mui/material";
import style from "./style";

export default function TutorSignUpStep({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <Box component="main" sx={style}>
      {children}
    </Box>
  );
}
