import React from "react";

const Resume = () => {
  return (
    <div>
      <div className="px-2 pt-10 pb-6">
        <h1 className="text-2xl font-raleway">RESUME</h1>
        <div className="flex items-center justify-center mt-2">
          <hr className="w-full border-t border-lightGray" />
        </div>
      </div>
      <div>RUSUME GOES HERE!</div>
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

export default Resume;
