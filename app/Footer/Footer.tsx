import React from "react";
import Image from "next/image";
import svg_devjam_tw_2025 from "./assets/devjam_tw_2025.svg";
import svg_icon_instagram from "./assets/icon_instagram.svg";
import svg_icon_facebook from "./assets/icon_facebook.svg";
import svg_icon_email from "./assets/icon_email.svg";
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
        {
          icon: svg_icon_instagram,
          label: "@gdg.nthu",
          url: "https://www.instagram.com/gdsc.nthu/",
        },
        {
          icon: svg_icon_instagram,
          label: "@gdg.ntust",
          url: "https://www.instagram.com/gdg.ntust/",
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

  return (
    <footer
      className="w-full p-6 flex flex-col items-center bg-cover bg-center bg-no-repeat shadow-[inset_0px_4px_24px_0px_rgba(0,0,0,0.25)]"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <Image
          src={svg_devjam_tw_2025}
          alt="Google Developer Groups on Campus 2025 Hackathon"
        />
        <div className="self-stretch not-md:border-b-2 md:border-r-2 border-black"></div>
        <div className="flex flex-col items-center md:items-start gap-6 md:p-4">
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
                  <Image src={child.icon} alt={child.label} />
                  {child.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="text-[11px] tracking-wide">© 2025 DevJam TW 2025</p>
    </footer>
  );
};
