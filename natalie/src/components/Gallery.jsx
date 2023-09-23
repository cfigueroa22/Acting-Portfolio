import { useState } from "react";

import imageOne from "../assets/image1.jpg";
import imageTwo from "../assets/image2.jpg";
import imageThree from "../assets/image3.jpg";
import imageFour from "../assets/image4.jpg";
import imageFive from "../assets/image5.jpg";
import imageSix from "../assets/image6.jpg";
import imageSeven from "../assets/image7.jpg";

const Gallery = () => {
  const slides = [
    {
      image: imageOne,
    },
    {
      image: imageTwo,
    },
    {
      image: imageThree,
    },
    {
      image: imageFour,
    },
    {
      image: imageFive,
    },
    {
      image: imageSix,
    },
    {
      image: imageSeven,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="z-0">
      {/* Page Title */}
      <div className="px-2 pt-10 pb-6">
        <h1 className="text-2xl font-raleway">PHOTO GALLERY</h1>
        <div className="flex items-center justify-center mt-2">
          <hr className="w-full border-t border-lightGray" />
        </div>
      </div>
      {/* Gallery */}
      <div className="z-0 px-2  max-w-56 group">
        <div>
          <img src={slides[currentIndex].image} />
        </div>
        <div className="absolute hidden text-white  group-hover:block hover:cursor-pointer top-[50%] left-2 text-4xl ">
          <ion-icon onClick={prev} name="arrow-back-outline" />
        </div>
        <div className="absolute hidden text-white  group-hover:block hover:cursor-pointer top-[50%] right-2 text-4xl">
          <ion-icon onClick={next} name="arrow-forward-outline" />
        </div>
      </div>

      {/* Footer */}
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
