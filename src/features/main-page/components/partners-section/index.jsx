import React from "react";
import { partnersList } from "@/features/main-page/components/partners-section/partners-utils";
import Image from "next/image";
import clsx from "clsx";

const PartnersSection = () => {
  return (
    <div className="container px-10 lg:px-20 mt-[40px]" id="partners">
      <h5 className="text-[25px] md:text-[35px] text-center lg:text-[55px]">
        Партнери
      </h5>
      <div className="flex flex-wrap mt-5 md:mt-10 w-full xl:px-[30px]">
        {partnersList.map((partnerData) => {
          return partnerData.href ? (
            <a
              href={partnerData.href}
              className="md:w-1/3 w-1/2 relative xl:p-[30px]"
              target="_blank"
              rel="noopener noreferrer"
            >
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
    <div
      className={clsx(
        "group aspect-square hover:opacity-100 transition-all ease-in cursor-pointer flex flex-col items-center",
        partnerData.description.length &&
          "hover:z-50 duration-300 hover:scale-110 bg-white hover:shadow rounded-md hover:absolute",
      )}
    >
      <div className="h-5/6 flex items-center justify-center w-full max-w-100%">
        <Image
          src={partnerData.logo}
          alt={""}
          className="object-cover w-[80%]"
        />
      </div>
      <div className="flex items-center h-1/6 justify-center mt-2">
        <div className="text-[12px] sm:text-[16px] text-center lg:text-[20px] ">
          {partnerData.title}
        </div>
      </div>
      {partnerData.description.length ? (
        <div className="hidden group-hover:block text-[12px] md:text-[14px] text-center text-zinc-500 px-5  pb-[16px] transition-all opacity-0 group-hover:opacity-100 ease-in">
          {partnerData.description}
        </div>
      ) : null}
    </div>
  );
};

export default PartnersSection;
