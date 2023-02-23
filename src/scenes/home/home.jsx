/* eslint-disable no-unreachable */
import React from "react";
import FlexBetween from "../../components/FlexBetween";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import RectangleY from "../../components/rectangleY";

import RectangleMiddle from "../../components/home/rectangleMiddle";
import RectangleName from "../../components/home/rectangleName";
import BoxTitle from "../../components/home/boxTitle";
import BackgroundImg from "../../components/backgroundImg";
import RectangleX from "../../components/rectangleX";
import BoxName from "../../components/BoxName";

function Home() {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 600px)");
  return (
    <Box
      sx={{
        left: "100px",
        width: "1720px",
        height: "970px",
        position: "absolute",
      }}
    >
      <BackgroundImg />
      <RectangleY height="250px" width="3px" />
      <RectangleX width="250px" height="3px" top="247px" />
      <RectangleMiddle />
      <RectangleName />
      <RectangleY width="3px" height="120px" top="850px" left="248px" />
      <RectangleX width="248px" height="3px" top="850px" />
      <BoxTitle subtitle="2023" title="My portfolio" />
    </Box>
  );
}

export default Home;
