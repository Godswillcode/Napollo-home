import About from "./Components/About";
import Download from "./Components/Download";
import Expansion from "./Components/Expansion";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Listen from "./Components/Listen";
import Navbar from "./Components/Navbar";
import Plan from "./Components/Plan";
import Testimonial from "./Components/Testimonial";
import WhatHot from "./Components/WhatHot";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhatHot />
      <Expansion />
      <Listen />
      <Plan />
      <Testimonial />
      <Download />
      <Footer />
      <div className="mb-60"></div>
    </>
  );
}

export default App;
