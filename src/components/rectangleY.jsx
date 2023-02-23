import React from "react";
import { Box, useTheme } from "@mui/material";

function RectangleY({ height, width, left, top }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        width: { width },
        height: { height },
        left: { left },
        top: { top },
        background: theme.palette.secondary[400],
      }}
    ></Box>
  );
}

export default RectangleY;
