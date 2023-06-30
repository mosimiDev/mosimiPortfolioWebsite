import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
import "./Home.css"

import Navbar from "../layout/Navbar";
function Home() {
  return (
    <div id="home" className="w-screen bg-yellow-300 h-screen dark:bg-[#000]">
      <Navbar />
      {/* Home Layout */}
      <div className="grid w-3/4 h-1/2 lg:w-1/2 mx-12 md:mx-auto  place-items-center my-16 lg:my-20 ">
        <div
          id="spinner"
          className="relative rounded-full mb-4 w-72 h-64 md:w-80 md:h-80 lg:w-96 "
        >
          <span></span>
          <span></span>
          <span></span>
          <img
            src={require("../assets/IMG_9135.JPG")}
            alt="img"
            className="max-w-full  left-20 md:left-4 md:w-72 md:h-72 h-52 mx-auto my-auto object-cover rounded-xl absolute  lg:left-8"
          />
        </div>
        <div className=" font-SFproLight text-md md:text-xl md:tracking-wide text-white ">
          MOSIMI AKINLABI
        </div>
        <div className="text-white font-SFproMedium text-md md:text-xl md:w-[26rem] tracking-wide w-40 mx-auto">
          A Frontend Mobile and Web Developer
        </div>
        {/* Social Pages */}
        <div className="flex gap-4 md:gap-8 mt-5">
          <a
            href="https://github.com/mosimiDev"
            className="text-2xl md:text-3xl text-[#58FFF5]"
            target={"_blank"}
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/mosimi-akinlabi-a327691b1/"
            className="text-2xl md:text-3xl text-[#58FFF5]"
            target={"_blank"}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <Link
            smooth
            to={"#contact"}
            className="text-2xl md:text-3xl text-[#58FFF5]"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
      </div>
      {/* Scroll down Layout */}
      <div className="grid place-items-center pt-10 md:pt-20">
        {/* <div className="text-white text-3xl">
          <FontAwesomeIcon icon={faHandPointDown} />
        </div> */}
        <Link smooth to={"#about"}>
          <FontAwesomeIcon
            icon={faAnglesDown}
            bounce
            className="text-white text-xl md:text-2xl mx-12 "
          />
          <p className="pt-2 text-white font-SFproMedium text-md md:text-xl mx-2">
            Scroll Down
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
