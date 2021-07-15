import catset from "../Images/catset.png";

const Listen = () => {
  return (
    <div className="bg-primary py-14 px-5 mt-12 md:mt-0">
      <div className="myContainer grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={catset} alt="listen" />
        <div>
          <h2 className="text-2xl md:text-6xl font-extrabold pb-5 text-black">
            Listen and enjoy all trending music
          </h2>

          <ul>
            <li>What’s hot</li>
            <li>By genre</li>
            <li>By location</li>
            <li>Lot’s more...</li>
          </ul>

          <button
            className="rounded-2xl px-5 mt-4 py-1 text-primary text-sm"
            style={{ background: "rgba(0,0,0,255)" }}
          >
            Start listening
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listen;
