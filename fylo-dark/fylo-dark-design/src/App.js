import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Features from "./components/features/Features";
import Introduction from "./components/intro/Introduction";
import NavBar from "./components/nav/NavBar";
import Productivity from "./components/productivity/Productivity";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Introduction />
      <Features />
      <Productivity />
    </BrowserRouter>
  );
}

export default App;
