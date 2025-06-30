import Image from "next/image";
import image_hero from "./assets/hero.webp";

export default function HomeHero() {
  return (
    <div className="max-w-[1440px] mx-auto mb-9 flex justify-between items-center">
      <Image src={image_hero.src} alt="" width={1440} height={1024} />
    </div>
  );
}
