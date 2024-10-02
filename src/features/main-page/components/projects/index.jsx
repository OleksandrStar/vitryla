import React from "react";
import Image from "next/image";
import MakerSpaceImage from "../../../../public/images/MakingSpace.svg";
import RobotsImage from "../../../../public/images/Robots.png";
import Link from "next/link";

const ProjectsSection = () => {
  const projects = [
    {
      image: MakerSpaceImage,
      name: "Вітрила Maker Space",
      link: "/maker-space",
      isActive: true,
      description:
        "Справжня платформа для розвитку молодих  інженерів, слюсарів, дизайнерів та новаторів",
    },
    {
      name: "Вітрила Robots Academy",
      link: "",
      isActive: false,
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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 max-w-[1260px] md:px-4 gap-8 md:gap-4 md:py-4">
        {projects &&
          projects.map((item, index) => (
            <div key={item.name}>
              {item.link ? (
                <Link
                  href={item.link}
                  className={`lg:h-[420px] md:h-[400px] h-[350px] flex flex-col group p-5 rounded-2xl hover:shadow-xl transition-all ${item.isActive < 1 ? "opacity-50" : ""}`}
                >
                  <div className="w-full flex justify-center lg:h-[280px] md:h-[240px] h-[300px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="p-3 w-full h-full object-contain transition-all duration-300 group-hover:scale-[1.1] "
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-2 h-[70px]">
                    {item.name && (
                      <span className="font-[700] text-[22px] transition-all duration-300 group-hover:opacity-60 text-center md:text-start">
                        {item.name}
                      </span>
                    )}
                    {item.description && (
                      <span className="text-[16px] transition-all duration-300 group-hover:opacity-60 text-center md:text-start">
                        {item.description}
                      </span>
                    )}
                  </div>
                </Link>
              ) : (
                <div
                  className={`lg:h-[420px] md:h-[400px] h-[350px] flex flex-col opacity-50 p-5 `}
                >
                  <div className="w-full flex justify-center lg:h-[280px] md:h-[240px] h-[300px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="p-3 w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-2 opacity-50 h-[70px]">
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
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
