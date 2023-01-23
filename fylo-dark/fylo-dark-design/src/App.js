import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Features from "./components/features/Features";
import Introduction from "./components/intro/Introduction";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Introduction />
      <Features />
    </BrowserRouter>
  );
}

export default App;
