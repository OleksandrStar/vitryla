"use client";
import React from "react";
import AboutSection from "@/features/main-page/components/about-section";

const MainPage = () => {
  return (
    <div>
      <div className="font-bold container w-[750px] mx-auto leading-[30px] my-10">
        <div className="flex flex-col gap-2">
          <div className="text-6xl">ВЧИТИСЯ</div>
          <div className="text-6xl">НЕ</div>
          <div className="text-6xl">ЦІКАВО</div>
        </div>
        <div className="text-right mt-5">якщо не знаєш навіщо</div>
      </div>
      <AboutSection />
    </div>
  );
};

export default MainPage;
