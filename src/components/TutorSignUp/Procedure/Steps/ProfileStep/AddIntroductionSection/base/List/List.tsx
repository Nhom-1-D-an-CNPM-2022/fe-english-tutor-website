import { List as MuiList } from "@mui/material";
import React from "react";

export default function List({ children }: React.PropsWithChildren<{}>) {
  return <MuiList disablePadding>{children}</MuiList>;
}
