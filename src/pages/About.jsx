import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faSplotch } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <div id="about" className="bg-[#E0D9D9] dark:bg-[#000] p-8  w-full">
      <div>
        <h3 className="text-[#000] text-md ml-4 md:text-xl lg:text-2xl lg:mb-20 lg:ml-32">
          About Me
        </h3>
        {/* <!-- Image x description --> */}
        <div className="lg:flex lg:gap-8 mb-8 lg:mb-12">
          <div className="rounded-full mt-4 ml-4 lg:ml-12 lg:mt-6 mb-4 w-64 h-64 lg:w-72 lg:h-72 bg-yellow-300 z-20">
            <img
              src={require("../assets/IMG_9135.JPG")}
              alt="img"
              className="max-w-full h-60 lg:w-64 mt-5 lg:h-60 object-cover object-center mx-auto rounded-full overflow-hidden"
            />
          </div>
          <div className="w-11/12 mx-auto p-6 lg:w-2/3 lg:h-[32rem] lg:p-12 bg-[#fff] shadow-xl rounded-xl">
            <p className="font-SFproLight text-md lg:text-xl">
              Hi, I am Mosimi Akinlabi, a creative Frontend Developer. I love
              programming UI for mobile applications and websites with creative
              interfaces that meet functional needs using technologies like
              React Native, TypeScript, React.js, Redux, Javascript, Material UI,
              TailwindCSS, CSS3 and HTML5. My skills are wide ranging, spanning
              across multiple creative and technical disciplines and I am always
              in constant pursuit of skills that can help develop me into a well
              rounded professional. I like to learn, make impactful changes to
              tech by teaching newbies in tech through the Medium platform and
              have fun while at it. In my spare time, I like to draw, write,
              watch anime, eat good food and hang out with my friends.
            </p>
            <button className="bg-[#000] rounded-3xl w-32 mt-2  lg:mt-3 text-sm md:text-md text-white p-2 font-SFproLight transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110  duration-300">
              View CV
            </button>
          </div>
        </div>
        {/* <!-- Stats div --> */}
        <div className="flex w-full  md:w-3/4 md:mx-auto gap-1 md:gap-4 lg:mx-72 xl:mx-96 2xl:mx-[29rem]">
          {/* <!-- First stat --> */}
          <div className="flex mx-1 gap-1 lg:mx-5 lg:gap-3 ">
            <span className="text-xl lg:text-4xl">
              <FontAwesomeIcon icon={faFire} className=" dark:text-[#fff]" />
            </span>
            <div>
              <p className="font-bold  text-xl mx-2 lg:mx-5 dark:text-[#fff]">
                20
              </p>
              <p className="font-SFproLight  text-md  dark:text-[#fff]">
                Projects Completed
              </p>
            </div>
          </div>
          {/* <!-- Second stat --> */}
          <div className="flex mx-1 lg:mx-5 gap-3">
            <span className="text-xl lg:text-3xl">
              <FontAwesomeIcon icon={faBuilding} className="dark:text-[#fff]" />
            </span>
            <div>
              <p className="font-bold text-xl mx-2 lg:mx-5 dark:text-[#fff]">
                2
              </p>
              <p className="font-SFproLight text-md dark:text-[#fff]">
                Running Projects
              </p>
            </div>
          </div>
          {/* <!-- Third stat --> */}
          <div className="flex mx-1 lg:mx-5 gap-3">
            <span className=" text-xl lg:text-3xl">
              <FontAwesomeIcon icon={faUser} className="dark:text-[#fff]" />
            </span>
            <div>
              <p className="font-bold text-xl mx-2 lg:mx-5 dark:text-[#fff]">
                16
              </p>
              <p className="font-SFproLight text-md dark:text-[#fff]">
                Satisfied Clients
              </p>
            </div>
          </div>
        </div>
        <h4 className="text-[#000] text-xl md:tracking-wide mb-5 ml-12 mt-12 dark:text-[#fff]">
          Stacks
        </h4>
        <span className="flex gap-3 ml-12 text-xl">
          <FontAwesomeIcon icon={faReact} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">React Native</p>
        </span>
        <span className="flex gap-3 ml-12 text-xl">
          <FontAwesomeIcon icon={faReact} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">ReactJS</p>
        </span>
        <span className="flex gap-3 ml-12 text-xl">
          <FontAwesomeIcon icon={faReact} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">React-Redux</p>
        </span>
        <span className="flex gap-3 ml-12 text-xl">
          <FontAwesomeIcon icon={faSplotch} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">TypeScript</p>
        </span>
        <span className="flex gap-3 ml-12 text-xl">
          <FontAwesomeIcon icon={faSplotch} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">JavaScript</p>
        </span>
        <span className="flex gap-3 ml-12 text-xl">
          <FontAwesomeIcon icon={faFigma} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">Figma Design</p>
        </span>
        <span className="flex gap-3 ml-12 text-xl">
          <FontAwesomeIcon icon={faSplotch} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">Material UI</p>
        </span>
        <span className="flex gap-3 ml-12 text-xl">
          <FontAwesomeIcon icon={faSplotch} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">Tailwind CSS</p>
        </span>
        <span className="flex gap-3 ml-12 text-xl">
          <FontAwesomeIcon icon={faCss3} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">CSS3</p>
        </span>
        <span className="flex gap-3 ml-12 text-xl">
          <FontAwesomeIcon icon={faHtml5} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">HTML5</p>
        </span>
      </div>
    </div>
  );
}

export default About;
