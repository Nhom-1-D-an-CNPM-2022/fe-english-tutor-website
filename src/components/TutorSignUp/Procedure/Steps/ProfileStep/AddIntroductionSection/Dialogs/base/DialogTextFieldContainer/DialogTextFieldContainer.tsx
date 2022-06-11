import { Box, IconButton, Stack, StackProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import style, {
  wrapperStyle,
  buttonWrapperStyle,
} from "./dialogTextFieldContainer.style";
import Divider from "../../../../../../base/Divider/Divider";

interface Props extends Omit<StackProps, "sx" | "flexDirection" | "direction"> {
  flexDirection?: "row" | "column";
  optional?: boolean;
  handleDelete?: () => void;
}

export default function DialogTextFieldContainer({
  flexDirection = "row",
  optional,
  handleDelete,
  children,
  ...rest
}: Props) {
  return (
    <React.Fragment>
      <Stack flexDirection="row" sx={wrapperStyle[flexDirection]}>
        <Stack {...rest} sx={style[flexDirection]}>
          {children}
        </Stack>
        <Box sx={buttonWrapperStyle}>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={handleDelete}
            disabled={!optional}
            disableRipple
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Stack>
      <Divider mt={0.875} mb={1.875} borderWidth={1} />
    </React.Fragment>
  );
}
