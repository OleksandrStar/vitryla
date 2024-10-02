import FirstCircle from "../../../../public/images/OurValuesCircleFirst.svg";
import SecondCircle from "../../../../public/images/OurValuesCircleSecond.svg";
import ThirdCircle from "../../../../public/images/OurValuesCircleThird.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import "./index.css";

export default function OurValues() {
  return (
    <div
      className="mt-12 w-full px-4 py-12 pt-6 md:h-[100svh] bg-[#003566] flex justify-center items-center
     flex-col gap-6"
    >
      <motion.div
        initial={{ opacity: 0, transform: "translateX(100px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        viewport={{ once: true, amount: 0.7 }}
        className="text-white font-bold text-[36px] md:text-[48px] z-10 text-center OurValues"
      >
        Наші цінності
      </motion.div>
      <div className="max-w-[1360px] w-full relative h-full flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true, amount: 0.7 }}
          className="md:absolute md:top-[15%] md:left-[5%] lg:top-[20%] lg:left-[13%] xl:top-[20%] xl:left-[17%]"
        >
          <div className="relative w-max">
            <Image
              width={250}
              height={250}
              src={FirstCircle}
              alt="first circle"
              className="w-[170px] h-[170px] lg:w-[250px] lg:h-[250px]"
            />
            <div className="OurValues text-white font-bold text-[18px] lg:text-[27px] absolute top-[40%] left-[26%]">
              Людина
            </div>
            <div className="OurValues text-white w-[150px] text-[12px] lg:text-[16px] absolute top-[0%] left-[60%] md:w-[200px]">
              Поважаємо особисті кордони, любимо та підтримуємо один одного.
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true, amount: 0.7 }}
          className="OurValues md:absolute md:top-[0%] md:right-[10%] lg:top-[3%] lg:right-[17%] xl:top-[0%] xl:right-[21%]"
        >
          <div className="relative w-max">
            <Image
              width={310}
              height={310}
              src={SecondCircle}
              alt="second circle"
              className="w-[240px] h-[240px] lg:w-[310px] lg:h-[310px]"
            />
            <div className="OurValues text-white font-bold text-[16px] lg:text-[22px] absolute top-[45%] left-[24%]">
              Креативність
            </div>
            <div className="OurValues text-white w-[130px] md:w-[200px] text-[12px] md:text-[14px] lg:text-[16px] absolute bottom-[0%] left-[60%]">
              Завжди нестандартно підходимо до всіх процесів.
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translateY(100px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          viewport={{ once: true, amount: 0.7 }}
          className="md:absolute md:bottom-[0%] md:left-[28%] lg:bottom-[0%] lg:left-[36%] xl:bottom-[0%] xl:left-[36%]"
        >
          <div className="relative w-max">
            <Image
              width={340}
              height={340}
              src={ThirdCircle}
              alt="second circle"
              className="w-[280px] h-[280px] lg:w-[340px] lg:h-[340px]"
            />
            <div className="OurValues text-white font-bold text-[18px] lg:text-[22px] absolute top-[45%] left-[23%]">
              Професійність
            </div>
            <div className="OurValues text-white text-[12px] lg:text-[16px] absolute left-[-6%] bottom-[0%] lg:left-[0%] w-[150px] text-end">
              Докладаємо максимум зусиль, аби бути найкращими у своїй справі.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
