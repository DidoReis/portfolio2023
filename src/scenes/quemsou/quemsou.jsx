import React from "react";
import { Box } from "@mui/material";
import AboutMe from "../../components/quemsou/aboutMe";
import SoftSkills from "../../components/quemsou/softSkills";
import Education from "../../components/quemsou/education";
import DarkLight from "../../components/DarkLight";
import RectangleX from "../../components/rectangleX";
import RectangleY from "../../components/rectangleY";

function Quemsou() {
  return (
    <Box
      sx={{
        /*  border: "1px solid red", */
        left: "100px",
        width: "1720px",
        height: "970px",
        position: "absolute",
      }}
    >
      <RectangleX width="1718px" height="3px" top="77px" />
      <RectangleY width="3px" height="80px" />
      <DarkLight />
      <AboutMe />
      <SoftSkills />
      <Education />
      <RectangleX width="1718px" height="3px" top="887px" />
      <RectangleY width="3px" height="80px" left="1716px" top="887px" />
    </Box>
  );
}

export default Quemsou;
