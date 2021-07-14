import heroBg from "../Images/heroImage.jpg";

const Hero = () => {
  return (
    <div className="myContainer">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="pt-20">
          <h3 className="text-white text-4xl font-bold">
            More fans, More Gigs, Less Eort Get better feedback, wider exposure
            and deeper industry access without ever switching tabs.
          </h3>
          <button className="border rounded-3xl text-white px-4 py-2 text-sm mt-4">Let's get Started</button>
        </div>

        <img src={heroBg} alt="header" height="50%" width="80%"/>
      </div>
    </div>
  );
};

export default Hero;
