import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router";

function Layout() {
  const isNonMobile = useMediaQuery("min-width: 600px");

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      position="relative"
      zIndex="0"
      display={isNonMobile ? "flex" : "block"}
      width="100%"
      height="100%"
    >
      <Outlet />
    </Box>
  );
}

export default Layout;
