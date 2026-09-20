import type { StaticImageData } from "next/image";
import HL1 from "../assets/HL1.jpg";
import HL2 from "../assets/HL2.jpg";
import HL3 from "../assets/HL3.jpg";
import HL4 from "../assets/HL4.jpg";
import HL5 from "../assets/HL5.jpg";
import HL6 from "../assets/HL6.jpg";
import HL7 from "../assets/HL7.jpg";
import HL8 from "../assets/HL8.jpg";
import HL9 from "../assets/HL9.jpg";
import HL10 from "../assets/HL10.jpg";

export interface ImageItem {
  id: number;
  src: StaticImageData;
  alt: string;
}

export const images: ImageItem[] = [
  { id: 1, src: HL1, alt: "五位參賽者圍著筆電討論，一起開懷大笑" },
  { id: 2, src: HL2, alt: "參賽者拿著麥克風向評審說明作品" },
  { id: 3, src: HL3, alt: "導師彎身與兩位參賽者一起看筆電上的專案" },
  { id: 4, src: HL4, alt: "導師在座位旁向參賽者講解開發細節" },
  { id: 5, src: HL5, alt: "四位組員站在投影幕前輪流簡報" },
  { id: 6, src: HL6, alt: "參賽者站在講台前拿著麥克風發表" },
  { id: 7, src: HL7, alt: "兩位參賽者在筆電前相視而笑" },
  { id: 8, src: HL8, alt: "兩位參賽者並肩在筆電前專注開發" },
  { id: 9, src: HL9, alt: "四位組員站在螢幕前接受提問" },
  { id: 10, src: HL10, alt: "簡報者在投影幕旁講解使用情境與需求" },
];
