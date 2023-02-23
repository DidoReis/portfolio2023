import React from "react";

import { Card, useTheme } from "@mui/material";

function RectangleMiddle() {
  const theme = useTheme();
  return (
    <Card
      sx={{
        position: "absolute",
        width: "252px",
        height: "250px",
        top: "580px",
        background: theme.palette.secondary[400],
        borderStyle: "none",
      }}
    ></Card>
  );
}

export default RectangleMiddle;
