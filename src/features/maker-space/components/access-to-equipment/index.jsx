"use client";
import React from "react";
import Image from "next/image";
import BackgroundImage from "../../../../public/making-space/image5.jpg";
import { motion } from "framer-motion";

const AccessToEquipment = () => {
  return (
    <div
      id={"equipment-MakerSpace"}
      className="w-full overflow-hidden md:h-full h-[700px]"
    >
      <div
        id="opportunities"
        className="w-full relative flex md:bg-fixed bg-scroll justify-center items-center flex-col md:gap-8 gap-7 p-4 pb-6 md:h-[75svh] h-[700px]"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.7)]"></div>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-white font-bold text-[34px] md:text-[54px] z-10 text-center"
        >
          Доступ до обладнання
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-white text-[14px] md:text-[18px] max-w-[300px] md:max-w-[500px] z-10 text-center leading-7"
        >
          Тут ти знайдеш всю необхідну інформацію про доступ до нашого
          обладнання. Ми пропонуємо сучасні інструменти для деревообробки. Із
          детальним списком обладнання можна ознайомитися{" "}
          <a
            href={
              "https://docs.google.com/document/d/11DGg5UAnJ9ztG_DSzlGzF2TTwR27EeTzKpvQIOtfgG4/edit#heading=h.dyv4uv59g026"
            }
            target="_blank"
            className="hover:underline text-[#49B6FF]"
          >
            тут
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-white text-[14px] md:text-[18px] max-w-[300px] md:max-w-[500px] z-10 text-center"
        >
          <a
            className="rounded font-bold text-[18px] md:text-[24px]
        bg-none
        border-white border-2 p-4 duration-500 hover:bg-[rgba(255,255,255)]
        hover:text-black hover:border-black"
            href="https://docs.google.com/document/d/11DGg5UAnJ9ztG_DSzlGzF2TTwR27EeTzKpvQIOtfgG4/edit#heading=h.dyv4uv59g026"
            target="_blank"
          >
            Наше обладнання
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-white text-[14px] md:text-[18px] max-w-[300px] md:max-w-[500px] z-10 text-center leading-7"
        >
          Перед тим, як використовувати обладнання, ти маєш переглянути наш
          договір про користування.{" "}
          <a
            href={
              "https://docs.google.com/document/d/1h6ihLuqniJsuY4ZE4on-2dgZ3rktg5cv/edit?usp=sharing&ouid=115300393774937759954&rtpof=true&sd=true"
            }
            target="_blank"
            className="hover:underline text-[#49B6FF]"
          >
            У документі{" "}
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-white text-[14px] md:text-[18px] max-w-[300px] md:max-w-[500px] z-10 text-center"
        >
          <a
            className="rounded font-bold text-[18px] md:text-[24px]
        bg-none
        border-white border-2 p-4 duration-500 hover:bg-[rgba(255,255,255)]
        hover:text-black hover:border-black"
            href="https://docs.google.com/document/d/1h6ihLuqniJsuY4ZE4on-2dgZ3rktg5cv/edit?usp=sharing&ouid=115300393774937759954&rtpof=true&sd=true"
            target="_blank"
          >
            Наш договір
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AccessToEquipment;
