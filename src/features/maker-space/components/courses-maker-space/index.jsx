import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion-component";
import Image from "next/image";
import LogoIcon from "@/assets/making-space/makerSpaceLogo.svg";

const MakerSpaceIcon = (
  <Image src={LogoIcon} alt={"maker-space-icon"} width="46" height="46" />
);

const CoursesMakerSpace = () => {
  return (
    <div
      id={"courses-MakerSpace"}
      className="container !outline-0 mt-[20px] md:mt-[2.2rem] max-w-[1280px]"
    >
      <h5 className="text-[25px] md:text-[35px] text-center lg:text-[55px]">
        Наші курси
      </h5>
      <Accordion.Root className="w-full" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger icon={MakerSpaceIcon}>
            Курс «Безпечний майстер»
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base">
            Вік учнів: 9-99 років. Тривалість курсу: 3 години Тривалість
            заняття: 1.5 години, 1 раз на тиждень Вартість: безкоштовно
            Кількість учнів у групі: 12 Курс складається з двох модулів: 1
            Модуль. Правила перебування в майстерні, робота з інструментом. 2
            Модуль. Перша медична допомога при пораненнях. Навчимо правильно й
            безпечно для здоров’я працювати з ручними інструментами, розуміти
            їхньої будови, способів роботи та призначення. Також покажемо першу
            медичну допомогу в разі поранення. Підходить для будь-якого віку,
            адже треба всім)
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger icon={MakerSpaceIcon}>
            Курс «Змайструй МРІЮ»
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base">
            Вік учнів: 9-17 років. Тривалість курсу: 4 години Тривалість
            заняття: 1,5 години, 1 раз на тиждень Вартість: 699 гривень
            *Обов’язкове проходження медичного модулю курсу «Безпечний майстер»
            На цьому курсі ми створимо прототип літака «Мрія». Короткий курс на
            якому ти зможеш спробувати себе у сфері мейкерства та зрозуміти чи
            це твоя двіжуха.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger icon={MakerSpaceIcon}>
            Курс «Мейкер Junior»
          </AccordionTrigger>
          <AccordionContent className="text-[18px] font-base">
            Вік учнів: 9+ років Тривалість курсу: 24 години (4 місяці)
            Тривалість заняття: 90 хвилин, 1 раз на тиждень Вартість: 1 000
            гривень/місяць. Якщо оплачувати відразу за 4 місяці то буде 3 899
            грн. Кількість учнів у групі: 8 Освоїмо правильну та безпечну роботу
            з ручними інструментами. Поєднання ручних та електроінструментів для
            виготовлення першого проєкту. Ти навчишся: Розрізняти різні породи
            деревини, розуміти їх властивості, ознайомишся з видами сировини для
            виробів (дерево, фанера тощо). Правильно розмічати та розкроювати
            фанеру. З’єднувати деталі з фанери за допомогою різних способів
            (шипове з’єднання, клей тощо). Працювати з основними
            електрифікованими інструментами (лобзик, дриль, шліфувальна
            машинка). Використовувати інструменти для створення виробів. Основам
            фінішної обробки виробу (шліфування, фарбування, лакування). Основам
            ремонту та реставрації дерев’яних виробів. Основам моделювання
            виробів. Створиш та презентуєш готовий виріб.
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
    </div>
  );
};

export default CoursesMakerSpace;
