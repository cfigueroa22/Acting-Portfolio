import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="px-2 pt-10 pb-6">
        <h1 className="text-2xl">PHOTO GALLERY</h1>
        <div className="flex items-center justify-center mt-2">
          <hr className="w-full border-t border-lightGray" />
        </div>
      </div>
      <div>PHOTO GALLERY GOES HERE</div>
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

export default Gallery;
