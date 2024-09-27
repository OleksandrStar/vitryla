"use client";

import React, { useState } from "react";
import LogoImg from "../../../../assets/images/MakingSpace.svg";
import Image from "next/image";
import Link from "next/link";
import HamburgerLogo from "@/assets/images/hamburger.svg";
import CloseIcon from "@/assets/images/close.svg";

const MakerSpaceHeader = () => {
  const [activeAnchor, setActiveAnchor] = useState(null);
  const [showHamburger, setShowHamburger] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 84;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setShowHamburger(false);
      setActiveAnchor(targetId);
    }
  };

  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
  };

  return (
    <div className="bg-white w-full flex justify-center items-center fixed top-0 left-0 z-[100000] h-[84px]">
      <div className="w-full max-w-[1360px] p-4 flex justify-between items-center">
        <Link href="/maker-space">
          <Image
            src={LogoImg}
            alt="logo"
            width={200}
            className="cursor-pointer h-[84px]"
          />
        </Link>
        <div className="items-center gap-4 text-black md:text-sm xl:text-[17px] hidden lg:flex">
          <a
            href="#aboutProject-MakerSpace"
            onClick={(e) => handleScroll(e, "aboutProject-MakerSpace")}
            className={`nav-link ${activeAnchor === "aboutProject-MakerSpace" ? "active" : ""}`}
          >
            Про проєкт
          </a>
          <a
            href="#residency-MakerSpace"
            onClick={(e) => handleScroll(e, "residency-MakerSpace")}
            className={`nav-link ${activeAnchor === "residency-MakerSpace" ? "active" : ""}`}
          >
            Резидентство
          </a>
          <a
            href="#equipment-MakerSpace"
            onClick={(e) => handleScroll(e, "equipment-MakerSpace")}
            className={`nav-link ${activeAnchor === "equipment-MakerSpace" ? "active" : ""}`}
          >
            Oбладнання
          </a>
          <a
            href="#makersCommunity-MakerSpace"
            onClick={(e) => handleScroll(e, "makersCommunity-MakerSpace")}
            className={`nav-link ${activeAnchor === "makersCommunity-MakerSpace" ? "active" : ""}`}
          >
            Наша спільнота
          </a>
          <a
            href="#courses-MakerSpace"
            onClick={(e) => handleScroll(e, "courses-MakerSpace")}
            className={`nav-link ${activeAnchor === "courses-MakerSpace" ? "active" : ""}`}
          >
            Курси
          </a>
          <a
            href="#questions-MakerSpace"
            onClick={(e) => handleScroll(e, "questions-MakerSpace")}
            className={`nav-link ${activeAnchor === "questions-MakerSpace" ? "active" : ""}`}
          >
            Часті запитання
          </a>
          <a
            href="#contacts-MakerSpace"
            onClick={(e) => handleScroll(e, "contacts-MakerSpace")}
            className={`nav-link ${activeAnchor === "contacts-MakerSpace" ? "active" : ""}`}
          >
            Наші контакти
          </a>
        </div>
        <div className="flex lg:hidden" onClick={toggleHamburger}>
          <Image src={HamburgerLogo} alt="hamburger" width={32} height={32} />
        </div>
        <div className={`hamburger-menu ${showHamburger ? "active" : ""}`}>
          <Image
            src={CloseIcon}
            width={32}
            height={32}
            alt="close"
            onClick={toggleHamburger}
          />
          <div className="items-center gap-4 text-black md:text-sm xl:text-md flex flex-col mt-4">
            <a
              href="#aboutProject-MakerSpace"
              onClick={(e) => handleScroll(e, "aboutProject-MakerSpace")}
              className={`nav-link ${activeAnchor === "aboutProject-MakerSpace" ? "active" : ""}`}
            >
              Про проєкт
            </a>
            <a
              href="#residency-MakerSpace"
              onClick={(e) => handleScroll(e, "residency-MakerSpace")}
              className={`nav-link ${activeAnchor === "residency-MakerSpace" ? "active" : ""}`}
            >
              Резидентство
            </a>
            <a
              href="#equipment-MakerSpace"
              onClick={(e) => handleScroll(e, "equipment-MakerSpace")}
              className={`nav-link ${activeAnchor === "equipment-MakerSpace" ? "active" : ""}`}
            >
              Oбладнання
            </a>
            <a
              href="#makersCommunity-MakerSpace"
              onClick={(e) => handleScroll(e, "makersCommunity-MakerSpace")}
              className={`nav-link ${activeAnchor === "makersCommunity-MakerSpace" ? "active" : ""}`}
            >
              Наша спільнота
            </a>
            <a
              href="#courses-MakerSpace"
              onClick={(e) => handleScroll(e, "courses-MakerSpace")}
              className={`nav-link ${activeAnchor === "courses-MakerSpace" ? "active" : ""}`}
            >
              Курси
            </a>
            <a
              href="#questions-MakerSpace"
              onClick={(e) => handleScroll(e, "questions-MakerSpace")}
              className={`nav-link ${activeAnchor === "questions-MakerSpace" ? "active" : ""}`}
            >
              Часті запитання
            </a>
            <a
              href="#contacts-MakerSpace"
              onClick={(e) => handleScroll(e, "contacts-MakerSpace")}
              className={`nav-link ${activeAnchor === "contacts-MakerSpace" ? "active" : ""}`}
            >
              Наші контакти
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakerSpaceHeader;
