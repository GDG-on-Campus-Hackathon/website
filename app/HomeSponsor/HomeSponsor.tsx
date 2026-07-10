import Image from "next/image";
import Article from "../components/Article";
import H1 from "../components/H1";
import H2 from "../components/H2";
import SponsorContainer from "./SponsorContainer";
import image_nccu from "./assets/gdg_on_campus_nccu.webp";
import image_google_for_developers from "./assets/google_for_developers.svg";
import image_trend_micro from "./assets/trend_micro.jpg";

export default function HomeSponsor() {
  return (
    <Article id="home-sponsor">
      <H1>贊助單位</H1>

      <H2>主辦單位</H2>
      <SponsorContainer>
        <Image src={image_nccu} alt="GDG on Campus NCCU" height={40} />
      </SponsorContainer>

      <H2>協辦單位</H2>
      <SponsorContainer>
        <p className="text-sm/relaxed tracking-wide">
          全臺 GDG on Campus（共 25 間學校）
        </p>
      </SponsorContainer>

      <H2>贊助廠商</H2>
      <SponsorContainer>
        <Image src={image_trend_micro} alt="Trend Micro" height={80} />
      </SponsorContainer>

      <H2>指導單位</H2>
      <SponsorContainer>
        <Image
          src={image_google_for_developers}
          alt="Google for Developers"
          height={40}
        />
      </SponsorContainer>
    </Article>
  );
}
