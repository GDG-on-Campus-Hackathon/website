import Image from "next/image";
import svg_devjam_tw_2025 from "./assets/devjam_tw_2025.svg";
import H1 from "../components/H1";
import H2 from "../components/H2";
import P from "../components/P";

export default function HomeIntroduction() {
  return (
    <article id="home-introduction" className="px-6">
      <H1>黑客松介紹</H1>
      <H2>關於 GDG on Campus</H2>
      <P>
        Google Developer Groups on Campus (GDG on Campus) 是一個由 Google
        支持的學生社群，通過學生與專業開發人員聯繫，促進學生對 Google
        開發人員技術的學習和應用，為學生提供與技術專家互動機會。
      </P>
      <P>
        GDG on Campus 在全球有超過 100 個國家/地區的 1000 多個社群。GDG on
        Campus
        是學生們學習和分享技術的理想社群，並且能夠與技術行業的其他開發人員和專家建立聯繫。
      </P>
      <H2>
        <Image
          src={svg_devjam_tw_2025.src}
          alt="DevJam TW 2025"
          width={170}
          height={19}
          className="mt-5"
        />
      </H2>
      <P>
        DevJam TW 2025 是由全台 23 所大學的 Google Developer Groups on Campus
        合作舉辦，專為學生開發者打造的黑客松舞台。
      </P>
      <P>
        活動將集結來自不同領域的熱血好手，透過技術與創意解決真實世界的挑戰，不僅是一場腦力激盪的競賽，更是與業界專業人士交流、探索新興技術應用的寶貴機會！
      </P>
      <P>
        參賽者將在密集的開發過程中，運用最新的工具與創意想法，針對產業痛點提出具社會與商業價值的解決方案，
        活動中更有機會向業界、投資者展示成果，促進跨校合作、共同推動技術社群茁壯的同時，開啟未來更多可能。
      </P>
      <P>如果你渴望用科技實現創新，千萬別錯過這場讓點子成真的挑戰！</P>
    </article>
  );
}
