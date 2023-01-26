import "./App.css";
import {
  Hero,
  NavBar,
  IntroductionFlex,
  IntroductionGrid,
  NewsLetterFlex,
  NewsLetterGrid,
  PriceOptions,
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
      <PriceOptions />
    </div>
  );
}

export default App;
