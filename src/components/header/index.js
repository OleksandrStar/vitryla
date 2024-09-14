"use client"; // Ensure this is a Client Component

import React, { useState } from "react";
import LogoImg from "../../assets/logo.svg";
import Image from "next/image";

const Header = () => {
  const [activeAnchor, setActiveAnchor] = useState(null);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 84; // 84px offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update the state with the current active anchor
      setActiveAnchor(targetId);
    }
  };

  return (
    <div className="bg-white w-full flex justify-center items-center fixed top-0 left-0 z-[100000] h-[84px]">
      <div className="w-full max-w-[1360px] p-4 flex justify-between items-center">
        <Image src={LogoImg} alt="logo" width={170} height={80} className="h-auto" />
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
            href="#events"
            onClick={(e) => handleScroll(e, "events")}
            className={`nav-link ${activeAnchor === "events" ? "active" : ""}`}
          >
            Події
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
          <a
            href="#additionalIdeas"
            onClick={(e) => handleScroll(e, "additionalIdeas")}
            className={`nav-link ${activeAnchor === "additionalIdeas" ? "active" : ""}`}
          >
            Додаткові ідеї
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
