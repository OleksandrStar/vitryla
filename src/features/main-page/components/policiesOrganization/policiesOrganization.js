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
          className="text-xs md:text-base flex flex-col gap-4 text-center items-center transition-all duration-300 hover:scale-105 hover:bg-white/20 p-2 rounded-xl"
          target="_blank"
          href="https://drive.google.com/file/d/150EQvQIABLjl8p23_hfcqNaYCT40U0Z5/view?usp=sharing"
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
          className="text-xs md:text-base flex flex-col gap-4 text-center items-center transition-all duration-300 hover:scale-105 hover:bg-white/20 p-2 rounded-xl"
          target="_blank"
          href="https://drive.google.com/file/d/1docAIZfNQ6DqEFVaCXHJEd4EFDMIzMq8/view?usp=sharing"
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
          href="https://drive.google.com/file/d/1CsGONrFr67shxNDJOjHGk53HVTtmevEr/view?usp=sharing"
          className="text-xs md:text-base flex flex-col gap-4 text-center items-center transition-all duration-300 hover:scale-105 hover:bg-white/20 p-2 rounded-xl"
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
          href="https://drive.google.com/file/d/18rlBl0KQyZ_Ps8l2GZuNBM-lbCYF4Rj0/view?usp=sharing"
          className="text-xs md:text-base flex flex-col gap-4 text-center items-center transition-all duration-300 hover:scale-105 hover:bg-white/20 p-2 rounded-xl"
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

      <motion.div
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1isupP4YxBsuliIjHV6cvyVMKADLILODw?usp=sharing"
          className="rounded font-bold text-[18px] text-[white] md:text-[24px]  bg-none border-white border-2 p-4
        duration-500 hover:bg-[rgba(255,255,255)] hover:text-black hover:border-black"
        >
          Інші політики
        </a>
      </motion.div>
    </div>
  );
}
