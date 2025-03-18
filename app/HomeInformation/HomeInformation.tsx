import H1 from "../components/H1";
import H2 from "../components/H2";
import H3 from "../components/H3";
import P from "../components/P";
import EventArrangement from "./EventArrangement";
import EventAward from "./EventAward";
import InformationCard from "./InformationCard";

export default function HomeInformation() {
  return (
    <article id="home-information" className="max-w-3xl mx-auto p-8">
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

      <div className="mb-8 flex flex-col gap-6">
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
      <EventArrangement />

      {/* event schedule */}
      <H2>賽程規劃</H2>

      <H3>第一階段 - 個人篩選：</H3>
      <P>
        每個領域會由兩位（暫定）具該領域專業之教授進行評分與篩選，根據結果會產生進入複賽的人選，AI、Web3、DevOps
        各領域會有<span className="font-bold">相應的人數限制</span>，總共 100
        人。(待改)
      </P>

      <H3>第二階段 - 前置工作坊：</H3>
      <P>
        進入複賽的100人會由主辦團隊據其報名領域合理分配至 20 個組別中，並於 5/24
        舉辦前置工作坊，使各組別先行熟悉彼此，同時學習相關技術知識。
      </P>

      <H3>第三階段 - 黑克松競賽（正賽）：</H3>
      <P>
        正賽（6/7、8）兩天一夜，於北醫杏春樓（暫定）舉行，20 個組別會在 6/7
        當天早上開幕式的最後得知題目，再來就逕行為期一天半的開發，6/8中午將會由該題目領域之相關教授、廠商代表、業界專業人士組成之評審團進行現場發表評選，大概需要分成兩間教室同時進行，一間教室至少有四位評審。
        最後由總分最高的前 10 組進入最終決選，預計於台北 101
        Google辦公室舉行最終 pitch，而評審團預計由
        Googler、GDE、廠商代表共三位進行。
      </P>

      {/* event awards */}
      <H2>競賽獎項</H2>
      <EventAward
        description="第一名：獎金 15,000 元、實體獎品、實習面試機會(暫定）"
        prize="gold"
      />
      <EventAward
        description="第二名：獎金 10,000 元、實體獎品(暫定）"
        prize="silver"
      />
      <EventAward
        description="第三名：獎金 5,000 元、實體獎品(暫定）"
        prize="bronze"
      />
    </article>
  );
}
