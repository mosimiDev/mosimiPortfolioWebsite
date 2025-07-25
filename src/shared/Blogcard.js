import React from "react";



const Blogcard = ({title,link,markdownlink, markdowntext,description,platform,date}) => {
  return (
    <div className="bg-[#DCD7C2] w-3/4 mx-8 mb-6 border-2 border-[#DCD7C2] rounded-xl p-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-gray-600 md:text-lg"
      >
        {title}
      </a>
      <a
        href={markdownlink}
        target="_blank"
        type="application/pdf"
        rel="noopener noreferrer"
        className="italic text-gray-600 block hover:underline hover:text-teal-600 text-sm w-32 pointer"
      >
        {markdowntext}
      </a>
      <p className="text-gray-500 py-3">{description}</p>
      <p className="bg-lime-600 w-24 mx-auto  border border-lime-200 rounded-md text-white  text-xs md:text-sm px-2  ml-[8rem] md:ml-[28rem] lg:ml-[42rem]">
        {platform}
      </p>
      <p className="text-[#000] text-xs md:text-sm text-gray-400 ml-[8rem] md:ml-[28rem] lg:ml-[42rem]">
        {date}
      </p>
    </div>
  );
};

export default Blogcard;
