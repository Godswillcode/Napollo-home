import logo from "../Images/logo.png";

const About = () => {
  return (
    <div className="myContainer">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 text-white">
        <div className="pt-40">
          <h2 className="title">About Napollo</h2>
          <div className="md:pr-52">
            <p>
              Napollo is a music streaming service that connects artistes to
              listeners in a way that has never been done before.
            </p>
            <p className="py-5">
              Artists, musicians, music lovers, producers, no matter your taste
              or skills are, we are here to serve you the best all around the
              world.
            </p>
          </div>
        </div>

        <img
          src={logo}
          alt="about Napollo"
          className="md:mt-14  md:w-3/6 lg:w-full lg:mt-14 xl:mt-0"
        />
      </div>
    </div>
  );
};

export default About;
