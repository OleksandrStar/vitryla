import React from "react";
import AboutBigImg from "../../../../public/images/about-section/about-img.jpg";
import AboutBigImg2 from "../../../../public/images/about-section/about-img-2.jpg";
import AboutBigImg3 from "../../../../public/images/about-section/about-img-3.jpg";
import AboutBigImg4 from "../../../../public/images/about-section/about-img-4.jpg";
import TeamImg from "../../../../public/images/about-section/Team.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "lg:h-[470px] md:h-[370px] h-[270px] ",
  autoplay: true,
  autoplaySpeed: 5500,
  fade: false,
  arrows: false,
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
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

const imagesList = [
  TeamImg,
  AboutBigImg,
  AboutBigImg2,
  AboutBigImg3,
  AboutBigImg4,
];

const AboutSection = () => {
  return (
    <div id="about" className="pt-[30px] w-full flex justify-center">
      <div
        className="w-full max-w-[1260px] overflow-hidden flex gap-5  flex-col-reverse py-5
      lg:grid lg:grid-cols-[2fr_1fr]"
      >
        <div className=" lg:h-[500px] md:h-[400px] h-[300px] w-[calc(100%)] overflow-hidden">
          <Slider {...settings}>
            {imagesList.map((img, index) => (
              <div key={index} className="h-full md:w-[400px] w-[250px]">
                <Image
                  src={img}
                  alt={`img-${index}`}
                  className="lg:h-[500px] md:h-[400px] h-[300px] w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className=" w-full md:p-0 p-5">
          <h5 className="text-[55px] font-bold">Про Нас</h5>
          <motion.div
            initial={{ opacity: 0, transform: "translateX(100px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <p className="font-bold mt-5 text-[20px]">
              Що відбувається, коли двоє людей натхненно розмовляють над
              амбітними ідеями?
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(200px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <p className="mt-5">
              Правильно — ідеї стають реальністю. Так утворилася спільнота
              однодумців, яка має бажання розвивати молодь через неформальну
              освіту. Влітку 2022 року команда об&apos;єдналася для проведення
              освітніх клубів, а вже 1 листопада 2022 року створили громадську
              організацію.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
