import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../layout/Navbar";
import WebgiViewer from "../layout/WebgiViewer";

function Home() {
  // const webgiRef = useRef(null);
  return (
    <div id="home" className="w-screen bg-yellow-300 h-screen dark:bg-[#000]">
      <Navbar />
      {/* Home Layout */}
      <div className="flex ">
        <div>
          <img
            src={require("../assets/IMG_1890.png")}
            alt="img"
            // className="w-4/5 h-60 lg:w-64 pt-4 mt-5 lg:pt-1 lg:h-64 object-cover object-center mx-auto  rounded-full overflow-hidden"
          />
        </div>
        <div className="grid  w-3/4 lg:w-1/2 mx-12 md:mx-auto  place-items-center my-4 lg:my-12 ">
          {/* <WebgiViewer /> */}

          <div className=" font-SFproBold mx-auto text-md md:text-4xl md:tracking-wide text-white my-0 py-0  text-center">
            Hi, I am Mosimi
          </div>
          <div className=" font-SFproLight  text-md md:text-2xl md:w-[38rem] tracking-wide w-40 text-white mx-auto my-0 py-0  text-center dark:bg-[#fff]">
            I am a frontend engineer and a creative bringing ideas to life and
            helping companies achieve their creative goals
          </div>

          {/* Social Pages */}
          <div className="flex gap-4 md:gap-8 mt-5">
            <a
              href="https://github.com/mosimiDev"
              target={"_blank"}
              rel="noreferrer"
              className="text-2xl md:text-3xl text-[#58FFF5] "
            >
              <span>
                <FontAwesomeIcon icon={faSquareGithub} />
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/mosimi-akinlabi-a327691b1/"
              target={"_blank"}
              rel="noreferrer"
              className="text-2xl md:text-3xl text-[#58FFF5]"
            >
              <span>
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
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
      </div>

      {/* Scroll down Layout */}
      {/* <div className="grid place-items-center pt-10 md:pt-20 text-center">
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
      </div> */}
    </div>
  );
}

// text-[#58FFF5]
// style={{color:'#58FFF5',inset:'0'}}

export default Home;
