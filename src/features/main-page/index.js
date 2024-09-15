"use client";
import React from "react";
import AboutSection from "@/features/main-page/components/about-section";
import TitleSection from "@/features/main-page/components/title-section";
import AboutUsAccordionSection from "@/features/main-page/components/about-us-accordion-section";
import ProjectsSection from "@/features/main-page/components/projects";
import PartnersSection from "@/features/main-page/components/partners-section";
import DonorsSection from "@/features/main-page/components/donors-section";

const MainPage = () => {
  return (
    <div className="w-full overflow-hidden mt-[84px]">
      <TitleSection />
      <AboutSection />
      <AboutUsAccordionSection />
      <ProjectsSection />
      <PartnersSection />
      <DonorsSection />
      <div className="h-[1000px]" id="projects" />
    </div>
  );
};

export default MainPage;
