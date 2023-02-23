import React from "react";
import { Box, useTheme } from "@mui/material";

/* Import Components */
import RectangleY from "../../components/rectangleY";
import RectangleOnMiddle from "../../components/home/rectangleMiddle";
import BoxTitle from "../../components/home/boxTitle";
import RectangleX from "../../components/rectangleX";
import BoxName from "../../components/BoxName";
import BackgroundImg from "../../components/backgroundImg";

function Contacts() {
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
      <RectangleY height="250px" width="3px" />
      <RectangleX height="3px" width="250px" top="247px" />
      <RectangleOnMiddle />
      <BoxName name="Contacts" last="Excited to talk to you" profession="" />
      <BackgroundImg />
      <BoxTitle subtitle="Get in touch" title="Contact" />
      <RectangleY width="3px" height="120px" top="850px" left="248px" />
      <RectangleX width="248px" height="3px" top="850px" />
    </Box>
  );
}

export default Contacts;
