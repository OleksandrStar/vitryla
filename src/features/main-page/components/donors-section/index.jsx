import React from "react";
import { donorsList } from "./donors-utils";

const DonorsSection = () => {
  return (
    <div className="container">
      <h5 className="text-[55px] text-center">Наші Донори</h5>
      <div className="flex justify-center mt-10">
        <div className="flex gap-[50px]">
          {donorsList.map((donor) => {
            return (
              <a
                href={donor.link}
                target="_blank"
                rel="noopener noreferrer"
                draggable={true}
              >
                <div className="shadow-md rounded-full p-[30px] w-[320px] h-[320px] bg-white">
                  <div className="w-full max-w-[300px] max-h-[300px] flex items-center justify-center h-[200px]">
                    {donor.logo}
                  </div>
                  <div className="text-center text-[30px] border-t border-[49B6FF] p-2">
                    {donor.title}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DonorsSection;
