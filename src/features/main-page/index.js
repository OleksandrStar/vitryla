"use client";
import React from "react";
import AboutSection from "@/features/main-page/components/about-section";
import TitleSection from "@/features/main-page/components/title-section";
import AboutUsAccordionSection from "@/features/main-page/components/about-us-accordion-section";

const MainPage = () => {
  return (
    <div>
      <TitleSection />
      <AboutSection />
      <AboutUsAccordionSection />
      <div className="h-[1000px]" />
    </div>
  );
};

export default MainPage;
