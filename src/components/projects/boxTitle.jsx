import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";

function BoxTitle({ number, title, subtitle, list }) {
  const theme = useTheme();
  return (
    <Box position="absolute" width="705px" height="366px" top="100px">
      <Typography
        variant="h6"
        position="absolute"
        fontFamily="Quicksand, sans-serif"
        fontWeight="300"
        fontSize="32px"
        color={theme.palette.secondary[400]}
      >
        {number}
      </Typography>
      <Typography
        variant="h1"
        position="absolute"
        fontSize="48px"
        lineHeight="56px"
        letterSpacing="0.2em"
        fontFamily="Quicksand, sans-serif"
        top="50px"
        color={theme.palette.secondary[400]}
      >
        {title}
      </Typography>
      <Typography
        /* border="1px solid red" */
        variant="p"
        width="700px"
        height="128px"
        position="absolute"
        left="40px"
        top="180px"
        color={theme.palette.secondary[400]}
        textAlign="justify"
      >
        {subtitle}
        <Typography component="li" position="absolute" left="5px">
          {list}
        </Typography>
      </Typography>
      <Box
        position="absolute"
        display="flex"
        width="369px"
        height="36px"
        top="240px"
        left="30px"
        gap="20px"
        /* border="1px solid blue" */
      >
        <Button
          href="https://github.com/DidoReis"
          sx={{ color: theme.palette.secondary[400] }}
        >
          Code
        </Button>
        <Button
          href="https://github.com/DidoReis"
          sx={{
            color: theme.palette.secondary[400],
            hover: theme.palette.secondary[400],
          }}
        >
          Live
        </Button>
      </Box>
    </Box>
  );
}

export default BoxTitle;
