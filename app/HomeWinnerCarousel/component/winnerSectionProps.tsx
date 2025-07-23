import { StaticImageData } from "next/image";
import winnerImg1 from "../asset/winner1.svg";
import winnerImg2 from "../asset/winner2.svg";
import winnerImg3 from "../asset/winner3.svg";

export interface winnerSectionProps {
  id: number;
  img: StaticImageData;
  alt: string;
  route: string;
  groupNumber: string;
  groupMember: string;
  title: string;
  content: string;
}

export const winnerSectionList: winnerSectionProps[] = [
  {
    id: 1,
    img: winnerImg1,
    alt: "Winner 1",
    route: "Google Cloud 賽道",
    groupNumber: "二",
    groupMember: "陳若瑛、黃乙家、陳昕宏、林雨臻",
    title: "Solarlytics: 陽光下的智慧決策",
    content:
      "Solarlytics: 陽光下的智慧決策是一個自助試算太陽能評估平台，專為解決民眾在安裝屋頂太陽能時遇到的資訊不透明、難以評估與決策門檻高等問題。平台結合 Google Cloud 技術，整合日照、地點、品牌、效率、成本等多元參數，讓使用者能夠快速評估自家安裝太陽能的適配性、投資回收期與效益，並提供多品牌比較與個人化方案建議，協助用戶做出最佳決策。",
  },

  {
    id: 2,
    img: winnerImg2,
    alt: "Winner 2",
    route: "Gemini API 賽道",
    groupNumber: "一",
    groupMember: "杜凱朗、王瀚、廖梓雲、蘇郁凱",
    title: "申寶 SAMBOU",
    content:
      "申寶 SAMBOU 是一個專為留學申請打造的一站式自助平台，致力於推動教育平權，讓每位學生都能用得起、用得懂、用得安心的申請工具。申寶認為，申請留學不該等於高額顧問費，也不該是少數人的特權。透過科技自動化與流程標準化，申寶將原本資訊不對稱、高價且繁瑣的申請流程，轉化為人人都能輕鬆掌握的智慧服務。",
  },

  {
    id: 3,
    img: winnerImg3,
    alt: "Winner 3",
    route: "其他 Google 技術賽道",
    groupNumber: "二",
    groupMember: "陳若瑛、黃乙家、陳昕宏、林雨臻",
    title: "GreenBubble 綠泡泡",
    content:
      "「陽光下的智慧決策」是台灣首個自助試算太陽能評估平台，專為解決民眾在安裝屋頂太陽能時遇到的資訊不透明、難以評估與決策門檻高等問題。平台結合 Google Cloud 技術，整合日照、地點、品牌、效率、成本等多元參數，讓使用者能夠快速評估自家安裝太陽能的適配性、投資回收期與效益，並提供多品牌比較與個人化方案建議，協助用戶做出最佳決策。",
  },
];
