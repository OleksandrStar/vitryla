"use client";
import React from "react";
import { motion } from "framer-motion";

const TitleSection = () => {
  const scrollToSection = () => {
    const section = document.getElementById("about");
    const yOffset = -80;
    const yPosition =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex font-bold container mx-auto leading-[30px] md:mt-[50px] md:mb-[20px] my-[0px] h-[60vh]">
        <div className="flex items-center justify-center mx-auto">
          <div className="md:w-[750px] sm:w-[550px]">
            <div className="">
              <motion.div
                initial={{ opacity: 0, transform: "translateX(-200px)" }}
                animate={{ opacity: 1, transform: "translateX(0)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-2">
                  <div className="md:text-[5.2rem] sm:text-6xl text-4xl">
                    ВЧИТИСЯ
                  </div>
                  <div className="md:text-[5.2rem] sm:text-6xl text-4xl">
                    НЕ
                  </div>
                  <div className="md:text-[5.2rem] sm:text-6xl text-4xl">
                    ЦІКАВО
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, transform: "translateX(200px)" }}
                animate={{ opacity: 1, transform: "translateX(0)" }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <div className="text-right mt-5 text-2xl">
                  якщо не знаєш навіщо
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-[20px]">
        <button
          className="rounded-full border-[2px] border-black animate-bounce mx-auto p-3"
          onClick={() => scrollToSection()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TitleSection;
