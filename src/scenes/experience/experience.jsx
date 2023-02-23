import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

/* Components */
import Education from "../../components/experience/education";
import BoxExperience from "../../components/experience/boxExperience";
import DarkLight from "../../components/DarkLight";
import RectangleX from "../../components/rectangleX";
import RectangleY from "../../components/rectangleY";

function Experience() {
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
      <RectangleX width="1718px" height="3px" top="77px" />
      <RectangleY width="3px" height="80px" />
      <DarkLight />
      <Education />
      <BoxExperience />
      <RectangleX width="1718px" height="3px" top="887px" />
      <RectangleY width="3px" height="80px" left="1716px" top="887px" />
    </Box>
  );
}

export default Experience;
