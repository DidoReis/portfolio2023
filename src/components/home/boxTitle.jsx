import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

function BoxTitle({ title, subtitle }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        width: "1594px",
        height: "264px",
        top: "290px",
        background: "transparent",
      }}
    >
      <Typography
        position="absolute"
        variant="h2"
        fontFamily="Quicksand, sans-serif"
        height="94px"
        fontWeight="300"
        fontSize="48px"
        letterSpacing="0.05em"
        textTransform="capitalize"
        color={theme.palette.secondary[400]}
      >
        {subtitle}
      </Typography>
      <Typography
        position="absolute"
        variant="h1"
        fontFamily="Quicksand, sans-serif"
        height="235px"
        fontWeight="700"
        fontSize="225px"
        letterSpacing="0.05em"
        textTransform="capitalize"
        color={theme.palette.secondary[400]}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default BoxTitle;
