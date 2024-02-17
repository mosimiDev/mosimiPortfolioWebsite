import React, { useRef } from "react";
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

function Projects() {
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
          Latest Post
        </h4>
        <hr className="bg-yellow-300 p-1 mt-2 w-1/2 md:w-4/5 rounded-full" />
      </div>
      {/* <!-- Post div --> */}
      <div className="flex flex-wrap gap-12 w-full mt-8 mb-32">
        {/* <!-- Post One --> */}
        <a
          href="https://medium.com/@MosimiDev/regular-css-or-tailwind-css-5a11b7771539"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../assets/Tailwind_CSS_Logo.svg.png")}
            alt="img"
            className="w-52"
          />
          <h3 className="font-SFproBold mb-2 dark:text-[#fff]">
            Regular CSS or TailwindCSS?
          </h3>
          <div className="flex gap-5">
            <p className="font-SFproLight text-sm dark:text-[#fff]">
              Published on Aug 18, 2022
            </p>
            <p className="font-SFproLight text-sm dark:text-[#fff]">
              4 min read
            </p>
          </div>
        </a>
        {/* <!-- Post Two --> */}
        <a
          href="https://medium.com/@MosimiDev/use-effect-simplified-hooks-in-react-932e10d9b902"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../assets/istockphoto-1193278024-612x612.jpg")}
            alt="img"
            className="w-96 rounded-xl"
          />
          <h3 className="font-SFproBold  my-2 dark:text-[#fff]">
            Use Effect Simplified (Hooks in React) Part1
          </h3>
          <div className="flex gap-5">
            <p className="font-SFproLight text-sm dark:text-[#fff]">
              Published on Feb 25, 2023
            </p>
            <p className="font-SFproLight text-sm dark:text-[#fff]">
              3 min read
            </p>
          </div>
        </a>
        {/* <!-- Post Three --> */}
        <a
          href="https://medium.com/@MosimiDev/props-in-react-simplified-c4384acce962"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../assets/vector-442.jpg")}
            alt="img"
            className="w-96 rounded-xl"
          />
          <h3 className="font-SFproBold  my-2 dark:text-[#fff]">
            Props in React-Simplified
          </h3>
          <div className="flex gap-5">
            <p className="font-SFproLight text-sm dark:text-[#fff]">
              Published on April 3, 2023
            </p>
            <p className="font-SFproLight text-sm dark:text-[#fff]">
              3 min read
            </p>
          </div>
        </a>
      </div>
      {/* Swiperrr section */}
      {/* <!-- Landing Pages Section --> */}
      <div className="flex w-11/12 gap-2    mt-10 mb-7">
        <h4 className="font-SFproBold font-bold lg:text-xl dark:text-[#fff]">
          Landing Pages
        </h4>
        <hr className="bg-yellow-300 p-1 mt-2 w-1/2 md:w-4/5 rounded-full" />
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
            src={require("../assets/Projects image/FireShot Capture 037 - Lulu - localhost.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 038 - Lulu - localhost.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 039 - Lulu - localhost.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 040 - Lulu - localhost.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 041 - Lulu - localhost.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 042 - Lulu - localhost.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 043 - Lulu - localhost.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 044 - Lulu - localhost.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 046 - Responsinator - localhost_3000_ - www.responsinator.com.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 047 - Responsinator - localhost_3000_ - www.responsinator.com.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 048 - Responsinator - localhost_3000_ - www.responsinator.com.png")}
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
        <p className="font-SFproLight font-bold text-md lg:text-xl dark:text-[#fff] ">
          LULU landing page is built with ReactJS, Javascript, TailwindCSS,
          Figma tool and CSS3.
        </p>
        {/* Icons section */}
        <div className="flex gap-8 lg:gap-5 w-32 mx-auto mt-3 ">
          <a
            href="https://lulu-fe-7ry5-cfcbjy1kw-mosimidev.vercel.app/"
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
            href="https://github.com/mosimiDev/lulu-fe/tree/main/lulu-fe"
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
            src={require("../assets/Projects image/FireShot Capture 049 - Axel Gustafsson - .png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 050 - Axel Gustafsson - .png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 051 - Axel Gustafsson - .png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 052 - Axel Gustafsson - .png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 053 - Axel Gustafsson - .png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 054 - Axel Gustafsson - .png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 055 - Axel Gustafsson - .png")}
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
        <p className="font-SFproLight font-bold text-md lg:text-xl dark:text-[#fff]">
          AXEL GUSTAFSSON landing page is built with ReactJS, Javascript,
          TailwindCSS, Figma tool and the Material UI Framework.
        </p>
        {/* Icons section */}
        <div className="flex gap-8 lg:gap-5 w-32 mx-auto mt-3">
          <a
            href="https://axel-gustaffon-f1g1.vercel.app/"
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
            href="https://github.com/mosimiDev/Axel-Gustaffon"
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
      {/* Landing page-3 */}
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
            src={require("../assets/Projects image/FireShot Capture 078 - React App - ai-gpt-3-44uv.vercel.app.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 079 - React App - ai-gpt-3-44uv.vercel.app.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 080 - React App - ai-gpt-3-44uv.vercel.app.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 081 - React App - ai-gpt-3-44uv.vercel.app.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 083 - React App - ai-gpt-3-44uv.vercel.app.png")}
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
      {/* project description 3 */}
      <div className="w-3/4 mx-auto mt-6 mb-20 ">
        <p className="font-SFproLight font-bold text-md lg:text-xl dark:text-[#fff]">
          GPT-3 landing page is built with ReactJS,Javascript, CSS3, Figma tool
          and the Material UI Framework.
        </p>
        {/* Icons section */}
        <div className="flex gap-8 lg:gap-5 w-32 mx-auto mt-3">
          <a
            href="https://ai-gpt-3-44uv.vercel.app/"
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
            href="https://github.com/mosimiDev/AI-gpt-3"
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
      {/* Landing page-4 */}
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
            src={require("../assets/Projects image/FireShot Capture 033 - Splash Page - .png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 034 - Splash Page - .png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 035 - Splash Page - .png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={require("../assets/Projects image/FireShot Capture 036 - Splash Page - .png")}
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
      {/* project description 4  */}
      <div className="w-3/4 mx-auto mt-6 mb-20 ">
        <p className="font-SFproLight font-bold text-md lg:text-xl dark:text-[#fff]">
          HABITUAL landing page is built with ReactJS, TailwindCSS and the
          Material UI Framework.
        </p>
        {/* Icons section */}
        <div className="flex gap-8 lg:gap-5  w-32 mx-auto mt-3">
          <a
            href="https://splash-page-eight-liard.vercel.app/"
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
            href="https://github.com/mosimiDev/Splash-page"
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
        <hr className="bg-yellow-300 p-1 mt-2 w-1/3 md:w-3/5 rounded-full" />
      </div>
      {/* Application Tabsss */}
      {/* Part I */}
      <div className="xl:flex relative">
        {/* Application one */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
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
          <SwiperSlide className="swiperrr-slide ">
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
          <SwiperSlide className="swiperrr-slide ">
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
        {/* Application two */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiperrry mt-40 xl:mt-2"
        >
          <SwiperSlide className="swiperrr-slidey ">
            <img
              src={require("../assets/Projects image/FireShot Capture 068 - Custom Countdown - .png")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slidey ">
            <img
              src={require("../assets/Projects image/FireShot Capture 006 - Custom Countdown - .png")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slidey ">
            <img
              src={require("../assets/Projects image/FireShot Capture 069 - Custom Countdown - .png")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slidey ">
            <img
              src={require("../assets/Projects image/FireShot Capture 066 - Custom Countdown - .png")}
              alt="img"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Project description section */}
      <div className="relative xl:flex xl:gap-5 xl:w-full ">
        {/* project description 1  */}
        <div className="absolute bottom-[39rem] xl:bottom-[0rem] xl:top-[0.5rem]  w-72 md:w-[26rem] lg:w-[28rem] md:mx-52 lg:mx-96 xl:mx-[5rem]  mx-auto z-20 ">
          <p className="font-SFproLight text-md lg:text-xl font-bold my-2 mx-5 dark:text-[#fff]">
            ISLAND MICROFINANCE BANK application is built with React Native,
            Typescript,React-Redux, TailwindCSS and Material UI Framework.
          </p>
          {/* Icons section */}
          <div className="flex gap-5 w-20 mx-auto ">
            <a
              href="https://github.com/mosimiDev/islandmfb-rn"
              target="_blank"
              rel="noreferrer"
              className="text-xl lg:text-2xl"
            >
              <FontAwesomeIcon icon={faLink} className="dark:text-[#fff]" />
            </a>
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
        {/* project description 2  */}
        <div className="w-72 md:w-[26rem] lg:w-[28rem] mx-auto lg:mx-96 xl:absolute xl:mx-32 xl:left-[35rem] 2xl:left-[47rem] ">
          <p className="font-SFproLight font-bold text-md lg:text-xl my-2 mx-5 dark:text-[#fff]">
            COUNTDOWN TIMER is built with Javascript,ReactJS, TailwindCSS and
            Material UI Framework.
          </p>
          {/* Icons section */}
          <div className="flex gap-5 w-20 mx-auto ">
            <a
              href="https://countdown-timer-pojz.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-xl lg:text-2xl"
            >
              <FontAwesomeIcon icon={faLink} className="dark:text-[#fff]" />
            </a>
            <a
              href="https://github.com/mosimiDev/Countdown-Timer"
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
      {/* Part II */}
      <div className="xl:flex ">
        {/* Application three */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiperrr xl:mt-32"
        >
          <SwiperSlide className="swiperrr-slide ">
            <img
              src={require("../assets/Projects image/FireShot Capture 008 - Custom Calculator - .png")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slide ">
            <img
              src={require("../assets/Projects image/FireShot Capture 070 - Custom Calculator - .png")}
              alt="img"
            />
          </SwiperSlide>
        </Swiper>
        {/* Application Four */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiperrry mt-32"
        >
          <SwiperSlide className="swiperrr-slidey ">
            <img
              src={require("../assets/Projects image/FireShot Capture 072 - React App - localhost.png")}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperrr-slidey ">
            <img
              src={require("../assets/Projects image/FireShot Capture 073 - React App - localhost.png")}
              alt="img"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* project description section */}
      <div className="relative xl:flex">
        {/* project description 3 */}
        <div className="absolute bottom-[39rem] xl:bottom-[0rem] xl:top-[0.1rem] w-72 md:w-[26rem] lg:w-[28rem] mx-auto md:mx-56 lg:mx-96 md:mt-2 xl:mx-[5rem]">
          <p className="font-SFproLight font-bold text-md lg:text-xl my-2 mx-5 dark:text-[#fff]">
            CUSTOM CALCULATOR is built with Javascript,ReactJS and Tailwindcss
            Framework.
          </p>
          {/* Icons section */}
          <div className="flex gap-5 w-20 mx-auto ">
            <a
              href="https://custom-calculator-sigma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-xl lg:text-2xl"
            >
              <FontAwesomeIcon icon={faLink} className="dark:text-[#fff]" />
            </a>
            <a
              href="https://github.com/mosimiDev/Custom-calculator"
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
        {/* project description 4 */}
        <div className="w-72 mx-auto md:w-[26rem] lg:w-[28rem] lg:mx-96 xl:absolute xl:mx-32 xl:left-[35rem] 2xl:left-[47rem] ">
          <p className="font-SFproLight font-bold text-md lg:text-xl my-2 mx-5 dark:text-[#fff]">
            LOAN CALCULATOR is built with Javascript, ReactJS, TailwindCSS and
            Material UI Framework.
          </p>
          {/* Icons section */}
          <div className="flex gap-5 w-20 mx-auto ">
            <a
              href="https://loan-calculator-94q2.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-xl lg:text-2xl"
            >
              <FontAwesomeIcon icon={faLink} className="dark:text-[#fff]" />
            </a>
            <a
              href="https://github.com/mosimiDev/Loan-Calculator"
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
      {/* Application Five */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiperrr xl:mt-32"
      >
        <SwiperSlide className="swiperrr-slide ">
          <img
            src={require("../assets/Projects image/FireShot Capture 074 - React App - localhost.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperrr-slide ">
          <img
            src={require("../assets/Projects image/Screenshot (28).png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperrr-slide ">
          <img
            src={require("../assets/Projects image/FireShot Capture 076 - React App - localhost.png")}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperrr-slide ">
          <img
            src={require("../assets/Projects image/FireShot Capture 077 - React App - localhost.png")}
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
      {/* project description  */}
      <div className="w-72 md:w-[26rem] lg:w-[28rem] mx-auto lg:mx-96 xl:mx-[28rem] 2xl:mx-[34rem]">
        <p className="font-SFproLight font-bold text-md lg:text-xl my-2 mx-5 dark:text-[#fff]">
          WEATHER FORECAST is an app built with Typescript, Figma Tool, ReactJS,
          TailwindCSS and Material UI Framework.
        </p>
        {/* Icons section */}
        <div className="flex gap-5 w-20 mx-auto ">
          <a
            href="https://weather-forecast-app-e7fo-1p3cglb96-mosimidev.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-xl lg:text-2xl"
          >
            <FontAwesomeIcon icon={faLink} className="dark:text-[#fff]" />
          </a>
          <a
            href="https://github.com/mosimiDev/weather-forecast-app"
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
  );
}

export default Projects;
