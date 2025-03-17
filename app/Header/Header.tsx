"use client";

import React from "react";
import Image from "next/image";
import svg_devjam from "../assets/devjam.svg";
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
      e.currentTarget.href.split("#")[1],
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="h-16 w-full fixed top-0 bg-white/40 backdrop-blur-lg z-50 overflow-hidden px-4 md:px-12 flex items-center justify-between">
      <Link href="/">
        <Image src={svg_devjam.src} alt="DevJam" width={158} height={61} />
      </Link>

      <ul className="flex gap-4 list-none justify-between">
        {menus.map((menu) => (
          <li
            key={menu.value}
            data-to-scrollspy-id={menu.value}
            className="border-b-[#4c4c4c] transition-all duration-100"
          >
            <a
              className="text-2xl"
              href={`#${menu.value}`}
              onClick={(e) => onPress(e)}
            >
              <div className="hidden md:block">{menu.label}</div>
              <div className="md:hidden">{menu.mobileLabel}</div>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
