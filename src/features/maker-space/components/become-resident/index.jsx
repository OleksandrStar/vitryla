"use client";
import React from "react";
import BackgroundImage from "../../../../public/making-space/image7.jpg";
import { motion } from "framer-motion";

const BecomeResident = () => {
  return (
    <div
      className="w-full relative md:bg-center bg-center h-[60svh] md:bg-cover bg-auto md:bg-fixed bg-scroll flex justify-center items-center flex-col gap-14 p-4 overflow-hidden"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.7)]"></div>
      <motion.div
        initial={{ opacity: 0, transform: "translateX(100px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        viewport={{ once: true, amount: 0.7 }}
        className="text-white text-[16px] md:text-[18px] z-10 text-center md:w-[500px] w-[300px] leading-8 italic"
      >
        Приєднуйся до спільноти мейкерів, де інженери та новатори реалізовують
        свої проєкти й діляться досвідом у роботі з деревом.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(50px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        viewport={{ once: true, amount: 0.1 }}
        className="grid items-center md:gap-10 z-10 text-white max-w-[870px] px-4"
      >
        <a
          className="rounded font-bold text-[18px] md:text-[24px]
        bg-none
        border-white border-2 p-4 duration-500 hover:bg-[rgba(255,255,255)]
        hover:text-black hover:border-black"
          href="https://forms.gle/NXaMzasvw6k2Mo5K7"
          target="_blank"
        >
          Стати резидентом
        </a>
      </motion.div>
    </div>
  );
};

export default BecomeResident;
