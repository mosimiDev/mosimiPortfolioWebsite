import React, { useState } from 'react';

const ExpandableText = ({ text, maxChars = 150 }) => {
 const [expanded, setExpanded] = useState(false);
 if (text.length <= maxChars) {
  return <p>{text}</p>
 }

 const toggleExpanded = () => setExpanded(!expanded);
 return (
   <p className="font-SFproLight font-bold text-md lg:text-xl dark:text-[#fff] ">
     {expanded ? text : `${text.substring(0, maxChars)}...`}
     <span
       onClick={toggleExpanded}
       className="text-blue-600 ml-2 cursor-pointer hover:underline"
     >
       {expanded ? "See less" : "See more"}
     </span>
   </p>
 );
};

export default ExpandableText;