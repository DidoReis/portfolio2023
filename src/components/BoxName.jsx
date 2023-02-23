import React from "react";

import { Box, Typography, useTheme } from "@mui/material";
import RightArrow from "../assets/img/right-dark.png";
import leftArrow from "../assets/img/left-dark.png";
import DarkLight from "../components/DarkLight";

function BoxName({ name, last }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        width: "529px",
        height: "250px",
        left: "268px",
        top: "580px",
        background: theme.palette.grey[900],
      }}
    >
      <Box
        className="boxNameProfession"
        sx={{
          position: "absolute",
          width: "282px",
          height: "122px",
          top: "60px",
          left: "64px",
        }}
      >
        <Typography
          className="firsName"
          sx={{
            position: "absolute",
            color: theme.palette.secondary[400],
            fontFamily: "Quicksand, sans-serif",
            fontWeight: "700",
            fontSize: "48px",
            lineHeight: "56.35px",
          }}
        >
          {name}
        </Typography>
        <Typography
          className="lastName"
          sx={{
            position: "absolute",
            color: theme.palette.secondary[100],
            fontFamily: "Quicksand, sans-serif",
            fontWeight: "300",
            fontSize: "20px",
            lineHeight: "23.48px",
            left: "calc(72% - 165px/2 - 116px)",
            top: "calc(35% - 23px/2 + 17.5px)",
          }}
        >
          {last}
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "109px",
            height: "23px",
            left: "calc(67% - 109px/2 - 146px)",
            top: "calc(25% - 23px/2 + 56.5px)",
          }}
          fontFamily="Quicksand, sans-serif"
          fontWeight="600"
          fontSize="20px"
          lineHeight="23px"
          textAlign="right"
        ></Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          width: "92px",
          height: "46px",
          top: "70px",
          left: "380px",
        }}
      >
        <Box position="absolute" right="100px" component="a" href="/experience">
          <img src={leftArrow} alt="" />
        </Box>
        <Box component="a" href="/projects">
          <img src={RightArrow} alt="" />
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",

          width: "26px",
          height: "26px",
          left: "445px",
          top: "130px",
        }}
      >
        <DarkLight />
      </Box>
    </Box>
  );
}

export default BoxName;
