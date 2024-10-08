import BackgroundImage from "../../../../public/images/policiesOrg.jpg";
import Image from "next/image";
import GendersIcon from "../../../../public/images/genders.svg";
import FamilyIcon from "../../../../public/images/family.svg";
import PrisonIcon from "../../../../public/images/prison.svg";
import MoneyIcon from "../../../../public/images/money.svg";
import { motion } from "framer-motion";

export default function PoliciesOrganization() {
  return (
    <div
      className="w-full relative h-[75svh] flex justify-center items-center flex-col gap-14 p-4 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.7)]"></div>
      <motion.div
        initial={{ opacity: 0, transform: "translateX(100px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        viewport={{ once: true, amount: 0.7 }}
        className="text-white font-bold text-[36px] md:text-[48px] z-10 text-center"
      >
        Політики організації
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        viewport={{ once: true, amount: 0.7 }}
        className="grid grid-cols-4 gap-4 md:gap-10 z-10 text-white max-w-[870px] px-4"
      >
        <a
          className="text-xs md:text-base flex flex-col gap-4 text-center items-center transition-all duration-300 hover:scale-105"
          target="_blank"
          href="https://docs.google.com/document/d/17JTsoBXdG8s0pRw996qe9Nt_Qjs7vTgC/edit?usp=sharing&ouid=115300393774937759954&rtpof=true&sd=true"
        >
          <Image
            src={GendersIcon}
            width={36}
            height={36}
            alt="policiesOrganization"
          />
          <span>Щодо протидії сексуальній експлуатації та нарузі</span>
        </a>
        <a
          className="text-xs md:text-base flex flex-col gap-4 text-center items-center transition-all duration-300 hover:scale-105"
          target="_blank"
          href="https://docs.google.com/document/d/1M7Uig46i67X4X1Swea-ktkooWHOB5uVx/edit?usp=sharing&ouid=115300393774937759954&rtpof=true&sd=true"
        >
          <Image
            src={FamilyIcon}
            width={36}
            height={36}
            alt="policiesOrganization"
          />
          <span>Щодо захисту дорослих та дітей</span>
        </a>
        <a
          href="https://docs.google.com/document/d/1odbVy1qONuIth233j0aN0D4nQp9lhSZRDM_GudmBO4Q/edit?usp=sharing"
          className="text-xs md:text-base flex flex-col gap-4 text-center items-center transition-all duration-300 hover:scale-105"
          target="_blank"
        >
          <Image
            src={MoneyIcon}
            width={36}
            height={36}
            alt="policiesOrganization"
          />
          <span>Щодо закупівель</span>
        </a>
        <a
          href="https://docs.google.com/document/d/1aWywzpWgwb58gOBt_oqRIgxN-DveSLtqMT5HbT53SbQ/edit?usp=sharing"
          className="text-xs md:text-base flex flex-col gap-4 text-center items-center transition-all duration-300 hover:scale-105"
          target="_blank"
        >
          <Image
            src={PrisonIcon}
            width={36}
            height={36}
            alt="policiesOrganization"
          />
          <span>Щодо протидії корупції</span>
        </a>
      </motion.div>
    </div>
  );
}
