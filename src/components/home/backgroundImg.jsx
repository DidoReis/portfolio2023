import React from "react";
import { Box } from "@mui/material";
import backgroundImg from "../../assets/img/BackgroundImg.png";
import backgroundImg2 from "../../assets/img/BackgroundImg2.png";

function BackgroundImg() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "870px",
        height: "870px",
        left: "850px",
        display: "flex",
      }}
    >
      <Box>
        <img src={backgroundImg} alt="" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "870px",
          height: "870px",
          left: "0px",
        }}
      >
        <img src={backgroundImg} alt="" />
      </Box>
    </Box>
  );
}

export default BackgroundImg;
