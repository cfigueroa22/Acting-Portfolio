import React from "react";
import headshot from "../assets/headshot.jpg";

const Home = () => {
  return (
    <div>
      <div className="w-full">
        <img src={headshot} alt="Natalie Reyes" />
      </div>
      <div className="px-2 py-6">
        <h1 className="text-2xl font-raleway">ABOUT ME</h1>
        <div className="flex items-center justify-center mt-2">
          <hr className="w-full border-t border-lightGray" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="pb-2 text-2xl font-noto">Welcome</h1>
        <p className="px-4 text-center font-noto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          assumenda at enim ipsa fuga delectus accusantium, impedit quia.
          Maiores adipisci architecto quos iure quam quibusdam, ad aspernatur?
          Error, amet expedita!
        </p>
      </div>
      <div className="flex items-center justify-center py-6">
        <a href="/contact">
          <button className="px-2 py-2 font-extrabold border-none text-md bg-pink hover:bg-lightPink font-noto">
            Contact Me
          </button>
        </a>
      </div>
      <div className="px-2 py-6">
        <h1 className="text-2xl font-raleway">SOCIAL</h1>
        <div className="flex items-center justify-center mt-2">
          <hr className="w-full border-t border-lightGray" />
        </div>
      </div>
      <div className="flex items-center py-6 justify-evenly">
        <div className="text-2xl hover:text-pink hover:cursor-pointer">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div className="text-2xl hover:text-pink hover:cursor-pointer">
          <ion-icon name="logo-facebook"></ion-icon>
        </div>
        <div className="text-2xl hover:text-pink hover:cursor-pointer">
          <ion-icon name="logo-tiktok"></ion-icon>
        </div>
      </div>
      <div className="px-2">
        <div className="flex items-center justify-center mt-2">
          <hr className="w-full border-t border-lightGray" />
        </div>
        <div className="flex items-center justify-center py-8 text-gray">
          <p className="text-xs">
            &copy; Carlos Figueroa - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
