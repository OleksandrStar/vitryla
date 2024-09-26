import React from "react";

const ProjectsSection = () => {

  const projects = [

  ]

  return (
    <div className="w-full flex flex-col">
      {projects && projects.map((item,index)=>(
        <div className="h-[95vh]"></div>
      ))}
    </div>
  );
};

export default ProjectsSection;
