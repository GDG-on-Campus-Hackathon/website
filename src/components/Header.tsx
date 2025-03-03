import React from "react"
import Image from "next/image"
import svg_devjam from "@/assets/devjam.svg"

export const Header: React.FC = () => {
  const menus = [
    {label: "黑客松介紹", value: "introduction"},
    {label: "活動資訊", value: "information"},
    {label: "報名資訊", value: "signup"},
    {label: "成果展現", value: "achievements"},
  ]
  return (
    <div className="w-full fixed top-0 bg-white/10 backdrop-blur-lg z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={svg_devjam.src} alt={"DevJam"} width={158} height={61}/>
        </div>
        <div>
          <ul className="flex space-x-4 list-none">
            {menus.map((menu, index) => (
              <li key={index}>
                <a href={`#${menu.value}`}
                   className="text-[20px] font-bold p-[16px] border-b-[5px] border-b-[#4C4C4C]">{menu.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
