import React from "react";
import AboutBigImg from "@/assets/images/about-img.JPG";
import AboutSmallImg from "@/assets/images/about-small-img.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div id="about" className="pt-[30px]">
      <div className="container overflow-hidden flex gap-5 lg:flex-row flex-col-reverse py-5">
        <div className="lg:w-4/6 w-full flex gap-4">
          <div className="lg:w-4/6 w-full overflow-hidden ">
            <Image
              src={AboutBigImg}
              alt="about-img"
              className="lg:h-[500px] md:h-[400px] h-[300px] w-full object-cover transform transition-transform duration-500 hover:scale-110 hover:opacity-90"
            />
          </div>
          <div className="w-2/6 h-4/6 overflow-hidden hidden lg:block">
            <Image
              src={AboutSmallImg}
              alt="about-small-img"
              className="h-[300px] w-full object-cover mt-5 transform transition-transform duration-500 hover:scale-110 hover:opacity-90"
            />
          </div>
        </div>

        <div className="lg:w-2/6 w-full md:p-0 p-5">
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
              освіту. Влітку 2022 року команда об’єдналася для організації
              освітніх клубів, а вже 1 листопада 2022 року створили громадське
              об’єднання.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
