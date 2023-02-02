import { Box, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{}}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
