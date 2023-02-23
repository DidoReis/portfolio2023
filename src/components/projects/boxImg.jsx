import { Box } from "@mui/material";
import React from "react";

import Web1 from "../../assets/img/web1.png";
import Web2 from "../../assets/img/Web2.png";

function BoxImg() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "938px",
        height: "968px",

        left: "780px",
      }}
    >
      <Box
        component="img"
        position="absolute"
        left="0px"
        width="455px"
        height="740px"
        top="226px"
        src={Web1}
      ></Box>
      <Box
        component="img"
        position="absolute"
        width="520px"
        height="940px"
        left="400px"
        src={Web2}
      ></Box>
    </Box>
  );
}

export default BoxImg;
