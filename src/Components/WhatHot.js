import hotImage from "../Images/hot.jpg";
import album1 from "../Images/item1.jpg";
import album2 from "../Images/item2.jpg";
import album3 from "../Images/item3.jpg";
import ep1 from "../Images/single1.png";
import ep2 from "../Images/single2.png";
import ep3 from "../Images/single3.png";

const WhatHot = () => {
  return (
    <div className="myContainer">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div>
          <h2 className="title">What's Hot!</h2>
          <div className="flex justify-between mb-2">
            <h4 className="text-white font-medium">Albums</h4>
            <h6 className="flex items-center cursor-pointer">
              <span className="text-neutral text-sm pr-2">View All</span>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokewinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </h6>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div>
              <img src={album2} alt="album" className="rounded-md w-full" />
              <div className="mt-2 flex justify-between text-sm">
                <div>
                  <span className="block text-neutral">Death Bed</span>
                  <span className="text-primary">Powerful </span>
                </div>
                <div>
                  <span>
                    <svg
                      className="w-6 h-6 text-neutral"
                      fill="none"
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
                  </span>
                  <span className="block text-neutral">1.3k</span>
                </div>
              </div>
            </div>

            <div>
              <img src={album3} alt="album" className="rounded-md w-full" />
              <div className="mt-2 flex justify-between text-sm">
                <div>
                  <span className="block text-neutral">Faded</span>
                  <span className="text-primary">Alan Walker </span>
                </div>
                <div>
                  <span>
                    <svg
                      className="w-6 h-6 text-neutral"
                      fill="none"
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
                  </span>
                  <span className="block text-neutral">1.4k</span>
                </div>
              </div>
            </div>

            <div>
              <img src={album1} alt="album" className="rounded-md w-full" />
              <div className="mt-2 flex justify-between text-sm">
                <div>
                  <span className="block text-neutral">Hate Me</span>
                  <span className="text-primary">Ellie Goulding</span>
                </div>
                <div>
                  <span>
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="#f78127"
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
                  </span>
                  <span className="block text-neutral">1.6k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Single and EPS */}
          <div className="flex justify-between mb-2 mt-10">
            <h4 className="text-white font-medium">Singles & EPs</h4>
            <h6 className="flex items-center cursor-pointer">
              <span className="text-neutral text-sm pr-2">View All</span>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokewinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </h6>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <img src={ep1} alt="album" className="rounded-md w-full" />
              <div className="mt-2 flex justify-between text-sm">
                <div>
                  <span className="block text-neutral">Let's Dance</span>
                  <span className="text-primary">Bowie </span>
                </div>
                <div>
                  <span>
                    <svg
                      className="w-6 h-6 text-neutral"
                      fill="none"
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
                  </span>
                  <span className="block text-neutral">1.3k</span>
                </div>
              </div>
            </div>

            <div>
              <img src={ep2} alt="album" className="rounded-md w-full" />
              <div className="mt-2 flex justify-between text-sm">
                <div>
                  <span className="block text-neutral">Bad Romance</span>
                  <span className="text-primary">Rihanna </span>
                </div>
                <div>
                  <span>
                    <svg
                      className="w-6 h-6 text-neutral"
                      fill="none"
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
                  </span>
                  <span className="block text-neutral">1.4k</span>
                </div>
              </div>
            </div>

            <div>
              <img src={ep3} alt="album" className="rounded-md w-full" />
              <div className="mt-2 flex justify-between text-sm">
                <div>
                  <span className="block text-neutral">Fly</span>
                  <span className="text-primary">Coldplay</span>
                </div>
                <div>
                  <span>
                    <svg
                      className="w-6 h-6 text-neutral"
                      fill="none"
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
                  </span>
                  <span className="block text-neutral">1.6k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="bg-primary p-2 rounded-full hidden lg:flex justify-center lg:ml-3">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
          <img src={hotImage} alt="whats hot" className="max-h-96 md:ml-10" />
        </div>
      </div>
    </div>
  );
};

export default WhatHot;
