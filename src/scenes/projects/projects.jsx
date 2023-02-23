import { Box, useTheme } from "@mui/material";
import { height } from "@mui/system";
import React from "react";

import RightArrow from "../../assets/img/right-dark.png";
import leftArrow from "../../assets/img/left-dark.png";

/* Components */
import RectangleY from "../../components/rectangleY";
import BoxTitle from "../../components/projects/boxTitle";
import BoxImg from "../../components/projects/boxImg";

function Projects() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        left: "100px",
        width: "1720px",
        height: "970px",
        position: "absolute",
      }}
    >
      <RectangleY height="100px" width="3px" />
      <BoxTitle
        number="01"
        title="Digi Agency"
        subtitle="The designed website is a WordPress template that is suitable for all types of businesses."
        list="Designing the responsive landing pages
        "
      />
      <BoxImg />
      <Box
        sx={{
          display: "flex",
          position: "absolute",

          left: "355px",
          width: "234px",
          height: "46px",
          top: "641px",
        }}
      >
        <Box component="a" href="/websites">
          <img src={leftArrow} alt="" />
        </Box>
        <Box position="absolute" left="140px" component="a" href="/projects2">
          <img src={RightArrow} alt="" />
        </Box>
      </Box>
      <RectangleY width="3px" height="680px" top="288px" />
    </Box>
  );
}

export default Projects;
