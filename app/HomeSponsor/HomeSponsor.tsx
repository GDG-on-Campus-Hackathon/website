import Image from "next/image";
import H1 from "../components/H1";
import H2 from "../components/H2";
import P from "../components/P";
import image_nccu from "./assets/gdg_on_campus_nccu.svg";
import image_nthu from "./assets/gdg_on_campus_nthu.svg";

export default function HomeSponsor() {
  return (
    <article id="home-sponsor" className="container mx-auto p-8">
      <H1>贊助單位</H1>

      <H2>主辦單位</H2>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-8">
        <Image
          src={image_nccu.src}
          alt="GDG on Campus NCCU"
          width={360}
          height={60}
        />
        <Image
          src={image_nthu.src}
          alt="GDG on Campus NTHU"
          width={360}
          height={60}
        />
        <Image
          src={image_nthu.src}
          alt="GDG on Campus NTUST"
          width={360}
          height={60}
        />
      </div>

      <H2>協辦單位</H2>
      <P className="mb-9">全台 GDG On Campus（共23間學校）</P>
    </article>
  );
}
