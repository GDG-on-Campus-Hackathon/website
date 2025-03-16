import React from "react";
import Image from "next/image";
import svg_text_devjam from "./assets/text_devjam.svg";
import svg_text_hackathon from "./assets/text_hackathon.svg";
import svg_text_tw from "./assets/text_tw.svg";
import svg_text_2025 from "./assets/text_2025.svg";
import svg_icon_instagram from "../assets/icon_instagram.svg";
import svg_icon_facebook from "../assets/icon_facebook.svg";
import svg_icon_email from "../assets/icon_email.svg";
import backgroundImage from "./assets/background.png";

export const Footer: React.FC = () => {
  const links = [
    {
      title: "主辦單位",
      children: [
        {
          icon: svg_icon_instagram,
          label: "gdg.nccu",
          url: "https://www.instagram.com/gdg.nccu/",
        },
        {
          icon: svg_icon_instagram,
          label: "gdg.nthu",
          url: "https://www.instagram.com/gdsc.nthu/",
        },
        {
          icon: svg_icon_instagram,
          label: "gdg.ntust",
          url: "https://www.instagram.com/gdg.ntust/",
        },
      ],
    },
    {
      title: "更多資訊",
      children: [
        {
          icon: svg_icon_facebook,
          label: "https://facebook.com/devjam.tw",
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
      className="w-full bg-cover bg-center bg-no-repeat pt-[72px] pb-[16px]"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="max-w-[1440px] w-full mx-auto flex flex-col  justify-center items-center">
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div className="text-center flex flex-col justify-center items-center space-y-4">
            <Image
              src={svg_text_devjam.src}
              alt={"DevJam"}
              width={373}
              height={75}
            />
            <Image
              src={svg_text_hackathon.src}
              alt={"Google Developer Groups on Campus • 2025 Hackathon"}
              width={289}
              height={12}
            />
            <div className="flex space-x-4">
              <Image src={svg_text_tw.src} alt={"TW"} width={66} height={69} />
              <Image
                src={svg_text_2025.src}
                alt={"2025"}
                width={114}
                height={69}
              />
            </div>
          </div>
          <div className="space-y-[32px] p-5">
            {links.map((link, index) => (
              <div key={index} className="space-x-4 md:flex-col">
                <div className="text-[#4C4C4C] text-[1rem] font-bold no-wrap">
                  {link.title}
                </div>
                <div className="flex space-x-4 flex-wrap md:no-wrap">
                  {link.children.map((child, index) => (
                    <a
                      key={index}
                      href={child.url}
                      className="flex items-center space-x-2"
                    >
                      <Image
                        src={child.icon.src}
                        alt={child.label}
                        width={24}
                        height={24}
                      />
                      <div className="text-[#4C4C4C] text-[16px]">
                        {child.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[#4C4C4C] text-[12px]/[44px] mt-[32px]">
          © 2025 DevJam TW 2025
        </div>
      </div>
    </footer>
  );
};
