"use client";

import { cn } from "@/lib/utils";

export default function HomeInformation() {
  return (
    <>
      <h2 className="text-[36px] font-bold mb-10 text-[4C4C4C] pl-20">
        活動資訊
      </h2>
      <section className="py-12 px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
        <h3 className="text-[28px] font-bold text-[4C4C4C]">/主題分類/</h3>
        <div className="flex flex-col gap-[41px] mt-[36px]">
          {/* AI Card */}
          <InformationCard
            className="justify-start"
            title="AI"
            text="探索人工智慧的無限潛力，從機器學習、自然語言處理到電腦視覺，運用 AI
            技術解決實際問題。無論是提升使用者體驗、優化決策流程，或開發智能應用，讓
            AI 成為推動創新核心動力！(待改)"
          />

          {/* Web3 Card */}
          <InformationCard
            className="justify-end"
            title="Web3"
            text="踏入去中心化時代，利用區塊鏈技術打造更透明、安全且自主的應用。從 NFT
            到去中心化金融 (DeFi)，挑戰傳統經濟與技術，創造全新的數位價值與商業模式！(待改)"
          />

          {/* DevOps Card */}
          <InformationCard
            className="justify-start"
            title="DevOps"
            text="加速軟體開發與部署流程，提升效能與穩定性。透過 CI/CD、基礎設施即碼化
            (IaC)、容器技術等實踐優化流程，推動敏捷運作與高品質交付！(待改)"
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
      <div
        className={cn(
          `flex flex-col p-[28px] gap-[28px] w-full sm:w-[712px] bg-[rgba(242,241,239,0.2)] shadow-[3px_4px_7px_rgba(0,0,0,0.08),inset_-4px_-4px_8px_rgba(0,0,0,0.08),inset_4px_4px_8px_rgba(255,255,255,0.28)] rounded-[9px] flex-none order-0 flex-grow-0`,
        )}
      >
        <h3 className="w-[30px] font-bold text-[28px] leading-[34px] tracking-[0.1em] text-[#4C4C4C] flex-none order-0 flex-grow-0">
          {title}
        </h3>
        <p className="text-sm sm:text-[18px] leading-[44px] break-words tracking-[0.1em] text-justify text-[#4C4C4C] flex-none order-1 align-self-stretch flex-grow-0">
          {text}
        </p>
      </div>
    </div>
  );
};
