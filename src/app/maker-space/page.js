import React from "react";
import MakerSpace from "@/features/maker-space";
import MakerSpaceHeader from "@/features/maker-space/components/maker-space-header";
import MakerSpaceFooter from "@/features/maker-space/components/maker-space-footer";

const Page = () => {
  return (
    <div>
      <MakerSpaceHeader />
      <MakerSpace />
      <MakerSpaceFooter />
    </div>
  );
};

export default Page;
