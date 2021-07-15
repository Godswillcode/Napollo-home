import About from "./Components/About";
import Expansion from "./Components/Expansion";
import Hero from "./Components/Hero";
import Listen from "./Components/Listen";
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
     <Listen/>
     <div className="mb-32"></div>
    </>
  );
}

export default App;
