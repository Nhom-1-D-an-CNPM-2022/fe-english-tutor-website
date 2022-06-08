import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  description: string | string[];
}

export default function TutorSignUpStepHeader({ title, description }: Props) {
  return (
    <Box component="header">
      <Typography variant="h5" marginBottom={1}>
        {title}
      </Typography>
      <Typography>
        {Array.isArray(description)
          ? description.map((paragraph: string, index: number) => (
              <React.Fragment key={paragraph}>
                {paragraph}
                {index < description.length - 1 && <br />}
              </React.Fragment>
            ))
          : description}
      </Typography>
    </Box>
  );
}
