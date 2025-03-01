import Image from "next/image";
import image_hero from "./hero.png";

export default function HomeHero() {
  return (
    <div className="">
      <Image src={image_hero.src} alt="" width={1440} height={1024} />
    </div>
  );
}
