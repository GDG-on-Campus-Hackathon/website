"use client";

import React from "react";
import Image from "next/image";
import svg_devjam from "@/assets/devjam.svg";
import Link from "next/link";

export const Header: React.FC = () => {
  const menus = [
    { label: "黑客松介紹", value: "home-introduction", mobileLabel: "介紹" },
    { label: "活動資訊", value: "home-information", mobileLabel: "資訊" },
    { label: "報名資訊", value: "home-sign-up", mobileLabel: "報名" },
  ];

  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full fixed top-0 bg-white/40 backdrop-blur-lg z-50 overflow-hidden px-4">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={svg_devjam.src}
              alt="DevJam"
              width={158}
              height={61}
              className="md:w-[158px] md:h-[61px] w-[105px] h-[40px]"
            />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4 list-none justify-between">
            {menus.map((menu, index) => (
              <li
                key={index} data-to-scrollspy-id={menu.value}
                className="border-b-0 m-[0.25rem] border-b-[#4c4c4c] transition-all duration-300"
              >
                <a href={`#${menu.value}`} onClick={(e) => onPress(e)}>
                  <span className="hidden md:block text-[1.5rem] p-[1rem]">
                    {menu.label}
                  </span>
                  <span className="block md:hidden text-[1rem] p-[0.2rem]">
                    {menu.mobileLabel}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
