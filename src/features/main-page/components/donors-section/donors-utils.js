import React from "react";
import Image from "next/image";
import UnicefLogo from "../../../../public/donors/UNICEF_Logo.png";
import JeunesseLogo from "../../../../public/donors/COE-logo-and-Youth-Jeunesse-Quadri.png";
import Pramuemo from "../../../../public/donors/Pramuemo.png";
import Unfpa from "../../../../public/donors/unfpa.png";
import EdnannyaLogo from "../../../../public/donors/ednannia.png";

export const donorsList = [
  {
    title: "Tolocar",
    link: "https://tolocar.org/ua/",
    logo: (
      <svg
        viewBox="0 0 114 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={100}
      >
        <path
          d="M10.7542 7.69653H0V22.3522H2.00324V61.5745H8.751V22.3522H10.7542V7.69653Z"
          fill="#009664"
        ></path>
        <path
          d="M28.6779 13.6009C28.6779 11.2813 27.4127 10.0161 25.0931 10.0161H16.553C14.2335 10.0161 12.9683 11.2813 12.9683 13.6009V60.3092C12.9683 62.6288 14.2335 63.8941 16.553 63.8941H25.0931C27.4127 63.8941 28.6779 62.6288 28.6779 60.3092V13.6009ZM21.8247 49.2384H19.716V24.7772H21.8247V49.2384Z"
          fill="#009664"
        ></path>
        <path
          d="M30.7864 5.6936V59.5715H41.3298V44.9159H37.6396V5.6936H30.7864Z"
          fill="#009664"
        ></path>
        <path
          d="M59.2538 3.58484C59.2538 1.26524 57.9886 0 55.6691 0H47.1289C44.8094 0 43.5442 1.26524 43.5442 3.58484V50.2931C43.5442 52.6127 44.8094 53.8779 47.1289 53.8779H55.6691C57.9886 53.8779 59.2538 52.6127 59.2538 50.2931V3.58484ZM52.5061 39.2223H50.292V14.7611H52.5061V39.2223Z"
          fill="#009664"
        ></path>
        <path
          d="M77.1776 37.1136H70.4299V44.9159H68.2158V20.4547H70.4299V27.9406H77.1776V9.27845C77.1776 6.95885 75.9124 5.6936 73.5929 5.6936H65.0528C62.7332 5.6936 61.468 6.95885 61.468 9.27845V55.9867C61.468 58.3063 62.7332 59.5715 65.0528 59.5715H73.5929C75.9124 59.5715 77.1776 58.3063 77.1776 55.9867V37.1136Z"
          fill="#009664"
        ></path>
        <path
          d="M83.5035 64C85.8231 64 87.4046 62.7348 87.7209 62.1021L88.248 61.1532V64H94.9958V13.7069C94.9958 11.3873 93.7306 10.1221 91.411 10.1221H82.9764C80.6568 10.1221 79.3916 11.3873 79.3916 13.7069V27.4136H86.1394V24.8831H88.3535V29.3115H84.347C81.0785 29.3115 79.3916 30.9984 79.3916 34.267V59.0445C79.3916 61.2587 80.1296 64 83.5035 64ZM86.1394 44.7052H88.3535V49.2389H86.1394V44.7052Z"
          fill="#009664"
        ></path>
        <path
          d="M113.236 59.5715V35.2157C113.236 33.7396 112.603 33.107 111.232 33.0016H110.916V32.2635H111.232C112.603 32.1581 113.341 31.42 113.341 30.0494V9.27845C113.341 6.95885 112.076 5.6936 109.651 5.6936H97.2097V59.5715H103.957V40.2767H106.172V59.5715H113.236ZM104.063 24.883V20.4547H106.488V24.883H104.063Z"
          fill="#009664"
        ></path>
      </svg>
    ),
  },
  {
    title: "Unicef",
    link: "https://www.unicef.org/ukraine/",
    logo: (
      <Image src={UnicefLogo} alt={"unicef_ukraine"} height={200} width={200} />
    ),
  },
  {
    title: "ІСАР",
    link: "https://ednannia.ua/",
    logo: (
      <Image src={EdnannyaLogo} alt={"ednannya"} height={200} width={250} />
    ),
  },
  {
    title: "Council of Europe",
    link: "https://www.coe.int/uk/web/kyiv",
    logo: <Image src={JeunesseLogo} alt={"Council"} height={200} width={200} />,
  },
  {
    title: "EEAS",
    link: "https://www.eeas.europa.eu/node/41139_uk",
    logo: <Image src={Pramuemo} alt={"Pramuemo"} height={150} width={150} />,
  },
  {
    title: "UNFPA",
    link: "https://ukraine.unfpa.org/uk",
    logo: <Image src={Unfpa} alt={"unfpa"} height={200} width={200} />,
  },
];
