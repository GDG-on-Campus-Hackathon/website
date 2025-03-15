import React from "react";
import Image from "next/image";
import svg_devjam from "@/assets/devjam.svg";

export const Header: React.FC = () => {
  const menus = [
    { label: "黑客松介紹", value: "home-introduction", mobileLabel: "介紹" },
    { label: "活動資訊", value: "home-information", mobileLabel: "資訊" },
    { label: "報名資訊", value: "home-sign-up", mobileLabel: "報名" },
  ];
  {/* label: "成果展現", value: "home-achievements", mobileLabel: "成果" }*/}

  return (
    <div className="w-full fixed top-0 bg-white/40 backdrop-blur-lg z-50 overflow-hidden px-4">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src={svg_devjam.src} alt={"DevJam"} width={158} height={61} />
        </div>
        <div>
          <ul className="flex space-x-4 list-none justify-between">
            {menus.map((menu, index) => (
              <li key={index} className="border-b-[5px] border-gray-300 m-[0.25rem] border-b-[#4c4c4c]">
                <a
                  href={`#${menu.value}`}
                >
                  <span className="hidden md:block text-[1.5rem] p-[1rem]">{menu.label}</span>   
                  <span className="block md:hidden text-[1rem] p-[0.2rem]">{menu.mobileLabel}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};