import Image from "next/image";

export default function HomeHero() {
  return (
    <div className="">
      <Image src="/images/hero.png" alt="主視覺圖" width={1440} height={1024} />
    </div>
  );
}
