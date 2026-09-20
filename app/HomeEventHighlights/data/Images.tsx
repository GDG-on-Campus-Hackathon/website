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
  { id: 1, src: HL1, alt: "Highlight 1" },
  { id: 2, src: HL2, alt: "Highlight 2" },
  { id: 3, src: HL3, alt: "Highlight 3" },
  { id: 4, src: HL4, alt: "Highlight 4" },
  { id: 5, src: HL5, alt: "Highlight 5" },
  { id: 6, src: HL6, alt: "Highlight 6" },
  { id: 7, src: HL7, alt: "Highlight 7" },
  { id: 8, src: HL8, alt: "Highlight 8" },
  { id: 9, src: HL9, alt: "Highlight 9" },
  { id: 10, src: HL10, alt: "Highlight 10" },
];
