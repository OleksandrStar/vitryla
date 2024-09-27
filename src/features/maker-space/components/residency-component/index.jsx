import React from "react";
import Image from "next/image";
import ResidencyImg from "@/assets/making-space/image11.jpg";

const ResidencyComponent = () => {
  return (
    <div className="md:flex my-5 p-4 max-w-[1000px] mx-auto lg:px-0 px-10">
      <div className="md:w-1/2 pr-5">
        <div className="text-[25px] md:text-[35px] lg:text-[55px] md:text-left text-center">
          Резидентство
        </div>
        <p className="md:mt-5 mt-2 leading-8 md:text-[16px] text-[14px] md:text-left text-center">
          Резиденти — це наша активна спільнота мейкерів, яка об’єднує
          інженерів, дизайнерів та новаторів, які працюють над власними
          проєктами. Вони взаємодіють, обмінюються знаннями, ідеями та досвідом,
          підтримують один одного у процесі навчання й реалізації проєктів у
          сфері роботи з деревом
        </p>
      </div>
      <div className="md:w-1/2 md:max-h-max max-h-[300px] overflow-hidden md:overflow-auto md:mt-0 mt-5">
        <Image
          src={ResidencyImg}
          alt={"ResidencyImg"}
          className="object-cover object-center h-full w-full"
        />
      </div>
    </div>
  );
};

export default ResidencyComponent;
