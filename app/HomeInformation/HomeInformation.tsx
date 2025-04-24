import Image from "next/image";
import Article from "../components/Article";
import H1 from "../components/H1";
import H2 from "../components/H2";
import H3 from "../components/H3";
import P from "../components/P";
import EventAward from "./EventAward";
import InformationCard from "./InformationCard";
import event_arrangement from "./event_arrangement.svg";

export default function HomeInformation() {
  return (
    <Article id="home-information">
      <H1>活動資訊</H1>

      <H2>核心理念</H2>
      <P>
        DevJam TW 2025 以「Google 技術創新 x 全球影響力」為核心，打造一場 24
        小時黑客松，邀請來自全台各大專院校的開發者，運用 Google Cloud（Vertex
        AI）、Gemini API（AI Studio）、Flutter、Firebase、Google Maps
        API、TensorFlow、Google Earth Engine 等 Google
        旗下技術，針對這些全球挑戰提出創新解決方案。
      </P>

      <H2>主題分類</H2>

      <div className="mb-5 flex flex-col gap-6">
        {/* AI Card */}
        <InformationCard
          className="self-start"
          title="Google Cloud (Vertex AI)"
          text="雲端 AI 平台，用於機器學習訓練、模型開發、數據分析與 AI 應用。"
        />

        {/* Web3 Card */}
        <InformationCard
          className="self-end"
          title="Gemini API (AI Studio)"
          text="Google 最先進的大型語言模型（LLM），用於智能助理、對話 AI、自動化應用等創新解決方案。"
        />

        {/* DevOps Card */}
        <InformationCard
          className="self-start"
          title="其他 Google 相關技術"
          text="其他 Google 相關技術，如 Flutter、Firebase、Google Maps API、TensorFlow、Android、Google Earth Engine 等，用於強化應用的功能與可行性。"
        />
      </div>

      {/* event arrangement */}
      <H2>時程一覽</H2>
      <div className="overflow-auto mb-5">
        <Image
          className="min-w-fit mx-auto pb-2"
          src={event_arrangement}
          alt="Event Arrangement"
        />
      </div>

      {/* event schedule */}
      <H2>賽程規劃</H2>

      <H3>第一階段 - 個人篩選：</H3>
      <P>
        參賽者於指定時間內提交報名資料，並於表單內選填志願序。通過篩選者將獲得晉級資格，由主辦團隊據其報名領域合理分配至
        20 個組別中，進入下一階段。
      </P>

      <H3>第二階段 - 前置工作坊：</H3>
      <P>
        入選隊伍將參加技術諮詢與題目輔導工作坊，熟悉隊伍成員並獲得 Google Cloud
        提供的開發資源。現場由 GDE（Google Developer Experts）與 GDG（Google
        Developer Groups）提供技術指導，協助隊伍規劃最佳解決方案。
      </P>

      <H3>第三階段 - 決賽開發：</H3>
      <P>
        進入決賽的隊伍將展開技術開發，並獲得專案導師（Mentors）指導技術應用與架構設計，確保技術方案符合
        Google 生態系統，提升 AI 模型部署、應用開發與數據處理的實用性。
      </P>

      <H3>第四階段 - Demo 與最終評選：</H3>
      <P>
        決賽隊伍需提交技術架構報告，並於決賽日進行現場 Demo
        展示。評審團將依據技術可行性、市場適配性、影響力與 Pitch
        表現進行綜合評分，決選出最終獲勝之前三名隊伍。
      </P>

      {/* event awards */}
      <H2>競賽獎項</H2>
      <EventAward
        description="優勝：各主題擇一隊伍，優勝獎金 10,000 元、獎狀、企業實體獎品，並另訂時間至 Google 101 與大中華地區社群生態系統負責人交流餐敘"
        prize="gold"
      />
      <EventAward
        description="佳作：最終進入決賽之 8 組，佳作獎狀、企業實體獎品"
        prize="silver"
      />
    </Article>
  );
}
