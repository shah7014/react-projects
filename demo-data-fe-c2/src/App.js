import "./App.css";
import {
  Hero,
  NavBar,
  IntroductionFlex,
  IntroductionGrid,
  NewsLetterFlex,
  NewsLetterGrid,
} from "./components";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      {/* <IntroductionFlex /> */}
      <IntroductionGrid />
      <NewsLetterFlex />
      {/* <NewsLetterGrid /> */}
    </div>
  );
}

export default App;
