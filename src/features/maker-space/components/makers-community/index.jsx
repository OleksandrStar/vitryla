"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image2 from "@/assets/making-space/image5.jpg";
import Image3 from "@/assets/making-space/image 6.jpg";
import Image4 from "@/assets/making-space/image 8.jpg";
import Image5 from "@/assets/making-space/image7.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const imagesList = [Image2, Image3, Image4, Image5];

const settings = {
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: "h-[300px]",
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: false,
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const MakersCommunity = () => {
  return (
    <div
      id={"makersCommunity-MakerSpace"}
      className="mt-[20px] md:mt-[2.2rem] w-screen overflow-hidden"
    >
      <div className="container text-center">
        <h5 className="text-[25px] md:text-[35px] text-center lg:text-[55px]">
          Спільнота мейкерів
        </h5>
        <p className="md:my-10 my-5 max-w-[700px] mx-auto xl:text-[18px] md:text-[16px] text-[14px] px-5 leading-7">
          Якщо ти потрапив сюди, значить бажаєш долучитися до спільноти
          мейкерів. Тут зібрана вся інформація про учасників, їхні проєкти.
          Познайомся з творчими людьми, які вже стали частиною нашого простору,
          і долучайся до телеграм-каналу{" "}
          <a
            href={"#"}
            className="hover:underline text-[#49B6FF]"
            target="_blank"
          >
            {" "}
          </a>
          , щоб стати учасником спільноти.
        </p>
      </div>
      <div className="relative">
        <div className="opacity-50 h-[200px] md:h-[300px] w-[calc(100%)] overflow-hidden">
          <Slider {...settings}>
            {imagesList.map((img, index) => (
              <div key={index} className="h-full md:w-[400px] w-[250px]">
                <Image
                  src={img}
                  alt={`img-${index}`}
                  className="object-cover object-center h-[200px] md:h-[300px]"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, transform: "translateX(100px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            viewport={{ once: true, amount: 0.7 }}
            className="md:text-[18px] z-10 text-center min-w-[300px]"
          >
            <a
              className="bg-white rounded font-bold text-[16px] md:text-[24px] text-black
        border-black border-2 p-4 duration-500 hover:bg-black
        hover:text-white"
              href={"#"}
              target="_blank"
            >
              Приєднатися до нас
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MakersCommunity;
