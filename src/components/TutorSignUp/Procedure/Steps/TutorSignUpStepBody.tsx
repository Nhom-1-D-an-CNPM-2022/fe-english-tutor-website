import { Box } from "@mui/material";
import React from "react";
import { bodyStyle } from "./style";

export default function TutorSignUpStepBody({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <Box sx={bodyStyle} component="main">
      {children}
    </Box>
  );
}
