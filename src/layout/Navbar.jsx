import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Routes, Route, NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Blog from "../components/Blog/Blog/Blog";
import "./Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();

  const navigateToBlog = () => {
    navigate("/blog", { replace: true });
  };

  let menuRef = useRef();
  const handleClick = () => {
    setClicked(!clicked);
  };

  // Close navbar on scroll
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setClicked(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div>
      <nav className="flex pt-6 justify-between w-screen  bg-yellow-300 ">
        <div className=" mx-6">
          <a
            className="text-white text-md md:text-xl lg:text-2xl font-SFproBold flex"
            href="#"
          >
            <div className="text-md lg:text-2xl mx-2 lg:mx-5">
              <FontAwesomeIcon icon={faUser} />
            </div>
            MOSIMI
          </a>
        </div>
        <div
          className="text-white text-xl md:text-2xl pointer lg:hidden mr-10 "
          onClick={handleClick}
          ref={menuRef}
        >
          <FontAwesomeIcon
            icon={clicked ? faXmark : faBars}
            className="cursor-pointer hover:text-[#EDEDED]"
          />
        </div>
        <ul className={clicked ? "#myList active" : "#myList"} id="myList">
          <hr className="text-white mx-auto w-32  lg:hidden " />
          <Link
            smooth
            to={"#about"}
            className="w-20 mx-auto  text-white font-SFproMedium text-md lg:text-xl hover:text-[#58FFF5]"
          >
            About
          </Link>
          <hr className="text-white mx-auto w-32 lg:hidden " />
          <Link
            smooth
            to={"#projects"}
            className="w-20 mx-auto text-white font-SFproMedium text-md lg:text-xl hover:text-[#58FFF5]"
          >
            Projects
          </Link>
          <hr className="text-white mx-auto w-32 lg:hidden " />
          <Link
            smooth
            to={"#experience"}
            className="w-20 mx-auto text-white font-SFproMedium text-md lg:text-xl hover:text-[#58FFF5]"
          >
            Experience
          </Link>
          <hr className="text-white mx-auto w-32 lg:hidden " />
          <Link
            smooth
            to={"#contact"}
            className="w-20 mx-auto text-white font-SFproMedium text-md lg:text-xl hover:text-[#58FFF5]"
          >
            Contact
          </Link>
          <hr className="text-white mx-auto w-32 lg:hidden " />
          <div className="w-38 mx-auto lg:mx-2">
            <button
              className="w-38 mx-8 lg:mx-2 mb-4 p-1 px-4 text-[#fff] rounded-3xl dark:bg-[#58FFF5] bg-[#58FFF5] transition ease-in-out delay-75 duration-200"
              onClick={navigateToBlog}
            >
              Blog
            </button>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default Navbar;
