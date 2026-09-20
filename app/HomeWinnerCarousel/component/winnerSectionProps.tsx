export interface winnerSectionProps {
  id: number;
  route: string;
  groupNumber: string;
  groupMember: string;
  title: string;
  content: string;
}

export const winnerSectionList: winnerSectionProps[] = [
  {
    id: 1,
    route: "Google Cloud 賽道",
    groupNumber: "五",
    groupMember: "林吟蓁、陳宥錡、林鈺臻、賴世光",
    title: "ReVision City",
    content:
      "為視障族群打造的智慧城市輔助系統，透過 Gemini 影像辨識與個人化介面，依使用者視野狀況即時辨識障礙物、公車與環境資訊，提升行動與搭乘安全，並將使用數據回饋城市治理，打造更具包容性的智慧城市。",
  },

  {
    id: 2,
    route: "Gemini API 賽道",
    groupNumber: "二",
    groupMember: "陳佳朋、羅子祐、張珈薰、程陳宥",
    title: "CITY TASK",
    content:
      "結合 Gemini 與智慧代理的城市大型廢棄物處理系統。民眾只需拍照上傳，系統即可理解需求、自動建立案件，並協助清潔隊進行案件判定、路線規劃與調度，降低重複人工處理，提升城市清運效率與服務品質。",
  },

  {
    id: 3,
    route: "其他技術賽道",
    groupNumber: "六",
    groupMember: "方澤享、黃大益、葉恩慈、林玟伶",
    title: "Coolpath",
    content:
      "以「熱風險」為核心的智慧導航系統，整合即時氣象、日照、遮蔭、距離與交通資訊，計算各候選路線的 Heat Risk Score，重新排序並推薦較涼爽、安全的路徑與休息點，讓使用者在效率與舒適度間取得更好的平衡。",
  },
];
