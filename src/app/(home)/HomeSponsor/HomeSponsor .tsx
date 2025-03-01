import Image from "next/image";
import image__gdg_on_campus_nccu from "./gdg_on_campus_nccu.png";

export default function HomeSponsor() {
  return (
    <div className="text-center">
      <h1>贊助單位</h1>
      <div>
        <h2>/主辦單位/</h2>
        <div>
          <Image src={image__gdg_on_campus_nccu.src} alt={"GDG on Campus NCCU"} width={360} height={59} />
        </div>
      </div>
      <div>
        <h2>/協辦單位/</h2>
        <div>
          <p>全台 GDG On Campus（共23間學校）</p>
        </div>
      </div>
    </div>
  );
}
