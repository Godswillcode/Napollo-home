import About from "./Components/About";
import Expansion from "./Components/Expansion";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import WhatHot from "./Components/WhatHot";

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <WhatHot/>
     <Expansion/>
     <div className="mb-32"></div>
    </>
  );
}

export default App;
