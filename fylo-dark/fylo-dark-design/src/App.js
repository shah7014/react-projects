import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Introduction from "./components/intro/Introduction";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Introduction />
    </BrowserRouter>
  );
}

export default App;
