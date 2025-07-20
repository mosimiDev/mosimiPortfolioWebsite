import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";
import "./Projects.css";
import { useNavigate, Routes, Route, NavLink } from "react-router-dom";
import Blog from "../components/Blog/Blog/Blog";
import Modal from "../components/Modal/Modal";
import ExpandableText from "../components/ShortenText/ExpandableText";

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
     setModalContent(content);
     setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const navigate = useNavigate();

  const navigateToBlog = () => {
    navigate("/blog", { replace: true });
  };

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div
      id="projects"
      className=" bg-[#E0D9D9] p-12 w-full h-fit dark:bg-[#000]"
    >
      <div className="flex w-11/12 gap-4 lg:w-5/6 lg:gap-2 mt-10 mb-7">
        <h4 className="font-SFproBold font-bold lg:text-xl dark:text-[#fff] md:text-md">
          Posts
        </h4>
        <hr className="bg-black p-1 mt-2 w-1/2 md:w-4/5 rounded-full" />
      </div>
      {/* <!-- Post div --> */}
      <div className="flex flex-wrap gap-12 w-full mt-8 mb-20">
        {/* <!-- Post One --> */}
        <a
          href="https://medium.com/@MosimiDev/regular-css-or-tailwind-css-5a11b7771539"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../assets/AIpin.png")}
            alt="img"
            className="w-[21rem] rounded-xl "
          />
          <h3 className="font-SFproBold mb-2 dark:text-[#fff]">
            The Rise of Wearable Technology
          </h3>
          <div className="flex gap-5">
            <p className="font-SFproLight text-sm dark:text-[#fff]">
              Published on Nov 23, 2023
            </p>
            <p className="font-SFproLight text-sm dark:text-[#fff]">
              3 min read
            </p>
          </div>
        </a>
        {/* <!-- Post Two --> */}
        <a
          href="https://medium.com/@MosimiDev/the-rise-of-wearable-ai-pin-technology-another-fluke-trend-or-the-future-of-tech-8126b9b0b8b0"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../assets/istockphoto-1193278024-612x612.jpg")}
            alt="img"
            className="w-96 rounded-xl"
          />
          <h3 className="font-SFproBold  my-2 dark:text-[#fff]">
            How to implement React Router
          </h3>
          <div className="flex gap-5">
            <p className="font-SFproLight text-sm dark:text-[#fff]">
              Published on Feb 23, 2024
            </p>
            <p className="font-SFproLight text-sm dark:text-[#fff]">
              4 min read
            </p>
          </div>
        </a>
        {/* <!-- Post Three --> */}
        <a
          href="https://dev.to/mosimidev/how-to-differentiate-between-put-and-post-request-in-rest-api-505k"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../assets/vector-442.jpg")}
            alt="img"
            className="w-96 rounded-xl"
          />
          <h3 className="font-SFproBold  my-2 dark:text-[#fff]">
            How to differentiate between POST and PUT Request in REST API
          </h3>
          <div className="flex gap-5">
            <p className="font-SFproLight text-sm dark:text-[#fff]">
              Published on Nov 6 2023
            </p>
            <p className="font-SFproLight text-sm dark:text-[#fff]">
              3 min read
            </p>
          </div>
        </a>
      </div>

      <div className="w-48 mx-auto">
        <button
          onClick={navigateToBlog}
          target="_blank"
          className="w-44 mx-auto mb-32 p-2 px-4 text-white rounded-3xl  bg-black transition ease-in-out delay-75 duration-200 hover:bg-[#767676]"
        >
          See More
        </button>
      </div>

      {/* Swiperrr section */}
      {/* <!-- Web Application Section --> */}
      <div className="flex w-11/12 gap-2    mt-10 mb-7">
        <h4 className="font-SFproBold font-bold lg:text-xl dark:text-[#fff]">
          Web Application
        </h4>
        <hr className="bg-black p-1 mt-2 w-1/2 md:w-4/5 rounded-full" />
      </div>
      {/* Landing Page Tabssss */}
      {/* Landing page-1 */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 152 - Pens and Letters - [localhost].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 153 - Pens and Letters - [localhost].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 154 - Pens and Letters - [localhost].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 155 - Pens and Letters - [localhost].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 156 - Pens and Letters - [localhost].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 157 - Pens and Letters - [localhost].png")}
            alt="img"
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      {/* project description 1  */}
      <div className="w-3/4 mx-auto mt-6 mb-20">
        <ExpandableText
          text={
            "Pens and Letters is a blog that fetches current news from an api to show users information in real time.It is built with NexJS, NextAuth for user authentication. It is written in mostly typescript, package with npm, and uses libraries like Zod a validation library made with typescript that helps with validation of data and Tailwind React Native Classnames(TWRNC) for easy styling of components without needing to constantly create Stylesheets all the time and will help with dark mode"
          }
          maxChars={100}
        />
        {/* Icons section */}
        <div className="flex gap-8 lg:gap-5 w-32 mx-auto mt-3 ">
          <a
            href="https://penandletters.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-xl lg:text-2xl hover:text-[#767676]"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="dark:text-[#fff]"
            />
          </a>
          <a
            href="https://github.com/mosimiDev/pen_and_letters"
            target="_blank"
            rel="noreferrer"
            className="text-xl lg:text-2xl hover:text-[#767676]"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="dark:text-[#fff]"
            />
          </a>
        </div>
        {/* End of icon section */}
      </div>
      {/* Landing page-2 */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 159 - AeroGlide - [aero-glide-4hw1.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 160 - AeroGlide - [aero-glide-4hw1.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 161 - AeroGlide - [aero-glide-4hw1.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 162 - AeroGlide - [aero-glide-4hw1.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 163 - AeroGlide - [aero-glide-4hw1.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 164 - AeroGlide - [aero-glide-4hw1.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 165 - AeroGlide - [aero-glide-4hw1.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 166 - AeroGlide - [aero-glide-4hw1.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 167 - AeroGlide - [aero-glide-4hw1.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 168 - AeroGlide - [aero-glide-4hw1.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 169 - AeroGlide - [aero-glide-4hw1.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 170 - AeroGlide - [aero-glide-4hw1.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      {/* project description 2  */}
      <div className="w-3/4 mx-auto mt-6 mb-20">
        <ExpandableText
          text={
            "AeroGlide is a web application that uses 3D model to bring the company's creative ides to life. It uses meshes, textures and mapping to achieve this."
          }
          maxChars={100}
        />
        {/* Icons section */}
        <div className="flex gap-8 lg:gap-5 w-32 mx-auto mt-3">
          <a
            href="https://aero-glide-4hw1.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-xl lg:text-2xl"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="dark:text-[#fff]"
            />
          </a>
          <a
            href="https://github.com/mosimiDev/AeroGlide"
            target="_blank"
            rel="noreferrer"
            className="text-xl lg:text-2xl"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="dark:text-[#fff]"
            />
          </a>
        </div>
        {/* End of icon section */}
      </div>

      {/* Landing Page 3 */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 181 - Greenopolis Web Game - [greenopolis-web-93dz.vercel.app].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 176 - Greenopolis Web Game - [127.0.0.1].png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 178 - Greenopolis Web Game - [127.0.0.1].png")}
            alt="img"
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      {/* project description 3  */}
      <div className="w-3/4 mx-auto mt-6 mb-20">
        <ExpandableText
          text={
            "Greenopolis is a python based game and uses a library like phaser to build a web based version."
          }
          maxChar={100}
        />
        {/* Icons section */}
        <div className="flex gap-8 lg:gap-5 w-32 mx-auto mt-3">
          <a
            href="https://greenopolis-web-93dz.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-xl lg:text-2xl"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="dark:text-[#fff]"
            />
          </a>
          <a
            href="https://github.com/mosimiDev/greenopolis-web"
            target="_blank"
            rel="noreferrer"
            className="text-xl lg:text-2xl"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="dark:text-[#fff]"
            />
          </a>
        </div>
        {/* End of icon section */}
      </div>

      {/* <!-- Mobile Application Section --> */}
      <div className="flex w-11/12 gap-2  md:gap-1 mt-32 mb-7">
        <h4 className="font-SFproBold font-bold lg:text-xl dark:text-[#fff]">
          Mobile Applications
        </h4>
        <hr className="bg-black p-1 mt-2 w-1/3 md:w-3/5 rounded-full" />
      </div>
      {/* Application Tabsss */}
      {/* Modal Section */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
      {/* End of Modal Section */}
      {/* Part I */}
      <div className=" relative">
        {/* Application one */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="mySwiperrr "
        >
          <SwiperSlide className="swiperrr-slide ">
            <img
              src={require("../assets/Projects image/IMG_E8987.JPG")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slide ">
            <img
              src={require("../assets/Projects image/IMG_E8988.JPG")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slide ">
            <img
              src={require("../assets/Projects image/IMG_E8989.JPG")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slide ">
            <img
              src={require("../assets/Projects image/IMG_E8990.JPG")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slide">
            <img
              src={require("../assets/Projects image/IMG_E8991.JPG")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slide ">
            <img
              src={require("../assets/Projects image/IMG_E8993.JPG")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slide ">
            <img
              src={require("../assets/Projects image/IMG_E8994.JPG")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slide">
            <img
              src={require("../assets/Projects image/IMG_E8995.JPG")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slide">
            <img
              src={require("../assets/Projects image/IMG_E8996.JPG")}
              alt="img"
            />
          </SwiperSlide>
        </Swiper>

        {/* project description 1  */}
        <div className="  w-[18rem] md:w-[26rem] lg:w-[28rem] md:mx-52 lg:mx-96  mx-auto z-20 y-[20rem]  ">
          <ExpandableText
            text={
              " This is island microfinance bank's mobile application made with react-native. It is written in mostly typescript, package with yarn, and uses important libraries like expo that helps react native interface with ios and android without much configuration, react navigation for routing between screenns and components within the application, Zod a validation library made with typescript that helps with validation of data, react-hook-form a form validation library that helps validate user inputs within the application and Tailwind React Native Classnames(TWRNC) for easy styling of components without needing to constantly create Stylesheets all the time and will help with dark mode"
            }
            maxChars={100}
          />
          {/* Icons section */}
          <div className="flex gap-5 w-20 mx-auto ">
            <button
              onClick={() =>
                openModal(
                  <div>
                    <img
                      src={require("../assets/Projects image/IslandmfbExpo.png")}
                    />
                    <a
                      href="https://expo.dev/preview/update?message=updated%20deprecated%20packages&updateRuntimeVersion=1.0.0(1)&createdAt=2024-06-21T18%3A14%3A03.628Z&slug=exp&projectId=60a50835-a717-4615-ba7e-19065a7ab147&group=61eb7830-b4d9-48f7-9de8-93080bf20b7a"
                      target="_blank"
                      className="text-blue-500 underline text-sm"
                    >
                      https://expo.dev/preview/update?message=updated%20deprecated%20packages&updateRuntimeVersion=1.0.0(1)&createdAt=2024-06-21T18%3A14%3A03.628Z&slug=exp&projectId=60a50835-a717-4615-ba7e-19065a7ab147&group=61eb7830-b4d9-48f7-9de8-93080bf20b7a
                    </a>
                  </div>
                )
              }
              className="text-xl lg:text-2xl"
            >
              <FontAwesomeIcon icon={faLink} className="dark:text-[#fff]" />
            </button>
            <a
              href="https://github.com/mosimiDev/islandmfb-rn"
              target="_blank"
              rel="noreferrer"
              className="text-xl lg:text-2xl"
            >
              <FontAwesomeIcon
                icon={faSquareGithub}
                className="dark:text-[#fff]"
              />
            </a>
          </div>
          {/* End of icon section */}
        </div>

        <div className="mt-[5rem]">
          {/* Application two */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="mySwiperrr "
          >
            <SwiperSlide className="swiperrr-slide ">
              <img
                src={require("../assets/Projects image/IMG_3607.PNG")}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperrr-slide ">
              <img
                src={require("../assets/Projects image/IMG_3608.PNG")}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperrr-slide ">
              <img
                src={require("../assets/Projects image/IMG_3609.PNG")}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperrr-slide ">
              <img
                src={require("../assets/Projects image/IMG_3610.PNG")}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperrr-slide ">
              <img
                src={require("../assets/Projects image/IMG_3611.PNG")}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperrr-slide ">
              <img
                src={require("../assets/Projects image/IMG_3612.PNG")}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperrr-slide ">
              <img
                src={require("../assets/Projects image/IMG_3613.PNG")}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperrr-slide ">
              <img
                src={require("../assets/Projects image/IMG_3614.PNG")}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperrr-slide">
              <img
                src={require("../assets/Projects image/IMG_3615.PNG")}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperrr-slide">
              <img
                src={require("../assets/Projects image/IMG_3616.PNG")}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperrr-slide">
              <img
                src={require("../assets/Projects image/IMG_3617.PNG")}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperrr-slide">
              <img
                src={require("../assets/Projects image/IMG_3618.PNG")}
                alt="img"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Project description section */}
      <div className="relative  mb-12 ">
        {/* project description 2  */}

        <div className="w-72 md:w-[26rem] lg:w-[28rem] mx-auto lg:mx-96  ">
          <ExpandableText
            text={
              "This is foodie, a mobile application made with react-native. It is written in mostly typescript, packaged with npm, and uses libraries like expo that helps react native interface with ios and android without much configuration, react navigation for routing between screens and components within the application and Tailwind React Native Classnames(TWRNC) for easy styling of components without needing to constantly create Stylesheets all the time and will help with dark mode"
            }
            maxChars={100}
          />
          {/* Icons section */}
          <div className="flex gap-5 w-20 mx-auto ">
            <button
              onClick={() =>
                openModal(
                  <div>
                    <img
                      src={require("../assets/Projects image/foodieExpo.png")}
                    />
                    <a
                      href="https://expo.dev/preview/update?message=updated%20packages&updateRuntimeVersion=1.0.0(1)&createdAt=2024-06-20T23%3A27%3A24.924Z&slug=exp&projectId=7bfc3519-0549-4bbd-a893-d01b6676c4f7&group=d0dd6d07-3a7f-49c5-a65b-b36ae0450a53"
                      target="_blank"
                      className="text-blue-500 underline text-sm"
                    >
                      https://expo.dev/preview/update?message=updated%20packages&updateRuntimeVersion=1.0.0(1)&createdAt=2024-06-20T23%3A27%3A24.924Z&slug=exp&projectId=7bfc3519-0549-4bbd-a893-d01b6676c4f7&group=d0dd6d07-3a7f-49c5-a65b-b36ae0450a53
                    </a>
                  </div>
                )
              }
              className="text-xl lg:text-2xl"
            >
              <FontAwesomeIcon icon={faLink} className="dark:text-[#fff]" />
            </button>
            <a
              href="https://github.com/mosimiDev/foodie"
              target="_blank"
              rel="noreferrer"
              className="text-xl lg:text-2xl"
            >
              <FontAwesomeIcon
                icon={faSquareGithub}
                className="dark:text-[#fff]"
              />
            </a>
          </div>
          {/* End of icon section */}
        </div>
      </div>

      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default Projects;
