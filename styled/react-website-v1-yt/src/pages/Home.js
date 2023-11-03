import React from "react";
import { InfoSection } from "../components";
import { homeObjOne, homeObjThree, homeObjTwo } from "./data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
