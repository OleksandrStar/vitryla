import React from "react";
import Image from "next/image";
import MakerSpaceImage from "@/assets/images/MakingSpace.svg";
import RobotsImage from "@/assets/images/Robots.svg";
import Link from "next/link";

const ProjectsSection = () => {
  const projects = [
    {
      image: MakerSpaceImage,
      name: "Вітрила Maker Space",
      link: "/maker-space",
      description:
        "Справжня платформа для розвитку молодих інженерів, дизайнерів та новаторів",
    },
    {
      name: "Вітрила Robots Academy",
      link: "",
      image: RobotsImage,
      description: "Coming soon...",
    },
  ];

  return (
    <div
      className="w-full flex items-center my-10 flex-col gap-6"
      id="projects"
    >
      <h5 className="text-[25px] md:text-[35px] text-center lg:text-[55px]">
        Проєкти
      </h5>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 w-full max-w-[1260px] md:px-4 gap-8 md:gap-4 md:py-4">
        {projects &&
          projects.map((item, index) => (
            <div key={item.name}>
              {item.link ? (
                <Link
                  href={item.link}
                  className={`flex flex-col gap-2 ${item.link.length < 1 ? "opacity-50" : ""}`}
                >
                  <div className="w-full flex justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="lg:h-[320px] md:h-[300px] h-[250px] transition-all duration-300 hover:opacity-50"
                    />
                  </div>
                  {item.name && (
                    <span className="font-[700] text-[22px] transition-all duration-300 hover:opacity-50 text-center md:text-start">
                      {item.name}
                    </span>
                  )}
                  {item.description && (
                    <span className="text-[16px] transition-all duration-300 hover:opacity-50 text-center md:text-start">
                      {item.description}
                    </span>
                  )}
                </Link>
              ) : (
                <div className={`flex flex-col gap-2 opacity-50`}>
                  <div className="w-full flex justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="lg:h-[320px] md:h-[300px] h-[250px]"
                    />
                  </div>
                  {item.name && (
                    <span className="font-[700] text-[22px] text-center md:text-start">
                      {item.name}
                    </span>
                  )}
                  {item.description && (
                    <span className="text-[16px]  text-center md:text-start">
                      {item.description}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
