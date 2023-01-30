import { Box } from "@mui/material";
import React from "react";

const SideBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "green",
        display: { xs: "none", md: "block" },
        p: 2,
        flex: 1,
      }}
    >
      SideBar
    </Box>
  );
};

export default SideBar;
