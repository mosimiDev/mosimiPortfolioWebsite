import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../layout/Navbar";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Home() {
  const container = useRef();
  const image = useRef();
  const textsection = useRef();

  useGSAP(
    () => {
      gsap.from(image.current,
        {
          x: "200",
          duration: 1,
          opacity: "0.5",
          ease:"power1.in",
        });
    },
    gsap.from(textsection.current, {
      opacity: "0",
    }),
    { scope: container }
  );

  return (
    <section
      id="/"
      className=" w-screen bg-black   dark:bg-[#000] p-8"
      ref={container}
    >
      <Navbar />
      {/* Home Layout */}
      <div className="flex mt-2 lg:mt-6 ">
        {/* Text section */}
        <div
          className="relative left-[1rem] md:left-[4rem]   lg:left-[2rem] grid h-[26rem]  w-1/4 md:w-1/5 lg:w-1/2 pt-20 md:pt-40   lg:pt-6 md:mx-auto  place-items-center my-4 lg:my-12 z-[100]"
          id="text"
          ref={textsection}
        >
          <div className=" font-SFproBold mx-auto text-md md:text-4xl md:tracking-wide text-white my-0 py-0 text-center">
            Hi, I am Mosimi
          </div>
          <div className=" font-SFproLight  text-md md:text-2xl md:w-[20rem] tracking-wide w-40  lg:w-[40rem] text-white mx-auto my-1 lg:my-4 py-0  text-center dark:bg-[#fff]">
            I am a frontend engineer and a creative that helps businesses bring
            their ideas to life and achieve their creative goals
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

        {/* Image section */}
        <div className="rounded-full mt-4 relative lg:right-32 top-12 lg:mt-6 mb-4 w-64 h-64 lg:w-72 lg:h-72 bg-[#58FFF5] z-20">
          <img
            src={require("../assets/IMG_5042.JPG")}
            alt="img"
            className="w-4/5 h-60 lg:w-64 pt-4 mt-5 lg:pt-1 lg:h-64 object-cover object-center mx-auto  rounded-full overflow-hidden"
          />
        </div>
      </div>

      <About />
      <Experience />
      <Projects />
      <Contact />
    </section>
  );
}

export default Home;
