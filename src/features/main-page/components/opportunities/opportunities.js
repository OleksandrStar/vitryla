import BackgroundImage from "../../../../public/images/opportunities.jpg";
import { motion } from "framer-motion";

export default function Opportunities() {
  return (
    <div
      id="opportunities"
      className="w-full relative h-[75vh] flex justify-center items-center flex-col gap-8 p-4 mt-14 bg-cover bg-top bg-no-repeat bg-scroll md:bg-fixed"
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
        Можливості
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-100px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        viewport={{ once: true, amount: 0.7 }}
        className="text-white text-[14px] md:text-[18px] max-w-[300px] md:max-w-[500px] z-10 text-center"
      >
        І навіть якщо ми не маємо вакансій — ми раді бачити тебе в команді)
        Долучайся до активної спільноти волонтерів нашої організації та гайда
        втілювати інновації в громаді разом!
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
          href="https://t.me/vitryla_community"
          target="_blank"
        >
          Приєднатися до нас
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-100px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        viewport={{ once: true, amount: 0.7 }}
        className="text-white text-[10px] md:text-[14px] max-w-[300px] md:max-w-[500px] z-10 text-center"
      >
        А якщо ти повен ідей, як прокачати молодь через STEAM освіту, пиши нам
        та реалізуй свою ідею спільно з нами.
      </motion.div>
    </div>
  );
}
