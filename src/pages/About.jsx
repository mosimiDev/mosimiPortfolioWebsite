import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { faSplotch } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About() {
  const hcontainer = useRef();
  const titleRef = useRef();
  const imgdescRef = useRef();
  const stackRef = useRef();


  return (
    <div
      id="about"
      ref={hcontainer}
      className="bg-[#E0D9D9] dark:bg-[#000] p-8  w-full"
    >
      <div>
        <h3
          ref={titleRef}
          id="title"
          className="text-[#000] text-md ml-4 md:text-xl lg:text-2xl lg:mb-20 lg:ml-32"
        >
          About Me
        </h3>
        {/* <!-- Image x description --> */}
        <div
          className="lg:flex lg:gap-8 mb-8 lg:mb-12"
          id="imgdesc"
          ref={imgdescRef}
        >
          <div className="rounded-full mt-4 ml-4 lg:ml-12 lg:mt-6 mb-4 w-64 h-64 lg:w-72 lg:h-72 bg-[#58FFF5] z-20">
            <img
              src={require("../assets/IMG_1892.png")}
              alt="img"
              className="w-4/5 h-60 lg:w-64 pt-4 mt-5 lg:pt-1 lg:h-64 object-cover object-center mx-auto  rounded-full overflow-hidden"
            />
          </div>
          <div className="w-11/12 mx-auto p-6  lg:w-2/3 lg:h-[26rem] lg:p-12 bg-[#fff] shadow-xl rounded-xl">
            <p className="font-SFproLight text-md lg:text-xl mb-2">
              I am Mosimi, a frontend software engineer. I create User
              Interface(UI) for mobile applications, web applications and
              websites while ensuring that the product's aim is well
              communicated to its users.
            </p>

            <p className="font-SFproLight text-md lg:text-xl mb-3 ">
              I am driven by problem solving and I constantly evolve myself
              through learning, makings impactful changes to the tech space by
              teaching newbies in tech through my platform on social media, and
              have fun while at it. In my spare time, I play volleyball, draw,
              watch anime, read, eat good food and hang out with my friends.
            </p>
            <Link
              smooth
              to={"#projects"}
              className="bg-[#000] rounded-3xl px-6 mt-3  lg:mt-8 text-sm md:text-lg text-white py-2 font-SFproLight transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 hover:bg-[#767676] duration-300"
            >
              View My Works
            </Link>
            {/* <a
              href={
                "https://docs.google.com/document/d/1ylaVmdcaPWoR6f7n2cgE_jGbXeoQ5laHzNFEoZOu9V4/edit?usp=sharing"
              }
              target="_blank"
              rel="noreferrer"
            ></a> */}
          </div>
        </div>
        {/* <!-- Stacks --> */}
        <h4 className="text-[#000] text-md lg:text-lg md:tracking-wide mb-5 ml-12 mt-12 dark:text-[#fff]">
          Stacks
        </h4>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ml-12"
          id="stacks"
          ref={stackRef}
        >
          <div className="flex items-center gap-3 font-SFproLight text-md lg:text-xl">
            <FontAwesomeIcon icon={faReact} className="dark:text-[#fff]" />
            <p className="tracking-wide dark:text-[#fff]">React-Native</p>
          </div>

          <div className="flex items-center gap-3 font-SFproLight text-md lg:text-xl">
            <FontAwesomeIcon icon={faFire} className="dark:text-[#fff]" />
            <p className="tracking-wide dark:text-[#fff]">Firebase</p>
          </div>

          <div className="flex items-center gap-3 font-SFproLight text-md lg:text-xl">
            <FontAwesomeIcon icon={faReact} className="dark:text-[#fff]" />
            <p className="tracking-wide dark:text-[#fff]">ReactJS</p>
          </div>

          <div className="flex items-center gap-3 font-SFproLight text-md lg:text-xl">
            <FontAwesomeIcon icon={faReact} className="dark:text-[#fff]" />
            <p className="tracking-wide dark:text-[#fff]">React-Redux</p>
          </div>

          <div className="flex items-center gap-3 font-SFproLight text-md lg:text-xl">
            <FontAwesomeIcon icon={faSplotch} className="dark:text-[#fff]" />
            <p className="tracking-wide dark:text-[#fff]">TypeScript</p>
          </div>

          <div className="flex items-center gap-3 text-sm lg:text-xl">
            <FontAwesomeIcon icon={faSplotch} className="dark:text-[#fff]" />
            <p className="tracking-wide font-SFproLight text-md lg:text-xl dark:text-[#fff]">
              JavaScript
            </p>
          </div>

          <div className="flex items-center gap-3 font-SFproLight text-md lg:text-xl">
            <FontAwesomeIcon icon={faFigma} className="dark:text-[#fff]" />
            <p className="tracking-wide dark:text-[#fff]">Figma Design</p>
          </div>

          <div className="flex items-center gap-3 font-SFproLight text-md lg:text-xl">
            <FontAwesomeIcon icon={faSplotch} className="dark:text-[#fff]" />
            <p className="tracking-wide dark:text-[#fff]">Material UI</p>
          </div>

          <div className="flex items-center gap-3 font-SFproLight text-md lg:text-xl">
            <FontAwesomeIcon icon={faSplotch} className="dark:text-[#fff]" />
            <p className="tracking-wide dark:text-[#fff]">Tailwind CSS</p>
          </div>

          <div className="flex items-center gap-3 font-SFproLight text-md lg:text-xl">
            <FontAwesomeIcon icon={faCss3} className="dark:text-[#fff]" />
            <p className="tracking-wide dark:text-[#fff]">CSS3</p>
          </div>

          <div className="flex items-center gap-3 font-SFproLight text-md lg:text-xl">
            <FontAwesomeIcon icon={faHtml5} className="dark:text-[#fff]" />
            <p className="tracking-wide dark:text-[#fff]">HTML5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
