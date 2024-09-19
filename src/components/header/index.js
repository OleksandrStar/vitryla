"use client"; // Ensure this is a Client Component

import React, { useState } from "react";
import LogoImg from "../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import HamburgerLogo from "@/assets/images/hamburger.svg";
import CloseIcon from "@/assets/images/close.svg";

const Header = () => {
  const [activeAnchor, setActiveAnchor] = useState(null);
  const [showHamburger, setShowHamburger] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 84; // 84px offset

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
        <Link href="/">
          <Image
            src={LogoImg}
            alt="logo"
            width={170}
            height={80}
            className="h-auto cursor-pointer"
          />
        </Link>
        <div className="items-center gap-6 text-black md:text-sm xl:text-md hidden lg:flex">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className={`nav-link ${activeAnchor === "about" ? "active" : ""}`}
          >
            Про нас
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className={`nav-link ${activeAnchor === "projects" ? "active" : ""}`}
          >
            Проєкти
          </a>
          <a
            href="#partners"
            onClick={(e) => handleScroll(e, "partners")}
            className={`nav-link ${activeAnchor === "partners" ? "active" : ""}`}
          >
            Партнери та донори
          </a>
          <a
            href="#opportunities"
            onClick={(e) => handleScroll(e, "opportunities")}
            className={`nav-link ${activeAnchor === "opportunities" ? "active" : ""}`}
          >
            Можливості
          </a>
          <a
            href="#contacts"
            onClick={(e) => handleScroll(e, "contacts")}
            className={`nav-link ${activeAnchor === "contacts" ? "active" : ""}`}
          >
            Контакти
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
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className={`nav-link ${activeAnchor === "about" ? "active" : ""}`}
            >
              Про нас
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className={`nav-link ${activeAnchor === "projects" ? "active" : ""}`}
            >
              Проєкти
            </a>
            <a
              href="#partners"
              onClick={(e) => handleScroll(e, "partners")}
              className={`nav-link ${activeAnchor === "partners" ? "active" : ""}`}
            >
              Партнери та донори
            </a>
            <a
              href="#opportunities"
              onClick={(e) => handleScroll(e, "opportunities")}
              className={`nav-link ${activeAnchor === "opportunities" ? "active" : ""}`}
            >
              Можливості
            </a>
            <a
              href="#contacts"
              onClick={(e) => handleScroll(e, "contacts")}
              className={`nav-link ${activeAnchor === "contacts" ? "active" : ""}`}
            >
              Контакти
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
