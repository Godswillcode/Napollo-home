import expan from "../Images/expan.jpg"

const Expansion = () => {
  return (
    <div className="myContainer mt-44">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img src={expan} alt="Expansion" className="h-2/3"/>

        {/* detail */}
        <div>
          <h2 className="title">Expansion Page</h2>
          <p className="text-lg font-medium md:pr-44">
            Discover artistes all around the world by their location via the
            expansion page. Also, get to know the top artistes in any location
            on the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expansion;
