import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion-component";

const QuestionMakerSpace = () => {
  return (
    <div
      id={"questions-MakerSpace"}
      className="container !outline-0 mt-[20px] md:my-[2.2rem] my-[1.2rem] max-w-[1280px]"
    >
      <h5 className="text-[25px] md:text-[35px] text-center lg:text-[55px]">
        Часті запитання
      </h5>
      <Accordion.Root className="w-full" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="text-left md:text-center text-[16px] md:text-[18px] ">
              Чи можу я взяти обладнання в оренду для комерційної діяльності?
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base">
            Так. Для комерційної оренди чи використання обладнання у
            бізнес-цілях необхідно окреме узгодження. Зв’яжись з нами для
            отримання детальної інформації та умов.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="text-left md:text-center text-[16px] md:text-[18px] ">
              Які є вимоги для участі в платних курсах?
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base">
            Щоб записатися на платні курси, потрібно зареєструватися{" "}
            <a
              href={"#"}
              className="hover:underline text-[#49B6FF]"
              target="_blank"
            >
              тут
            </a>
            , та зручним способом оплатити вартість курсу. У нас є два варіанти
            оплати: абонемент на 4 тижні або оплата за весь курс (12 тижнів).
            Якщо обираєш оплату за два місяці вперед, отримуєш знижку 20% на
            другий місяць. А якщо платиш за весь курс одразу, це вийде на 10%
            вигідніше, ніж платити щомісяця. Чудова можливість зекономити,
            погоджуєшся?
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="text-left md:text-center text-[16px] md:text-[18px] ">
              Яка політика безпеки в мейкерспейсі?
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base">
            Перш за все це обов’язкове дотримання інструкцій користування
            обладнанням, носіння захисного одягу та забезпечення безпеки всіх
            учасників навчального процесу. Детальнішу інформацію ти можеш знайти{" "}
            <a
              href={"#"}
              className="hover:underline text-[#49B6FF]"
              target="_blank"
            >
              тут
            </a>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="text-left text-[16px] md:text-[18px]">
              Чи можу я використовувати мейкерспейс для проведення власних
              заходів або майстер-класів?
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base">
            Так, мейкерспейс може бути використаний для проведення заходів або
            майстер-класів. Для цього потрібно погодити деталі (час, мета та
            цілі заходу) з нашою адміністрацією.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            <div className="text-left md:text-center md:text-[18px] text-[16px]">
              Які години роботи мейкерспейсу?
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base">
            Мейкерспейс відкритий з понеділка по п’ятницю з 16:00 до 19:00 та в
            суботу з 10:00 до 18:00. Вихідні дні та святкові дні можуть
            відрізнятися. Слідкуй за актуальним графіком роботи в соціальних
            мережах або зв’яжися з нами для уточнень.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            <div className="text-left md:text-center md:text-[18px] text-[16px]">
            Чи робимо вироби на замовлення?
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base">
            Так, ми можемо дещо виконувати, проте це залежить від характеру
            замовлення та доступності обладнання й ресурсів на момент звернення.
            Тож, найкраще уточнити деталі заздалегідь, щоб ми могли допомогти
            або направити до відповідних майстрів у нашій спільноті.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>
            <div className="text-left md:text-center md:text-[18px] text-[16px]">
              Чи надаєте ви витратні матеріали для роботи?
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base">
            Витратні матеріали не входять у членський внесок резидента — їх
            потрібно приносити з собою або купувати окремо. Проте, якщо ти
            записуєшся на курси, усі необхідні матеріали для роботи вже включені
            у вартість.
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
    </div>
  );
};

export default QuestionMakerSpace;
