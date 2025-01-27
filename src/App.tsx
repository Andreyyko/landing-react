import React from "react";

import Header from "./components/Header/header.tsx"
import HeroSection from "./components/HeroSection/index.tsx";
import LatestPostSection from "./components/LatestPostSection/latestPostSection.tsx";
import ValuesSection from "./components/ValuesSection/valuesSection.tsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <LatestPostSection/>
      <ValuesSection/>
    </div>
  );
}

export default App;
