"use client";

import { cn } from "@/lib/utils";

export default function HomeInformation() {
  return (
    <>
      <h2 className="text-[36px] font-bold mb-10 pl-20">活動資訊</h2>
      <section className="py-12 px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* topic category */}
        <h3 className="text-title">/主題分類/</h3>
        <div className="flex flex-col gap-[41px] mt-[36px]">
          {/* AI Card */}
          <InformationCard
            className="justify-start"
            title="AI"
            text="探索人工智慧的無限潛力，從機器學習、自然語言處理到電腦視覺，運用 AI 技術解決實際問題。無論是提升使用者體驗、優化決策流程，或開發智能應用，讓 AI 成為推動創新核心動力！(待改)"
          />

          {/* Web3 Card */}
          <InformationCard
            className="justify-end"
            title="Web3"
            text="踏入去中心化時代，利用區塊鏈技術打造更透明、安全且自主的應用。從 NFT 到去中心化金融 (DeFi)，挑戰傳統經濟與技術，創造全新的數位價值與商業模式！(待改)"
          />

          {/* DevOps Card */}
          <InformationCard
            className="justify-start"
            title="DevOps"
            text="加速軟體開發與部署流程，提升效能與穩定性。透過 CI/CD、基礎設施即碼化 (IaC)、容器技術等實踐優化流程，推動敏捷運作與高品質交付！(待改)"
          />
        </div>

        {/* event arrangement */}
        <h3 className="text-title mt-[60px]">/賽程規劃/</h3>
        <div className="flex flex-col mt-[36px]">
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
        <h3 className="text-title mt-[60px]">/競賽獎項/</h3>
        <div className="flex flex-col">
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
    </>
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
        <h3 className="text-title">{title}</h3>
        <p className="text-sm sm:text-[18px] leading-[44px] text-justify font-semibold">
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
      <p className="text-sm sm:text-[18px] leading-[44px] text-justify ml-[29px]">
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
