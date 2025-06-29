import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Article from "../components/Article";
import H1 from "../components/H1";
import H2 from "../components/H2";
import SponsorContainer from "./SponsorContainer";
import image_nccu from "./assets/gdg_on_campus_nccu.webp";
import image_ntust from "./assets/gdg_on_campus_ntust.webp";
import image_tmu from "./assets/gdg_on_campus_tmu.webp";
import image_tmu_ieec from "./assets/tmu_ieec.svg";
import image_google_for_developers from "./assets/google_for_developers.svg";
import image_cathay_ins from "./assets/cathay_ins.svg";

export default function HomeSponsor() {
  return (
    <Article id="home-sponsor">
      <H1>贊助單位</H1>

      <H2>主辦單位</H2>
      <SponsorContainer>
        <Image src={image_nccu} alt="GDG on Campus NCCU" height={40} />
        <Image src={image_ntust} alt="GDG on Campus NTUST" height={40} />
        <Image src={image_tmu} alt="GDG on Campus TMU" height={40} />
      </SponsorContainer>

      <H2>協辦單位</H2>
      <SponsorContainer>
        <p className="text-sm/relaxed tracking-wide">
          全台 GDG on Campus（共 26 間學校）
        </p>
        <Image src={image_tmu_ieec} alt="北醫創新創業教育中心" height={40} />
      </SponsorContainer>

      <H2>指導單位</H2>
      <SponsorContainer>
        <Image
          src={image_google_for_developers}
          alt="Google for Developers"
          height={40}
        />
      </SponsorContainer>

      <H2>贊助單位</H2>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-9">
        <Image
          className="shrink-0"
          src={image_cathay_ins}
          alt="國泰人壽"
          height={40}
        />
        <div className="flex flex-col">
          <p className="text-sm/relaxed tracking-[3px]">
            國泰世紀產險成立於 1993 年，2002 年加入國泰金控並更名，自 2007
            年起穩居台灣第二大產險公司。公司重視費用控管與業務品質，積極參與公益、推動校園安全與環保，未來將以創新服務滿足客戶需求，實踐企業社會責任。
          </p>
          <button
            type="button"
            className="self-end px-6 py-2 flex items-center gap-1 cursor-pointer rounded-lg border border-[#A07E3A] font-medium text-sm tracking-widest text-[#A07E3A] mt-4"
          >
            查看職缺
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </Article>
  );
}
