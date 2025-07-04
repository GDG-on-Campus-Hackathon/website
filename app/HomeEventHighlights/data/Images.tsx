import HL1 from "../asset/HL1.svg";
import HL2 from "../asset/HL2.svg";
import HL3 from "../asset/HL3.svg";
import HL4 from "../asset/HL4.svg";
import HL5 from "../asset/HL5.svg";
import HL6 from "../asset/HL6.svg";
import HL7 from "../asset/HL7.svg";
import HL8 from "../asset/HL8.svg";
import HL9 from "../asset/HL9.svg";

export interface ImageItem {
  id: number;
  src: any;
  alt: string;
}

export const images: ImageItem[] = [
  { id: 1, src: HL1, alt: "Highlight1" },
  { id: 2, src: HL2, alt: "Highlight2" },
  { id: 3, src: HL3, alt: "Highlight3" },
  { id: 4, src: HL4, alt: "Highlight4" },
  { id: 5, src: HL5, alt: "Highlight5" },
  { id: 6, src: HL6, alt: "Highlight6" },
  { id: 7, src: HL7, alt: "Highlight7" },
  { id: 8, src: HL8, alt: "Highlight8" },
  { id: 9, src: HL9, alt: "Highlight9" },
];
