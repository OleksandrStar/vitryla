"use client";
import React from "react";
import AboutSection from "@/features/main-page/components/about-section";
import TitleSection from "@/features/main-page/components/title-section";
import AboutUsAccordionSection from "@/features/main-page/components/about-us-accordion-section";
import ProjectsSection from "@/features/main-page/components/projects";
import PartnersSection from "@/features/main-page/components/partners-section";
import DonorsSection from "@/features/main-page/components/donors-section";
import PoliciesOrganization from "@/features/main-page/components/policiesOrganization/policiesOrganization";
import OurValues from "@/features/main-page/components/ourValues/OurValues";
import Opportunities from "@/features/main-page/components/opportunities/opportunities";

const MainPage = () => {
  return (
    <div className="w-full overflow-hidden mt-[84px]">
      <TitleSection />
      <AboutSection />
      <AboutUsAccordionSection />
      <OurValues />
      <PoliciesOrganization />
      <ProjectsSection />
      <PartnersSection />
      <DonorsSection />
      <Opportunities />
    </div>
  );
};

export default MainPage;
