import React from "react";

import Header from "./components/Header/header.tsx"
import HeroSection from "./components/HeroSection/index.tsx";
import LatestPostSection from "./components/LatestPostSection/latestPostSection.tsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <LatestPostSection/>
    </div>
  );
}

export default App;
