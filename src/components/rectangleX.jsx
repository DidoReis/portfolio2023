import React from "react";
import { Box, useTheme } from "@mui/material";

function RectangleX({ height, width, top }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        width: { width }, //250px
        height: { height }, //3px
        top: { top }, //247px
        background: theme.palette.secondary[400],
      }}
    ></Box>
  );
}

export default RectangleX;
