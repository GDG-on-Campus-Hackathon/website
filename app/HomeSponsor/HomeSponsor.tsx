import Image from "next/image";
import Article from "../components/Article";
import H1 from "../components/H1";
import H2 from "../components/H2";
import SponsorContainer from "./SponsorContainer";
import image_nccu from "./assets/gdg_on_campus_nccu.svg";
import image_nthu from "./assets/gdg_on_campus_nthu.svg";
import image_tmu_ieec from "./assets/tmu_ieec.svg";

export default function HomeSponsor() {
  return (
    <Article id="home-sponsor">
      <H1>贊助單位</H1>

      <H2>主辦單位</H2>
      <SponsorContainer>
        <Image
          src={image_nccu.src}
          alt="GDG on Campus NCCU"
          width={180}
          height={30}
        />
        <Image
          src={image_nthu.src}
          alt="GDG on Campus NTHU"
          width={180}
          height={30}
        />
        <Image
          src={image_nthu.src}
          alt="GDG on Campus NTUST"
          width={180}
          height={30}
        />
      </SponsorContainer>

      <H2>協辦單位</H2>
      <SponsorContainer>
        <p className="text-sm/relaxed tracking-wide">
          全台 GDG On Campus（共26間學校）
        </p>
        <Image
          src={image_tmu_ieec.src}
          alt="北醫創新創業教育中心"
          width={184}
          height={45}
        />
      </SponsorContainer>
    </Article>
  );
}
