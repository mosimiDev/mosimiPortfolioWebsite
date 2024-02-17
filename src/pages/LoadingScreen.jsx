import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";
function LoadingScreen() {
 return (
   <div
     className="flex justify-center items-center h-screen w-screen 
bg-yellow-300"
   >
     <div className="loader"></div>
   </div>
 );
}
export default LoadingScreen