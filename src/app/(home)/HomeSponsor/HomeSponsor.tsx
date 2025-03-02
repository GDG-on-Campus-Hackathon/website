import Image from "next/image";
import image__gdg_on_campus_nccu from "./gdg_on_campus_nccu.png";

export default function HomeSponsor() {
  return (
    <div className="text-center">
      <h1 className="text-4xl text-gray-700 font-extrabold font-sans py-2 text-left pl-20 pt-20 pr-20">贊助單位</h1>
      <div className="pl-40 pr-40">
        <h2 className="text-3xl text-left text-gray-700 font-bold font-sans pt-10 ">/主辦單位/</h2>
        <div className="items-center pt-10 flex flex-row">
          <Image src={image__gdg_on_campus_nccu.src} alt={"GDG on Campus NCCU"} width={360} height={60} />
          <Image src={image__gdg_on_campus_nccu.src} alt={"GDG on Campus NCCU"} width={360} height={60} />
          <Image src={image__gdg_on_campus_nccu.src} alt={"GDG on Campus NCCU"} width={360} height={60} />
        </div>
        <h2 className="text-3xl text-left text-gray-700 font-bold font-sans pt-10 ">/協辦單位/</h2>
        <div>
          <p className="text-lg text-left text-gray-700 font-sans pt-10">全台 GDG On Campus（共23間學校）</p>
        </div>
      </div>
    </div>
  );
}
