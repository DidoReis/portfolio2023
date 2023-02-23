import React, { useState } from "react";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import { IconButton, useTheme } from "@mui/material";
import { Box } from "@mui/system";

function DarkLight(top) {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box sx={{ alignItems: "center", justifyContent: "center" }}>
      <FlexBetween
        sx={{
          width: "30px",
          height: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          sx={{
            width: "30px",
            height: "30px",
          }}
          onClick={() => dispatch(setMode())}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined sx={{ fontSize: "25px" }} />
          ) : (
            <LightModeOutlined sx={{ fontSize: "25px" }} />
          )}
        </IconButton>
      </FlexBetween>
    </Box>
  );
}

export default DarkLight;
