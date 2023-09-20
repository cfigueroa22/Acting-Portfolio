import React from "react";
import contactImg from "../assets/contact-img.jpg";

const Contact = () => {
  return (
    <div>
      <div className="px-2 pt-10 pb-6">
        <h1 className="text-2xl">CONTACT ME</h1>
        <div className="flex items-center justify-center mt-2">
          <hr className="w-full border-t border-lightGray" />
        </div>
      </div>
      <div className="p-2">
        <img src={contactImg} alt="Natalie Reyes" />
      </div>
      <div className="px-2">
        <p className="pt-4 pb-6 text-xs text-gray">
          Contact me for bookings or more information!
        </p>
        <h1 className="pb-4 text-xl">Natalie Reyes</h1>
        <h2 className="pb-4 text-gray">Yorktown, VA, USA</h2>
        <p className="pb-6 text-gray">
          phone: <span className="text-pink">(757)000-0000</span>
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button className="px-2 py-2 border-none bg-pink hover:bg-lightPink">
          Email: nataliereyes@hotmail.com
        </button>
      </div>
      <div className="px-2 pt-10">
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

export default Contact;
