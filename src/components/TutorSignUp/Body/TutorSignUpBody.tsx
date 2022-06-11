import { Box } from "@mui/material";
import React from "react";
import style from "./style";

export default function TutorSignUpBody({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <Box component="main" sx={style}>
      {children}
    </Box>
  );
}
