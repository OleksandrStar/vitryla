import React from "react";
import Image from "next/image";
import AddressLogo from "../../../../public/images/address.svg";
import InstLogo from "../../../../public/images/instagram.svg";
import TelegramLogo from "../../../../public/images/telegram.svg";
import LinkedinLogo from "../../../../public/images/linkedin.svg";
import SupportLogo from "../../../../public/images/support.svg";
import InfoLogo from "../../../../public/images/info.svg";
import PhoneLogo from "../../../../public/images/phone.svg";
import MailLogo from "../../../../public/images/mail.svg";
import FacebookLogo from "../../../../public/images/facebook.svg";

const MakerSpaceFooter = () => {
  return (
    <div className="w-full bg-[#003566] flex flex-col gap-4 items-center">
      <div className="p-8 w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 relative">
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
              href="mailto:vitryla.maker.space@gmail.com"
              target="_blank"
              className="text-white font-bold"
            >
              vitryla.maker.space@gmail.com
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
          <a
            href="#questions-MakerSpace"
            className="text-white font-bold cursor-pointer"
          >
            Часті питання
          </a>
          <a
            className="text-white font-bold cursor-pointer"
            href="https://drive.google.com/drive/folders/1yhBI-Q66dxSkE32Lpuj0Ih8LMbN-d9q9?usp=sharing"
          >
            Юридична інформація
          </a>
        </div>
        <div className="flex flex-col gap-4 items-center md:items-end">
          <div className="flex flex-col gap-6 items-center ">
            <div className="flex gap-4 items-center">
              <a
                target="_blank"
                href="https://www.instagram.com/vitryla_mspace?igsh=enEzZHh5eTdsZmUy"
              >
                <Image src={InstLogo} alt="instagram" width={36} height={36} />
              </a>
              <a target="_blank" href="https://t.me/vitryla">
                <Image
                  src={TelegramLogo}
                  alt="telegram"
                  width={36}
                  height={36}
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/vitryla/"
              >
                <Image
                  src={LinkedinLogo}
                  alt="linkedin"
                  width={36}
                  height={36}
                />
              </a>
              <a target="_blank" href="https://www.facebook.com/ngo.vitryla">
                <Image
                  src={FacebookLogo}
                  alt="facebook"
                  width={36}
                  height={36}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgba(255,255,255,0.5)] text-white py-2 text-[12px] px-8">
        @ All rights reserved
      </div>
    </div>
  );
};

export default MakerSpaceFooter;
