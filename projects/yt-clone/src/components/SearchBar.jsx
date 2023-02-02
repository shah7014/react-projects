import { Search } from "@mui/icons-material";
import { IconButton, InputBase, Paper, Stack } from "@mui/material";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        backgroundColor: "white",
        px: "12px",
        py: "8px",
        width: "40%",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mr: { sm: 5 },
      }}
    >
      <InputBase
        placeholder="Search"
        sx={{
          flex: 1,
        }}
      />

      <IconButton sx={{ p: 0 }} type="submit">
        <Search color="error" />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
