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
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function About() {

gsap.registerPlugin(ScrollTrigger); 
  // let tl = gsap.timeline();
  // let about = document.getElementById("about");

  // const getOverlap = () => {
  //   Math.min(window.innerHeight, about.offsetHeight)
  // };
  // const adjustAboutOverlap = () => {
  //   about.style.marginTop = getOverlap() + "px"
  // };

  // adjustAboutOverlap();

  // ScrollTrigger.addEventListener("revert", adjustAboutOverlap);




  const titleRef = useRef(null);
  const imgdescRef = useRef(null);
  const stackRef = useRef(null);

  // useEffect(() => {

  //   ScrollTrigger.create({
  //     trigger: about,
  //     start: () => "top" + (window.innerHeight - getOverlap()),
  //     end: () => "+=" + getOverlap(),
  //     pin:true
  //   })
  //   // tl.from(titleRef.current, {
  //   //   duration: 1,
  //   //   autoAlpha:0,
  //   //   ease: "power1.out",
  //   //   scrollTrigger: {
  //   //     trigger: "#title",
  //   //     start: "top 50px",
  //   //     toggleActions: "play none none reverse",
  //   //   }
  //   // });

  //   // tl.fromTo(
  //   //   imgdescRef.current,
  //   //   {
  //   //     autoAlpha: 0,
  //   //   },
  //   //   {
  //   //     duration: 0.7,
  //   //     autoAlpha: 1,
  //   //     ease: "none",
  //   //     scrollTrigger: {
  //   //       trigger: "#title",
  //   //       start: "top center+=100",
  //   //       toggleActions: "play none none reverse",
  //   //       markers: true,
  //   //     },
  //   //   }
  //   // );
  //   // gsap.from(
  //   //   s,
  //   //   {
  //   //     duration: 1,
  //   //     opacity: 0,
  //   //     ease: "bounce",
  //   //     x: -80,
  //   //     scrollTrigger: {
  //   //       trigger: "#title",
  //   //       start: "top center+=20",
  //   //       toggleActions: "play none none reverse",
  //   //       markers: true,
  //   //       // stagger:0.25,
  //   //     },
  //   //   }
  //   // );
  // }, []);
  return (
    <div id="about" className="bg-[#E0D9D9] dark:bg-[#000] p-8  w-full">
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
          <div className="rounded-full mt-4 ml-4 lg:ml-12 lg:mt-6 mb-4 w-64 h-64 lg:w-72 lg:h-72 bg-yellow-300 z-20">
            <img
              src={require("../assets/IMG_1890.png")}
              alt="img"
              className="w-4/5 h-60 lg:w-64 pt-4 mt-5 lg:pt-1 lg:h-64 object-cover object-center mx-auto  rounded-full overflow-hidden"
            />
          </div>
          <div className="w-11/12 mx-auto p-6  lg:w-2/3 lg:h-[20rem] lg:p-12 bg-[#fff] shadow-xl rounded-xl">
            <p className="font-SFproLight text-md lg:text-xl mb-2">
              Mosimi Akinlabi is a Mobile and Web Frontend Engineer. I love
              creating UI for mobile applications and websites with creative
              interfaces while ensuring that the product's aim is well
              communicated to its users.
            </p>
            {/* <p className="font-SFproLight text-md lg:text-xl mb-2">
              I use frameworks like React Native, Firebase, ReactJS,
              React-Redux, Angular, TypeScript, Javascript, Material UI,
              TailwindCSS, CSS3 and HTML5 to achieve this. I am also versatile
              with tools like Git version control system that helps team
              keeptrack of the work done on a product.
            </p> */}
            <p className="font-SFproLight text-md lg:text-xl mb-3 ">
              I love to constantly evolve myself through learning, make
              impactful changes to the tech space by teaching newbies in tech
              through my LinkedIn page and the Medium platform, and have fun
              while at it. In my spare time, I play volleyball, write, draw,
              watch anime, eat good food and hang out with my friends.
            </p>
            <Link
              smooth
              to={"#projects"}
              className="bg-[#000] rounded-3xl px-6 mt-3  lg:mt-8 text-sm md:text-lg text-white py-2 font-SFproLight transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110  duration-300"
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
        <div className="flex gap-3 ml-12 text-xl "  id="stacks" ref={stackRef} >
          <FontAwesomeIcon icon={faReact} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">React-Native</p>
        </div>
        <div className="flex gap-3 ml-12 text-xl "  >
          <FontAwesomeIcon icon={faFire} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">Firebase</p>
        </div>
        <div className="flex gap-3 ml-12 text-xl "  >
          <FontAwesomeIcon icon={faReact} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">ReactJS</p>
        </div>
        <div className="flex gap-3 ml-12 text-xl"  >
          <FontAwesomeIcon icon={faReact} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">React-Redux</p>
        </div>
        <div className="flex gap-3 ml-12 text-xl"  >
          <FontAwesomeIcon icon={faAngular} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">Angular</p>
        </div>
        <div className="flex gap-3 ml-12 text-xl"  >
          <FontAwesomeIcon icon={faSplotch} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">TypeScript</p>
        </div>
        <div className="flex gap-3 ml-12 text-xl"  >
          <FontAwesomeIcon icon={faSplotch} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">JavaScript</p>
        </div>
        <div className="flex gap-3 ml-12 text-xl"  >
          <FontAwesomeIcon icon={faFigma} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">Figma Design</p>
        </div>
        <div className="flex gap-3 ml-12 text-xl "  >
          <FontAwesomeIcon icon={faSplotch} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">Material UI</p>
        </div>
        <div className="flex gap-3 ml-12 text-xl " >
          <FontAwesomeIcon icon={faSplotch} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">Tailwind CSS</p>
        </div>
        <div className="flex gap-3 ml-12 text-xl " >
          <FontAwesomeIcon icon={faCss3} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">CSS3</p>
        </div>
        <div className="flex gap-3 ml-12 text-xl " >
          <FontAwesomeIcon icon={faHtml5} className="dark:text-[#fff]" />
          <p className="tracking-wide text-md dark:text-[#fff]">HTML5</p>
        </div>
      </div>
    </div>
  );
}

export default About;
