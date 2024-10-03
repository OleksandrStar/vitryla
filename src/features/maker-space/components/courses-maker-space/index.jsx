"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion-component";
import Image from "next/image";
import LogoIcon from "../../../../public/making-space/makerSpaceLogo.svg";
import { motion } from "framer-motion";

const MakerSpaceIcon = (
  <Image src={LogoIcon} alt={"maker-space-icon"} width="46" height="46" />
);

const CoursesMakerSpace = () => {
  return (
    <div
      id={"courses-MakerSpace"}
      className="container !outline-0 mt-[20px] md:mt-[2.2rem] max-w-[1280px]"
    >
      <h5 className="text-[30px] md:text-[35px] lg:text-[55px] text-center my-2">
        Наші курси
      </h5>
      <Accordion.Root className="w-full" type="single" collapsible>
        <AccordionItem value="value-1">
          <AccordionTrigger icon={MakerSpaceIcon} className="font-bold">
            <div className={"font-bold"}>Курс «Безпечний майстер»</div>
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base ">
            <div className="leading-9">
              <p>
                <span className="font-bold">Вік учнів:</span> 9-99 років.
              </p>
              <p>
                <span className="font-bold">Тривалість курсу:</span> 3 години
              </p>
              <p>
                <span className="font-bold">Тривалість заняття:</span> 1.5
                години, 1 раз на тиждень
              </p>
              <p>
                <span className="font-bold">Вартість:</span> безкоштовно
              </p>
              <p>
                <span className="font-bold">Кількість учнів у групі:</span> 12
              </p>

              <p>
                <span className="font-bold">
                  Курс складається з двох модулів:
                </span>
              </p>
              <p>
                <span className="font-bold">1 Модуль.</span> Правила перебування
                в майстерні, робота з інструментом.
              </p>
              <p>
                <span className="font-bold">2 Модуль.</span> Перша медична
                допомога при пораненнях.
              </p>

              <p className="italic mt-3">
                Навчимо правильно й безпечно для здоров’я працювати з ручними
                інструментами, розуміти їхню будову, способи роботи та
                призначення. Також покажемо першу медичну допомогу в разі
                поранення. Підходить для будь-якого віку, адже це треба всім)
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger icon={MakerSpaceIcon} className="font-bold">
            <div className={"font-bold"}>Курс «Змайструй МРІЮ»</div>
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base">
            <div className="leading-9">
              <p>
                <span className="font-bold">Вік учнів:</span> 9-17 років.
              </p>
              <p>
                <span className="font-bold">Тривалість курсу:</span> 4 години
              </p>
              <p>
                <span className="font-bold">Тривалість заняття:</span> 1,5
                години, 1 раз на тиждень
              </p>
              <p>
                <span className="font-bold">Вартість:</span> 699 гривень
              </p>
              <p>
                <strong className="font-bold">
                  *Обов’язкове проходження медичного модулю курсу «Безпечний
                  майстер»
                </strong>
              </p>

              <p>На цьому курсі ми створимо прототип літака «Мрія».</p>
              <p className="italic mt-3">
                Короткий курс, на якому ти зможеш спробувати себе у сфері
                мейкерства та зрозуміти, чи це твоя двіжуха.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger icon={MakerSpaceIcon}>
            <div className={"font-bold"}>Курс «Мейкер Junior»</div>
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base">
            <div className="leading-9">
              <p>
                <span className="font-bold">Вік учнів:</span> 9+ років
              </p>
              <p>
                <span className="font-bold">Тривалість курсу:</span> 24 години
                (4 місяці)
              </p>
              <p>
                <span className="font-bold">Тривалість заняття:</span> 90
                хвилин, 1 раз на тиждень
              </p>
              <p>
                <span className="font-bold">Вартість:</span> 1 000
                гривень/місяць. Якщо оплачувати відразу за 4 місяці, то буде 3
                899 грн.
              </p>
              <p>
                <span className="font-bold">Кількість учнів у групі:</span> 8
              </p>

              <p className="italic mt-3">
                Освоїмо правильну та безпечну роботу з ручними інструментами.
                Поєднання ручних та електроінструментів для виготовлення першого
                проєкту.
              </p>

              <h3 className="mt-3 font-bold">Ти навчишся:</h3>
              <ul className="leading-9 list-decimal ml-10">
                <li>
                  Розрізняти різні породи деревини, розуміти їх властивості,
                  ознайомишся з видами сировини для виробів (дерево, фанера
                  тощо).
                </li>
                <li>Правильно розмічати та розкроювати фанеру.</li>
                <li>
                  З’єднувати деталі з фанери за допомогою різних способів
                  (шипове з’єднання, клей тощо).
                </li>
                <li>
                  Працювати з основними електрифікованими інструментами (лобзик,
                  дриль, шліфувальна машинка).
                </li>
                <li>Використовувати інструменти для створення виробів.</li>
                <li>
                  Основам фінішної обробки виробу (шліфування, фарбування,
                  лакування).
                </li>
                <li>Основам ремонту та реставрації дерев’яних виробів.</li>
                <li>Основам моделювання виробів.</li>
                <li>Створиш та презентуєш готовий виріб.</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
      <div className="md:h-[20vh] h-[15vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true, amount: 0.7 }}
          className="md:text-[18px] z-10 text-center min-w-[300px] flex items-center justify-center"
        >
          <a
            className="bg-white rounded font-bold text-[16px] md:text-[24px] text-black
        border-black border-2 p-4 duration-500 hover:bg-black text-nowrap
        hover:text-white"
            href={"https://forms.gle/brpmPdXPsPxpnRva8"}
            target="_blank"
          >
            Записатися на курси
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesMakerSpace;
