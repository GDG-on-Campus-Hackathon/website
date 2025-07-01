"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import svg_devjam_tw_2025 from "../assets/devjam_tw_2025.svg";

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const menus = [
    { label: "黑客松介紹", value: "home-introduction" },
    { label: "活動資訊", value: "home-information" },
    { label: "報名資訊", value: "home-sign-up" },
    { label: "成果展現", value: "home-achievements" },
  ];

  // it will be called when the component reach the viewport in 50%
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    menus.forEach((menu) => {
      const section = document.getElementById(menu.value);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  });

  return (
    <header className="h-16 w-full fixed top-0 bg-white/40 backdrop-blur-lg z-50 overflow-hidden px-4 md:px-12 flex items-center justify-between">
      <Link href="/">
        <Image
          src={svg_devjam_tw_2025.src}
          alt="DevJam TW 2025"
          width={170}
          height={19}
        />
      </Link>

      {/* desktop: menubar */}
      <ul className="hidden md:flex gap-9 list-none justify-between">
        {menus.map((menu) => (
          <NavItem
            href={`#${menu.value}`}
            isActive={activeSection === menu.value}
            key={menu.value}
          >
            {menu.label}
          </NavItem>
        ))}
      </ul>

      {/* mobile: menubar */}
      {/* todo: waiting for designing */}
    </header>
  );
};
