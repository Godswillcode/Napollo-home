import download from "../Images/download2.png";
import apple from "../Images/apple.png";
import google from "../Images/googlePlay.png";

const Download = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-48">
      <img src={download} alt="download" />

      <div className="myContainer pt-16">
        <h2 className="title md:pr-14">
          Download our iOS and Android apps{" "}
          <span className="text-white md:block">for Free</span>
        </h2>
        <p className="md:pr-32">
          Downloaded over 10 million times in less than six months, our
          cross-platform app allows you to listen to, discover, favorite, and
          share music on the go.
        </p>

        <div className="flex items-center mt-4 -ml-5">
          <img src={apple} alt="apple" className="md:w-48 w-28" />
          <img src={google} alt="google playstore" className="md:w-48 w-28" />
        </div>
      </div>
    </div>
  );
};

export default Download;
