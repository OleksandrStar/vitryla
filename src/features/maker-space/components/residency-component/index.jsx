"use client";
import React from "react";
import Image from "next/image";
import ResidencyImg from "../../../../public/making-space/image11.jpg";
import { motion } from "framer-motion";

const ResidencyComponent = () => {
  return (
    <div
      id="residency-MakerSpace"
      className="md:flex mb-5 p-4 max-w-[1000px] mx-auto lg:px-0 px-10 pt-0"
    >
      <div className="md:w-1/2 pr-5">
        <div className="text-[30px] md:text-[35px] lg:text-[55px] md:text-left text-center">
          Резидентство
        </div>
        <motion.div
          initial={{ opacity: 0, transform: "-translateX(100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <p className="md:mt-5 mt-2 leading-8 md:text-[16px] text-[14px] md:text-left text-center">
            Резиденти — це наша активна спільнота мейкерів, яка об’єднує
            інженерів, дизайнерів та новаторів, які працюють над власними
            проєктами. Вони взаємодіють, обмінюються знаннями, ідеями та
            досвідом, підтримують один одного у процесі навчання й реалізації
            проєктів у сфері роботи з деревом
          </p>
        </motion.div>
      </div>
      <div className="md:w-1/2 md:max-h-max max-h-[300px] overflow-hidden md:overflow-auto md:mt-0 mt-5">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true, amount: 0.3 }}
          className="h-full"
        >
          <Image
            src={ResidencyImg}
            alt={"ResidencyImg"}
            className="object-cover object-center h-full w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ResidencyComponent;
