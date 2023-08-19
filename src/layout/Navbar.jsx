import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import DarkMode from "../components/DarkMode/DarkMode";
import "./Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);
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
    <nav className="flex pt-6 justify-between w-screen  ">
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
        <Link
          smooth
          to={"#home"}
          className="w-20 mx-auto text-white   font-SFproMedium text-md lg:text-xl "
        >
          Home
        </Link>
        <hr className="text-white mx-auto w-32  lg:hidden " />
        <Link
          smooth
          to={"#about"}
          className="w-20 mx-auto  text-white font-SFproMedium text-md lg:text-xl "
        >
          About
        </Link>
        <hr className="text-white mx-auto w-32 lg:hidden " />
        <Link
          smooth
          to={"#projects"}
          className="w-20 mx-auto text-white font-SFproMedium text-md lg:text-xl "
        >
          Projects
        </Link>
        <hr className="text-white mx-auto w-32 lg:hidden " />
        <Link
          smooth
          to={"#experience"}
          className="w-20 mx-auto text-white font-SFproMedium text-md lg:text-xl "
        >
          Experience
        </Link>
        <hr className="text-white mx-auto w-32 lg:hidden " />
        <Link
          smooth
          to={"#contact"}
          className="w-20 mx-auto text-white font-SFproMedium text-md lg:text-xl "
        >
          Contact
        </Link>
        <hr className="text-white mx-auto w-32 lg:hidden " />
        <div className="w-38 mx-auto lg:mx-2">
          <DarkMode />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
