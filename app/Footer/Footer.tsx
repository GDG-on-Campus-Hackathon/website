import React from "react";
import Image from "next/image";
import svg_devjam_tw_2026 from "../assets/devjam_tw_2026.svg";
import svg_icon_instagram from "./assets/icon_instagram.svg";
import svg_icon_facebook from "./assets/icon_facebook.svg";
import svg_icon_email from "./assets/icon_email.svg";
import svg_icon_proposal from "./assets/icon_proposal.svg";
import backgroundImage from "./assets/background.webp";

export const Footer: React.FC = () => {
  const links = [
    {
      title: "主辦單位",
      children: [
        {
          icon: svg_icon_instagram,
          label: "@gdg.nccu",
          url: "https://www.instagram.com/gdg.nccu/",
        },
      ],
    },
    {
      title: "關於我們",
      children: [
        {
          icon: svg_icon_proposal,
          label: "企劃書",
          url: "https://drive.google.com/file/d/1zesMQe4VB2Zvi6tJke9TzakT9zmpWppm/view?usp=sharing",
        },
      ],
    },
    {
      title: "更多資訊",
      children: [
        {
          icon: svg_icon_facebook,
          label: "/devjam.tw",
          url: "https://facebook.com/devjam.tw",
        },
        {
          icon: svg_icon_instagram,
          label: "@devjam.tw",
          url: "https://www.instagram.com/devjam.tw/",
        },
      ],
    },
    {
      title: "聯絡我們",
      children: [
        {
          icon: svg_icon_email,
          label: "devjamtw@gmail.com",
          url: "mailto:devjamtw@gmail.com",
        },
      ],
    },
  ];

  const years = [{ label: "2025", url: "/2025" }];

  return (
    <footer
      className="w-full p-6 flex flex-col items-center bg-cover bg-center bg-no-repeat shadow-[inset_0px_4px_24px_0px_rgba(0,0,0,0.25)]"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <Image
          src={svg_devjam_tw_2026.src}
          alt="Google Developer Groups on Campus 2026 Hackathon"
          width={170}
          height={19}
        />
        <div className="self-stretch not-md:border-b-2 md:border-r-2 border-black"></div>
        <div className="flex flex-col gap-6 md:p-4">
            {links.map((link) => (
            <div key={link.title} className="flex items-center gap-4">
              <div className="font-bold text-xs tracking-[0.2em] mr-2">
                {link.title}
              </div>
              {link.children.map((child) => (
                <a
                  key={child.label}
                  href={child.url}
                  className="text-[11px] tracking-widest flex flex-col sm:flex-row items-center gap-2"
                >
                  <Image
                    src={child.icon}
                    alt={child.label}
                    width={child.label === "企劃書" ? 17 : 14}
                    height={child.label === "企劃書" ? 17 : 14}
                  />
                  {child.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="self-stretch not-md:border-b-2 md:border-r-2 border-black"></div>
        <div className="flex flex-col items-center md:items-start gap-4 md:self-start md:p-4">
          <div className="font-bold text-xs tracking-[0.2em]">歷年網站</div>
          <div className="grid grid-cols-3 gap-x-6 gap-y-3">
            {years.map((year) => (
              <a
                key={year.label}
                href={year.url}
                className="text-[11px] tracking-widest"
              >
                {year.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[11px] tracking-wide">© 2026 DevJam TW 2026</p>
    </footer>
  );
};
