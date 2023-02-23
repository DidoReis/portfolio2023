import { Box } from "@mui/material";
import React from "react";

import Web3 from "../../assets/img/web3.png";
import Web4 from "../../assets/img/web4.png";

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
        width="500px"
        height="968px"
        top="-20px"
        src={Web3}
      ></Box>
      <Box
        component="img"
        position="absolute"
        width="520px"
        height="940px"
        left="400px"
        top="20px"
        src={Web4}
      ></Box>
    </Box>
  );
}

export default BoxImg;
