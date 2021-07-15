import logo from "../Images/logo.png";
import apple from "../Images/apple.png";
import google from "../Images/googlePlay.png";

const Footer = () => {
  return (
    <div className="bg-secondary py-12 mt-20 md:mt-64">
      <div className="myContainer">
        <div className="grid grid-cols-10">
          {/* first */}
          <div className="text-neutral text-sm">
            <img src={logo} alt="logo" className="16" />
            <h4>© 2020 Napollo</h4>

            <ul className="flex items-center gap-3 mt-5 ">
              <li>Legal</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>

          {/* second role */}
          <div></div>

          {/* last */}
          <div className="text-neutral">
            <h4 className="font-semibold tracking-wider">Follow Us</h4>

            <div className="flex items-center">
              <img src={apple} alt="apple" className="w-32" />
              <img src={google} alt="google playstore" className="w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
