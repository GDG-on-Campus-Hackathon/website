"use client";

import { cn } from "@/lib/utils";
import EventArrangement from "./event_arrangement";
export default function HomeInformation() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h2
        id="home-information"
        className="text-title-1 pt-20 md:pl-20 text-center md:text-left"
      >
        活動資訊
      </h2>
      <section className="py-4 px-4 md:px-6 lg:px-8">
        {/* topic category */}
        <div className="pt-10  md:px-20">
          <h2 className="mt-4 text-title-3 text-left">/核心理念/</h2>
          <div>
            <p className="text-lg pt-4 tracking-wide md:leading-10 md:text-justify">
              DevJam TW 2025 以 「Google 技術創 新 x 全球影響力」
              為核心，打造一場 24
              小時黑客松，邀請來自全台各大專院校的開發者，運用 Google
              Cloud（Vertex AI）、Gemini API（AI
              Studio）、Flutter、Firebase、Google Maps API、TensorFlow、Google
              Earth Engine 等 Google
              旗下技術，針對這些全球挑戰提出創新解決方案。
            </p>
          </div>
        </div>

        <div className="pt-10  md:px-20">
          <h3 className="text-title-3 mt-4">/主題分類/</h3>
          <div className="flex flex-col gap-[1rem] pt-4 ">
            {/* AI Card */}
            <InformationCard
              className="justify-start"
              title="Google Cloud (Vertex AI)"
              text="雲端 AI 平台，用於機器學習訓練、模型開發、數據分析與 AI 應用。"
            />

            {/* Web3 Card */}
            <InformationCard
              className="justify-end"
              title="Gemini API (AI Studio)"
              text="Google 最先進的大型語言模型（LLM），用於智能助理、對話 AI、自動化應用等創新解決方案。"
            />

            {/* DevOps Card */}
            <InformationCard
              className="justify-start"
              title="其他 Google 相關技術"
              text="其他 Google 相關技術，如 Flutter、Firebase、Google Maps API、TensorFlow、Android、Google Earth Engine 等，用於強化應用的功能與可行性。"
            />
          </div>
        </div>

        {/* event arrangement */}
        <div className="flex flex-col md:px-20 max-w-auto pt-10">
          <h3 className="text-title-3 mt-4 ">/時程一覽/</h3>
          <div className="w-full pt-4">
            <EventArrangement />
          </div>
        </div>

        {/* event schedule */}
        <div className="flex flex-col md:px-20 pt-10">
          <h3 className="text-title-3 mt-4">/賽程規劃/</h3>
          <EventDescription
            title="第一階段 - 個人篩選："
            text="每個領域會由兩位（暫定）具該領域專業之教授進行評分與篩選，根據結果會產生進入複賽的人選，AI、Web3、DevOps 各領域會有相應的人數限制，總共 100 人。(待改)"
            keyword="相應的人數限制"
          />
          <EventDescription
            title="第二階段 - 前置工作坊："
            text="進入複賽的100人會由主辦團隊據其報名領域合理分配至 20 個組別中，並於 5/24 舉辦前置工作坊，使各組別先行熟悉彼此，同時學習相關技術知識。"
          />
          <EventDescription
            title="第三階段 - 黑克松競賽（正賽）："
            text="正賽（6/7、8）兩天一夜，於北醫杏春樓（暫定）舉行，20 個組別會在 6/7 當天早上開幕式的最後得知題目，再來就逕行為期一天半的開發，6/8中午將會由該題目領域之相關教授、廠商代表、業界專業人士組成之評審團進行現場發表評選，大概需要分成兩間教室同時進行，一間教室至少有四位評審。 最後由總分最高的前 10 組進入最終決選，預計於台北 101 Google辦公室舉行最終 pitch，而評審團預計由 Googler、GDE、廠商代表共三位進行。"
          />
        </div>

        {/* event awards */}

        <div className="flex flex-col md:px-20">
          <h3 className="text-title-3 mt-[60px]">/競賽獎項/</h3>
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
        </div>
      </section>
      <hr />
    </div>
  );
}

interface InformationCardProps {
  className?: string;
  title: string;
  text: string;
}

const InformationCard = ({ className, title, text }: InformationCardProps) => {
  return (
    <div className={cn("flex w-full", className)}>
      <div className={cn("sm:w-[712px] card")}>
        <h3 className="text-title-3">{title}</h3>
        <p className="text-sm sm:text-[18px] md:leading-[44px] text-justify font-semibold">
          {text}
        </p>
      </div>
    </div>
  );
};

interface EventDescriptionProps {
  className?: string;
  keyword?: string;
  title: string;
  text: string;
}

const EventDescription = ({
  className,
  keyword,
  title,
  text,
}: EventDescriptionProps) => {
  const renderText = (text: string, keyword: string) => {
    if (!keyword) return text;

    const regex = new RegExp(`(${keyword})`, "g");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part === keyword) {
        return (
          <span key={index} className="font-bold">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col justify-start gap-[28px] mt-[36px]",
        className,
      )}
    >
      <div className="flex text-subtitle">
        <div className="block w-[5px] bg-[#4c4c4c]"></div>
        <p className="ml-[24px]">{title}</p>
      </div>
      <p className="text-sm sm:text-[18px] md:leading-[44px] text-justify">
        {renderText(text, keyword || "")}
      </p>
    </div>
  );
};

interface EventAwardProps {
  description: string;
  prize: "gold" | "silver" | "bronze";
}

const EventAward = ({ description, prize }: EventAwardProps) => {
  return (
    <div className="flex gap-[36px] mt-[36px]">
      <div className={`award-circle ${prize}`}>
        <p>{prize === "gold" ? "1" : prize === "silver" ? "2" : "3"}</p>
      </div>
      <div className="flex items-center text-subsubtitle">{description}</div>
    </div>
  );
};
