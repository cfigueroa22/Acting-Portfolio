import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="z-50">
      <div className="sticky top-0">
        <div className="">
          <a href="/home">
            <p className="px-2 py-2 text-2xl tracking-wider hover:cursor-pointer font-raleway">
              NATALIE REYES
            </p>
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute top-0 right-0 px-2 py-2 text-3xl hover:cursor-pointer hover:text-pink"
        >
          <ion-icon name={open ? " " : "menu-outline"}></ion-icon>
        </div>
        <div
          id="menu"
          className={`absolute top-0 h-full flex justify-center w-full transition-all ease-in duration-500 ${
            open ? "left-0" : "left-[-1000px]"
          }`}
        >
          <ul className="flex flex-col w-full h-screen text-white bg-lightBlack">
            <div className="absolute right-0 px-2 py-2 text-3xl hover:cursor-pointer hover:text-pink">
              <ion-icon
                onClick={() => setOpen(!open)}
                name="close-outline"
              ></ion-icon>
            </div>
            <Link
              className="px-4 pt-16 pb-4 text-4xl font-thin tracking-wide hover:text-pink font-noto"
              to="/home"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
            <Link
              className="px-4 py-4 text-4xl font-thin tracking-wide hover:text-pink font-noto"
              to="/resume"
              onClick={() => setOpen(!open)}
            >
              Resume
            </Link>
            <Link
              className="px-4 py-4 text-4xl font-thin tracking-wide hover:text-pink font-noto"
              to="/gallery"
              onClick={() => setOpen(!open)}
            >
              Gallery
            </Link>
            <Link
              className="px-4 py-4 text-4xl font-thin tracking-wide hover:text-pink font-noto"
              to="/reels"
              onClick={() => setOpen(!open)}
            >
              Reels
            </Link>
            <Link
              className="px-4 py-4 text-4xl font-thin tracking-wide hover:text-pink font-noto"
              to="/contact"
              onClick={() => setOpen(!open)}
            >
              Contact
            </Link>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
