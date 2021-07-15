import heroBg from "../Images/heroImage.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div className="myContainer">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="pt-20">
          <h3 className="text-white text-2xl md:text-5xl font-black md:leading-tight">
            More fans, More Gigs, Less Eort Get better feedback, wider exposure
            and deeper industry access without ever switching tabs.
          </h3>
          <button className="border rounded-3xl text-white px-4 py-2 text-sm mt-8 hover:bg-primary hover:border-none">
            Let's get Started
          </button>
        </div>

        <img src={heroBg} alt="header" className="md:h-4/5" />
      </div>
    </div>
  );
};

export default Hero;
