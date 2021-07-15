import logoW from "../Images/logo4.png";
import logo from "../Images/logo.png";

const Plan = () => {
  return (
    <div className="myContainer mt-20">
      <h2 className="title text-center">Choose Your Plan</h2>

      <div className="flex justify-center  flex-wrap mt-7">
        <div className="bg-primary py-5 px-10 border text-white">
           <div className="flex justify-center">
           <div className="flex justify-center items-center w-24 h-24 rounded-full" style={{background: "var(--neutral)"}}>
            <img
              src={logo}
              alt="logo"
              className="rounded-full"
              className="w-28 h-28"
            />
          </div>
           </div>

          <div className="text-center mb-6">
            <h4 className="font-bold tracking-wider pb-1 pt-2">Free</h4>
            <p className="text-sm text-white">Enjoy unlimited online music</p>
            <div className="flex justify-center mt-3">
              <div className="bg-white w-12" style={{ height: 2 }} />
            </div>
          </div>

          <div>
            <h3 className="font-extrabold tracking-wider text-lg pb-3">
              <span className="text-black">$7.99</span> / month
            </h3>
            <h6 className="text-sm">Start with one month free trial</h6>
            <div className="flex justify-center mt-3">
              <div className="bg-white w-full" style={{ height: 2 }} />
            </div>
            <button
              className="px-7 rounded-3xl mt-3 py-1"
              style={{ background: "var(--neutral)" }}
            >
              Features
            </button>
          </div>

          <ul className="mt-10 planList">
            <li style={{ color: "#5b3a25" }}>
              &#x2713; <span className="pl-2">Office mode</span>
            </li>
            <li>
              &#x2713; <span className="pl-2">Online listening</span>
            </li>
            <li style={{ color: "#5b3a25" }}>
              &#x2713; <span className="pl-2">No Ads</span>
            </li>
            <li>
              &#x2713; <span className="pl-2">Regular Audio</span>
            </li>
            <li>
              &#x2713; <span className="pl-2">Offline mode</span>
            </li>
            <li>
              &#x2713; <span className="pl-2">30 skips per day</span>
            </li>
            <li>
              &#x2713; <span className="pl-2">With Ads</span>
            </li>
            <li style={{ color: "#5b3a25" }}>
              &#x2713; <span className="pl-2">Unlimited skips</span>
            </li>
          </ul>

          <button className="bg-white text-primary px-20 py-2 mt-4 rounded-3xl font-bold">
            Activate
          </button>
        </div>

        <div className="mx-8 hidden sm:flex md:flex lg:flex"></div>
        {/* premium plan */}

        <div
          className="py-5 px-10 shadow mt-10 sm:mt-0"
          style={{ background: "rgba(0,0,0,255)", color: "#5b3a25" }}
        >
          <div className="flex justify-center mb-2">
            <div
              className="flex justify-center items-center w-24 h-24 rounded-full"
              style={{ background: "rgb(100, 100, 100)" }}
            >
              <img
                src={logo}
                alt="logo"
                className="rounded-full"
                className="w-28 h-28"
              />
            </div>
          </div>
          <div className="text-center mb-6">
            <h4 className="font-bold tracking-wider pb-1 pt-2 text-primary">Premium</h4>
            <h5 className="text-sm">Napollo premium mode sounds better</h5>
            <div className="flex justify-center mt-3">
              <div className="bg-gray-700 w-12" style={{ height: 2 }} />
            </div>
          </div>

          <div>
            <h3 className="font-extrabold tracking-wider text-lg pb-3">
              <span className="text-white">$7.99</span> / month
            </h3>
            <h6 className="text-sm">Start with one month free trial</h6>
            <div className="flex justify-center mt-3">
              <div className="bg-gray-700 w-full" style={{ height: 2 }} />
            </div>
            <button
              className="px-7 rounded-3xl mt-3 py-1 text-primary font-bold"
              style={{ background: "rgb(100, 100, 100)" }}
            >
              Features
            </button>
          </div>

          <ul className="mt-10 planList">
            <li style={{ color: "#5b3a25" }}>
              &#x2713; <span className="pl-2">Office mode</span>
            </li>
            <li>
              &#x2713; <span className="pl-2">Online listening</span>
            </li>
            <li style={{ color: "#5b3a25" }}>
              &#x2713; <span className="pl-2">No Ads</span>
            </li>
            <li>
              &#x2713; <span className="pl-2">Regular Audio</span>
            </li>
            <li>
              &#x2713; <span className="pl-2">Offline mode</span>
            </li>
            <li>
              &#x2713; <span className="pl-2">30 skips per day</span>
            </li>
            <li>
              &#x2713; <span className="pl-2">With Ads</span>
            </li>
            <li style={{ color: "#5b3a25" }}>
              &#x2713; <span className="pl-2">Unlimited skips</span>
            </li>
          </ul>

          <button className="bg-primary text-white px-20 py-2 mt-10 rounded-3xl font-bold">
            Activate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
