import { Box } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "skyblue",
        p: 2,
        flex: 2,
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      RightBar
    </Box>
  );
};

export default RightBar;
