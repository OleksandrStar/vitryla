import React from "react";
import AboutMakerSpace from "@/features/maker-space/components/about-maker-space";
import QuestionMakerSpace from "@/features/maker-space/components/question-maker-space";
import CoursesMakerSpace from "@/features/maker-space/components/courses-maker-space";
import MakersCommunity from "@/features/maker-space/components/makers-community";
import AccessToEquipment from "@/features/maker-space/components/access-to-equipment";
import BecomeResident from "@/features/maker-space/components/become-resident";
import WorkSpaceContacts from "@/features/maker-space/components/work-space-contacts";
import ResidencyComponent from "@/features/maker-space/components/residency-component";
import ResidentCard from "@/features/maker-space/components/resident-card";
import HeadBanner from "@/features/maker-space/components/head-banner";

const MakerSpace = () => {
  return (
    <div>
      <HeadBanner />
      <AboutMakerSpace />
      <ResidencyComponent />
      <ResidentCard />
      <AccessToEquipment />
      <MakersCommunity />
      <CoursesMakerSpace />
      <QuestionMakerSpace />
      <BecomeResident />
      <WorkSpaceContacts />
    </div>
  );
};

export default MakerSpace;
