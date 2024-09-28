import React from "react";
import { donorsList } from "./donors-utils";
import clsx from "clsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "@/assets/donors/arrow.svg";
import Image from "next/image";


const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-500 hover:text-gray-800 right-[-50px] md:right-[-40px]"
      onClick={onClick}
    >
      <Image src={Arrow} alt="next arrow" width={50} height={50} className="md:w-[50px] md:h-[50px] "/>
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-500 hover:text-gray-800 rotate-180 left-[-50px] md:left-[-40px]"
      onClick={onClick}
    >
       <Image src={Arrow} alt="prev arrow" width={50} height={50} className="md:w-[50px] md:h-[50px] "/>
    </div>
  );
};

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: "ease-in-out",
  fade: false,
  arrows: true,
  nextArrow: <NextArrow />,  
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const DonorsSection = () => {
  return (
    <div className="container mt-[40px] md:px-10 px-3 xl:px-20 ">
      <h5 className="font-bold text-[25px] md:text-[35px] text-center lg:text-[55px]">
        Наші Донори
      </h5>
      <div className="flex justify-center mt-8 gap-5">
        <div className="w-full md:px-0 px-12">
        <Slider {...settings}>
          {donorsList.map((donor, index) => {
            return (
              <a
                key={index}
                className={clsx(
                  "md:min-h-[140px] aspect-square duration-300 hover:scale-105 transition-all ease-in cursor-pointer my-4 px-4",
                )}
                href={donor.link}
                target="_blank"
                rel="noopener noreferrer"
                draggable={true}
              >
                <div className="shadow-md rounded-full p-[30px] bg-white h-full flex flex-col items-center justify-center w-full">
                  <div
                    className={clsx(
                      "w-full max-w-[300px] max-h-[300px] flex items-center justify-center h-[200px]",
                      index === 0 && "md:p-5 sm:p-3 p-3",
                    )}
                  >
                    {donor.logo}
                  </div>
                  <div className="text-center lg:text-[30px] text-[20px] border-t border-[49B6FF] p-2">
                    {donor.title}
                  </div>
                </div>
              </a>
            );
          })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DonorsSection;
