import expan from "../Images/expan.jpg";
import ex1 from "../Images/ex1.png";
import ex2 from "../Images/ex2.png";
import ex3 from "../Images/ex3.png";
import ex4 from "../Images/ex4.png";

const Expansion = () => {
  return (
    <div className="myContainer mt-44">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <img src={expan} alt="Expansion" className="h-2/3" />

        {/* detail */}
        <div>
          <h2 className="title">Expansion Page</h2>
          <p className="text-lg font-medium md:pr-48">
            Discover artistes all around the world by their location via the
            expansion page. Also, get to know the top artistes in any location
            on the globe.
          </p>

          <div className="mt-10">
            <ChildComp
              number="01"
              image={ex1}
              title1="Lights Out"
              title2="ColdPlay"
              icon="#3a3a3a"
            />

            <ChildComp
              number="02"
              image={ex2}
              title2="Green Tuska"
              icon="#f78127"
            />

            <ChildComp
              number="03"
              image={ex3}
              title2="Bruno Mars"
              icon="#3a3a3a"
            />
            <ChildComp
              number="04"
              image={ex4}
              title2="Cardi"
              icon="#3a3a3a"
              hiddenT="........."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Child component

const ChildComp = ({ number, image, title1, title2, icon, hiddenT }) => {
  return (
    <div className="flex items-center justify-around mt-5 lg:mr-80">
      <div className="flex items-center">
        <h4 className="text-white pr-3 font-bold">{number}</h4>
        <img src={image} alt="expansion" className="rounded-md mr-4" />
        <div className="">
          <span className="block text-neutral text-sm">{title1}</span>
          <span className="text-gray-600 font-medium text-sm">
            {title2} <i className="invisible">{hiddenT}</i>{" "}
          </span>
        </div>
      </div>
      <div className="ml-10">
        <svg
          className="w-7 h-7"
          fill={icon}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Expansion;
