import React from "react";
import Image from "next/image";
import AddressLogo from "@/assets/images/address.svg";
import InstLogo from "@/assets/images/instagram.svg";
import TelegramLogo from "@/assets/images/telegram.svg";
import LinkedinLogo from "@/assets/images/linkedin.svg";
import AllRightsLogo from "@/assets/images/all_rights_reserved.png";
import SupportLogo from "@/assets/images/support.svg";
import InfoLogo from "@/assets/images/info.svg";
import PhoneLogo from "@/assets/images/phone.svg";
import MailLogo from "@/assets/images/mail.svg";
import FacebookLogo from "@/assets/images/facebook.svg";

const Footer = () => {
  return (
    <div className="p-8 w-full bg-[#003566] grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 relative">
      <Image
        src={InfoLogo}
        width={62}
        height={62}
        alt="info"
        className="absolute left-[25%]
            top-[35%] hidden lg:flex"
      />
      <Image
        src={SupportLogo}
        width={82}
        height={82}
        alt="support"
        className="absolute right-[25%]
            top-[-35px] hidden lg:flex"
      />
      <div className="flex flex-col gap-4 max-w-[400px] items-center md:items-start">
        <div className="flex items-center lg:items-start gap-2 justify-center">
          <Image
            src={AddressLogo}
            width={24}
            height={24}
            alt="address"
            className="hidden md:flex"
          />
          <span className="text-white font-bold text-center  md:text-start">
            Вул. Кауркова 4А, приміщення Нововолинського ліцею №8
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src={PhoneLogo}
            width={24}
            height={24}
            alt="address"
            className="hidden md:flex"
          />
          <a
            href="tel:+380973633297"
            target="_blank"
            className="text-white font-bold"
          >
            +380 (97) 363 32 97
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src={MailLogo}
            width={24}
            height={24}
            alt="address"
            className="hidden md:flex"
          />
          <a
            href="mailto:ngo.vitryla@gmail.com"
            target="_blank"
            className="text-white font-bold"
          >
            ngo.vitryla@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 item  items-center">
        <a
          href="tel:+380973633297"
          target="_blank"
          className="text-white font-bold"
        >
          Зателефонуйте нам
        </a>
        <span className="text-white font-bold cursor-pointer">
          Часті питання
        </span>
        <span className="text-white font-bold cursor-pointer">
          Юридична інформація
        </span>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-end">
        <div className="flex flex-col gap-6 items-center ">
          <div className="flex gap-4 items-center">
            <a
              target="_blank"
              href="https://www.instagram.com/vitryla_?igsh=MW9vN2FnbWtob2hweg=="
            >
              <Image src={InstLogo} alt="instagram" width={36} height={36} />
            </a>
            <a target="_blank" href="https://t.me/vitryla">
              <Image src={TelegramLogo} alt="telegram" width={36} height={36} />
            </a>
            <a
              target="_blank"
              href="https://linktr.ee/vitryla?utm_source=linktree_profile_share&ltsid=f6d3a859-6fcf-4794-8104-32a51c65e2d7"
            >
              <Image src={LinkedinLogo} alt="linkedin" width={36} height={36} />
            </a>
            <a target="_blank" href="https://www.facebook.com/vitrylaa">
              <Image src={FacebookLogo} alt="facebook" width={36} height={36} />
            </a>
          </div>
          <Image
            src={AllRightsLogo}
            alt="all rights reserved"
            width={80}
            height={80}
            className="rounded h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
