import React from "react";
import { partnersList } from "@/features/main-page/components/partners-section/partners-utils";

const PartnersSection = () => {
  return (
    <div>
      <h5 className="text-[55px] text-center">Партнери</h5>
      <div className="flex flex-wrap mt-10 w-full">
        {partnersList.map((partnerData) => {
          return partnerData.href ? (
            <a href={partnerData.href}>
              <PartnerItem partnerData={partnerData} />
            </a>
          ) : (
            <PartnerItem partnerData={partnerData} />
          );
        })}
      </div>
    </div>
  );
};

const PartnerItem = ({ partnerData }) => {
  return (
    <div className="w-[1/3]">
      <div>{partnerData?.logo}</div>
      <div>{partnerData.title}</div>
      {/*<div>{partnerData.description}</div>*/}
    </div>
  );
};

export default PartnersSection;
