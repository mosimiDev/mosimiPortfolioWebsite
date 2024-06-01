import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Routes, Route, NavLink } from "react-router-dom";

import Blogcard from "../../shared/Blogcard";
import { BlogItems } from "../BlogItems";



const Blog = () => {
  const [items, setItems] = useState(BlogItems);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filterItems = (category) => {
    if (category === 'All') {
      setItems(BlogItems);
    } else {
      const filteredItems = BlogItems.filter(item => item.category === category);
      setItems(filteredItems)
    }
    setSelectedCategory(category);
  };
    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate("/", { replace: true });
    };

    return (
      <div id="blog w-screen h-screen pb-8">
        <nav className="flex pt-6 justify-between w-screen  bg-[#000]">
          <div className=" md:mx-6">
            <a
              className="text-white text-md md:text-lg font-SFproBold flex"
              onClick={navigateToHome}
            >
              <div className="text-md md:text-lg mx-2 md:mx-5">
                <FontAwesomeIcon icon={faUser} />
              </div>
              MOSIMI
            </a>
          </div>

          <div>
            <button
              className="text-white text-sm  bg-[#DCD7C2] mr-2 md:mr-6 p-2 rounded-xl px-4"
              onClick={navigateToHome}
            >
              <span className="pr-2">
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              Back To Portfolio
            </button>
          </div>
        </nav>
        {/* Blog Body */}
        <div className="bg-[#000] ">
          {/* Tabs Div */}
          <div className="flex justify-between w-screen lg:w-3/4 py-8 md:p-12 ">
            <button
              onClick={() => filterItems("All")}
              className="text-white text-xs md:text-base border-2  rounded-xl border-[#DCD7C2]  p-2 md:p-1 px-4 md:px-6 active:bg-[#DCD7C2]"
            >
              All
            </button>
            <button
              onClick={() => filterItems("tutorials")}
              className="text-white text-xs md:text-base border-2  rounded-xl border-[#DCD7C2] p-2 md:p-1 mx-2 md:px-4 active:bg-[#DCD7C2]"
            >
              Tutorials
            </button>
            <button
              onClick={() => filterItems("content-writing")}
              className="text-white text-xs md:text-base border-2  rounded-xl bxsder-[#DCD7C2] p-2 md:p-1 md:px-4 active:bg-[#DCD7C2]"
            >
              Content Writing
            </button>
            <button
              onClick={() => filterItems("technical-writing")}
              className="text-white  text-xs md:text-base border-2  rounded-xl border-[#DCD7C2] p-2 md:p-1 mx-2 md:px-4 active:bg-[#DCD7C2]"
            >
              Technical Writing
            </button>
            <button
              onClick={() => filterItems("legal-writing")}
              className="text-white text-xs md:text-base border-2  rounded-xl border-[#DCD7C2] p-2 md:p-1 md:px-4 active:bg-[#DCD7C2]"
            >
              Legal Writing
            </button>
          </div>
          {/*End of Tabs Div */}
          {/* Body */}
          <div className="pb-40">
            {items.map((item) => (
              <Blogcard
                key={item.id}
                title={item.title}
                markdownlink={item.markdownlink}
                markdowntext={item.markdowntext}
                description={item.description}
                platform={item.platform}
                date={item.date}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Blog;

