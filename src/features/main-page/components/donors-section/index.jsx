import React from "react";
import { donorsList } from "./donors-utils";
import clsx from "clsx";

const DonorsSection = () => {
  return (
    <div className="container mt-[40px] md:px-10 px-3 xl:px-20 ">
      <h5 className="text-[25px] md:text-[35px] text-center lg:text-[55px]">
        Нас підтримали
      </h5>
      <div className="flex justify-center mt-8 gap-5">
        <div className="flex md:gap-[50px] gap-[20px] w-full flex-wrap sm:flex-nowrap md:justify-normal justify-around">
          {donorsList.map((donor, index) => {
            return (
              <a
                key={index}
                className={clsx(
                  "md:w-1/3 md:max-w-[400px] min-w-[180px] max-w-[180px] sm:min-w-[140px] sm:min-h-[140px] aspect-square duration-300 hover:scale-110 transition-all ease-in cursor-pointer",
                )}
                href={donor.link}
                target="_blank"
                rel="noopener noreferrer"
                draggable={true}
              >
                <div className="shadow-md rounded-full p-[30px] bg-white h-full flex flex-col items-center justify-center w-full">
                  <div
                    className={clsx(
                      "h-[200px] max-w-[300px] max-h-[300px] flex items-center justify-center",
                      index === 0 && "md:p-5 sm:p-3 p-3",
                      index === donorsList.length - 1
                        ? "w-[300px] h-[200px]"
                        : " w-full",
                    )}
                  >
                    {donor.logo}
                  </div>
                  <div className="text-center lg:text-[30px] text-[20px] border-t border-[49B6FF] p-2">
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
