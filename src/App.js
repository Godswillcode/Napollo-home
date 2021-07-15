import About from "./Components/About";
import Expansion from "./Components/Expansion";
import Hero from "./Components/Hero";
import Listen from "./Components/Listen";
import Navbar from "./Components/Navbar";
import Plan from "./Components/Plan";
import WhatHot from "./Components/WhatHot";

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <WhatHot/>
     <Expansion/>
     <Listen/>
     <Plan/>
     <div className="mb-32"></div>
    </>
  );
}

export default App;
