import React from "react";

function homePage() {
  return (
    <>
      <div className="hero__bg relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#000000ae] to-transparent"></div>
        <div className="px-4 container h-[90vh] flex items-center">
          <div className="w-[70%] text-white z-100">
            <div className="text-2xl pb-3 uppercase">Posted on startup</div>
            <div className="text-5xl font-bold pb-3">
              Step-by-step guide to choosing great font pairs
            </div>
            <div className="text-md pb-5">
              By <span className="text-amber-400 pb-3">James West</span> | May 23, 2022
            </div>
            <div className="text-sm w-140 ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
            <button className="mt-5 bg-amber-300 px-7 text-black py-3">Read more</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default homePage;
