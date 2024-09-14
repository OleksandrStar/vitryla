"use client";
import { motion } from "framer-motion";
import React from "react";
import AboutSection from "@/features/main-page/components/about-section";

const MainPage = () => {
  return (
    <div>
      <div className="font-bold container w-[750px] mx-auto leading-[30px] my-10">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-200px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <div className="flex flex-col gap-2">
            <div className="text-6xl">ВЧИТИСЯ</div>
            <div className="text-6xl">НЕ</div>
            <div className="text-6xl">ЦІКАВО</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateX(200px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ delay: 0.5, duration: 0.3 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <div className="text-right mt-5">якщо не знаєш навіщо</div>
        </motion.div>
      </div>
      <AboutSection />
    </div>
  );
};

export default MainPage;
