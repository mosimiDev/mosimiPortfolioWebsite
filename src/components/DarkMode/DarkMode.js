import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const DarkMode = () => {
  const [theme, setTheme] = useState("null");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setClicked(!clicked);
  };
  return (
    <div>
      <a
        className="w-38 mx-8 lg:mx-2 mb-4 p-1 px-4 text-[#fff] rounded-3xl dark:bg-[#58FFF5] bg-[#58FFF5] transition ease-in-out delay-75 duration-200"
        href="https://www.notion.so/Mosimi-Akinlabi-c1e4dd3492b64b74b821eba2cca3b271"
        target="_blank"
      >
        {/* <FontAwesomeIcon
          icon={clicked ? faSun : faMoon}
          className="mx-2 text-xl"
        />
        {clicked ? "Light Mode" : "Dark Mode"} */}
        Writer Portfolio
      </a>
    </div>
  );
};

export default DarkMode;

//  <FontAwesomeIcon icon={clicked? faMoon:faSun} />
//             Dark Mode

// 

