"use client"
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <>
      <div className="bg-[#232536] py-5">
        <div className="px-4 container flex justify-between items-center">
          <a href="#" className="font-bold text-2xl text-white">Finweet</a>
          <div className="flex gap-10 items-center">
            <nav className="flex gap-5 text-white">
              <NavLink className="" href={"/"}>Home</NavLink>
              <NavLink className="" href={"/blog"}>Blog</NavLink>
              <NavLink className="" href={"/about-us"}>About Us</NavLink>
              <NavLink className="" href={"/register"}>Register</NavLink>
            </nav>
            <div className="w-18 h-5 bg-white rounded-2xl flex justify-center items-center">Login</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
