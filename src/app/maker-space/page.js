import React from "react";
import MakerSpace from "@/features/maker-space";
import MakerSpaceHeader from "@/features/maker-space/components/maker-space-header";

const Page = () => {
  return (
    <div>
      <MakerSpaceHeader />
      <MakerSpace />
    </div>
  );
};

export default Page;
