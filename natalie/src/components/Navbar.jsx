import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="sticky top-0">
        <div className="">
          <p className="px-2 py-2 text-2xl">NATALIE REYES</p>
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
              className="px-4 pt-16 pb-4 text-4xl hover:text-pink"
              to="/home"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
            <Link
              className="px-4 py-4 text-4xl hover:text-pink"
              to="/resume"
              onClick={() => setOpen(!open)}
            >
              Resume
            </Link>
            <Link
              className="px-4 py-4 text-4xl hover:text-pink"
              to="/gallery"
              onClick={() => setOpen(!open)}
            >
              Gallery
            </Link>
            <Link
              className="px-4 py-4 text-4xl hover:text-pink"
              to="/reels"
              onClick={() => setOpen(!open)}
            >
              Reels
            </Link>
            <Link
              className="px-4 py-4 text-4xl hover:text-pink"
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
