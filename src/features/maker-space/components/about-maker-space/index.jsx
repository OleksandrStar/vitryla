import React from "react";
import MakerSpace from "@/features/maker-space";
import Image from "next/image";
import WoodIcon from "../../../../public/making-space/icon/wood.svg";
import SpaceIcon from "../../../../public/making-space/icon/space.svg";
import CoursesIcon from "../../../../public/making-space/icon/coueses.svg";
import MakerSpaceLogo from "../../../../public/images/MakingSpace.svg";

const AboutMakerSpace = () => {
  return (
    <div
      id="aboutProject-MakerSpace"
      className="lg:container lg:px-0 px-10 mt-5"
    >
      <h5 className="text-[30px] md:text-[35px] text-center lg:text-[55px]">
        Про проєкт
      </h5>
      <div className="flex">
        <div className="lg:w-[1000px] mx-auto md:mt-5 mt-3 md:gap-y-0 gap-y-5 flex flex-col">
          <div className="flex gap-5 items-center">
            <div className="w-[30%]">
              <Image
                src={WoodIcon}
                alt={"WoodIcon"}
                className="w-full h-full min-w-[60px] min-h-[60px]"
              />
            </div>
            <p className="leading-8 lg:text-[16px] text-[14px]">
              «Вітрила Maker Space» — місце для роботи з деревом, справжня
              платформа для розвитку молодих інженерів, дизайнерів та новаторів.
              Тут ти зможеш не тільки опанувати нові технічні навички, але й
              знайти однодумців і стати частиною активної мейкерської спільноти.
            </p>
          </div>
          <div className="gap-5 items-center flex sm:flex-row flex-row-reverse sm:text-left text-right">
            <div className="w-[30%]">
              <Image
                src={SpaceIcon}
                alt={"WoodIcon"}
                className="w-[140px] h-[140px] min-w-[60px] min-h-[60px]"
              />
            </div>
            <div className="flex items-center">
              <p className="leading-8 lg:w-[calc(100%-200px)] lg:text-[16px] text-[14px]">
                Простір оснащений сучасним обладнанням: фрезерним верстатом,
                циркулярною пилою, електролобзиками, шліфувальними машинами,
                токарними верстатами та багатьма іншими інструментами. Також є
                ноутбуки й принтери для створення 3D-моделей та планів для
                майбутніх проєктів.
              </p>
              <Image
                className="float-right rounded-full overflow-hidden h-[200px] w-auto lg:block hidden"
                src={MakerSpaceLogo}
                alt={"MakerSpaceLogo"}
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-[30%]">
              <Image
                src={CoursesIcon}
                alt={"WoodIcon"}
                className="w-[140px] h-[140px] min-w-[60px] min-h-[60px]"
              />
            </div>
            <p className="leading-8 lg:text-[16px] text-[14px]">
              Окрім безоплатного доступу до обладнання, ти можеш брати участь у
              платних курсах із основ деревообробки, дизайну меблів та створення
              декоративних виробів. Кожен відвідувач зможе практично застосувати
              отримані знання під керівництвом досвідчених вчителів.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMakerSpace;
