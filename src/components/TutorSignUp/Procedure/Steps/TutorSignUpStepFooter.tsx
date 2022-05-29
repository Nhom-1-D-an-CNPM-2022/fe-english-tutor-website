import { Box } from "@mui/material";
import React from "react";
import { footerStyle } from "./style";

export default function TutorSignUpStepFooter({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <Box sx={footerStyle.outerWrapper} component="footer">
      <Box sx={footerStyle.innerWrapper}>{children}</Box>
    </Box>
  );
}
