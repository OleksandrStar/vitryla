import Map from "@/components/map/map";
import Image from "next/image";
import AddressLogo from "../../../../public/images/address.svg";
import InstLogo from "../../../../public/images/instagramBlue.svg";
import TelegramLogo from "../../../../public/images/telegramBlue.svg";
import LinkedinLogo from "../../../../public/images/linkedinBlue.svg";
import PhoneLogo from "../../../../public/images/phone.svg";
import MailLogo from "../../../../public/images/mail.svg";
import FacebookLogo from "../../../../public/images/facebookBlue.svg";

export default function Contacts() {
  return (
    <div className="my-12 w-full flex justify-center" id="contacts">
      <div className="w-full relative flex justify-center items-center flex-col gap-6 max-w-[1280px] p-4">
        <span className="font-bold text-[36px] md:text-[48px] text-center">
          Контакти
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center gap-6">
          <div className="flex flex-col gap-6 ">
            <span className=" text-[16px] md:text-[18px] text-center md:text-start ">
              Ось усі наші контакти. Пиши всюди чи тільки дзвони, надсилай
              листа, поштового голуба або прибігай сам. Завжди надамо відповідь
              швидко.{" "}
            </span>
            <div className="flex flex-col gap-4">
              <div className="flex items-center lg:items-start gap-2 justify-start justify-center md:justify-start">
                <Image src={AddressLogo} width={36} height={36} alt="address" />
                <span className="text-black font-bold text-center  md:text-start max-w-[300px]">
                  Вул. Кауркова 4А, приміщення Нововолинського ліцею №8
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Image src={PhoneLogo} width={36} height={36} alt="address" />
                <a
                  href="tel:+380973633297"
                  target="_blank"
                  className="text-black font-bold"
                >
                  +380 (97) 363 32 97
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Image src={MailLogo} width={36} height={36} alt="address" />
                <a
                  href="mailto:ngo.vitryla@gmail.com"
                  target="_blank"
                  className="text-black font-bold"
                >
                  ngo.vitryla@gmail.com
                </a>
              </div>
              <div className="flex gap-4 items-center justify-center md:justify-start">
                <a
                  target="_blank"
                  href="https://www.instagram.com/vitryla_?igsh=MW9vN2FnbWtob2hweg=="
                >
                  <Image
                    src={InstLogo}
                    alt="instagram"
                    width={36}
                    height={36}
                  />
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
          <div className="rounded">
            <Map center={[24.179556, 50.724611]} />
          </div>
        </div>
      </div>
    </div>
  );
}
