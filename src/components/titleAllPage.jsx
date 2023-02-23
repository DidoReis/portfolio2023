import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

function TitleAllPage({ title }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "162px",
        height: "52.16px",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          left: "0px",
          fontFamily: "Quicksand, sans-serif",
          fontSize: "28px",
          fontWeight: "700",
          color: theme.palette.secondary[400],
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          left: "0px",
          width: "56.44px",
          height: "2.16px",
          background: theme.palette.secondary[400],
          top: "40px",
        }}
      ></Box>
    </Box>
  );
}

export default TitleAllPage;
