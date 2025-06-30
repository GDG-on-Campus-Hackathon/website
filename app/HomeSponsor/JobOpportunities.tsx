import { SquareArrowOutUpRight } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

function H2({ children }: Props) {
  return <h2 className="font-bold mb-2">{children}</h2>;
}

function Ul({ children }: Props) {
  return <ul className="list-disc">{children}</ul>;
}

function Li({ children }: Props) {
  return <li className="ml-4 mb-2 leading-6">{children}</li>;
}

export default function JobOpportunities() {
  return (
    <>
      <h1 className="text-xl font-bold">國泰產險職缺一覽</h1>

      <p>想加入穩健又敢創新的保險科技公司？國泰產險等你來改寫未來！</p>

      <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
        <section>
          <H2>伺服器系統管理師</H2>
          <Ul>
            <Li>微軟作業系統架構的規劃、建置、安全防護與管理</Li>
            <Li>AD 網域、DNS、憑證等系統服務維護</Li>
            <Li>備份與備援機制的規劃與管理</Li>
            <Li>Linux 平台與 VMware 虛擬化平台的建置與維護</Li>
            <Li>端末設備管理</Li>
          </Ul>
        </section>

        <section>
          <H2>商業分析師</H2>
          <Ul>
            <Li>訪談業務部門需求，轉化為業務流程與相關文件</Li>
            <Li>帶領 IT Scrum 團隊，負責產品管理與系統運維</Li>
            <Li>與開發與架構人員合作，設計可行或最適解決方案</Li>
            <Li>協調業務與 IT 團隊，確保解決方案符合實際需求</Li>
          </Ul>
        </section>

        <section>
          <H2>AI 技術 / 應用工程師</H2>
          <Ul>
            <Li>與跨部門合作開發生成式 AI 模型（如 LLMs）</Li>
            <Li>優化保險相關 AI 產品的效能與擴展性</Li>
            <Li>掌握並分享 AI / 機器學習新技術</Li>
            <Li>微調模型並撰寫相關技術文件</Li>
            <Li>建立與維護模型訓練及部署流程</Li>
          </Ul>
        </section>

        <section>
          <H2>SA 系統分析師</H2>
          <Ul>
            <Li>訪談並彙整業務需求，進行系統規劃與分析</Li>
            <Li>撰寫系統流程與功能設計，產出需求規格書</Li>
            <Li>設計測試案例，驗證系統功能並協助測試</Li>
            <Li>專案期間負責需求確認、跨部門溝通與進度追蹤</Li>
          </Ul>
        </section>

        <section>
          <H2>Java 程式設計師</H2>
          <Ul>
            <Li>根據系統分析師提供的需求規格書</Li>
            <Li>確認開發方向與驗證方式</Li>
            <Li>使用 Java 依開發規範撰寫符合需求的程式</Li>
            <Li>完成 Code Review 與單元測試後交付成品</Li>
            <Li>持續關注並評估新技術應用</Li>
          </Ul>
        </section>

        <section>
          <H2>Angular 程式設計師</H2>
          <Ul>
            <Li>根據系統分析師提供的需求規格書確認前端開發方向與驗證方式</Li>
            <Li>使用 Angular 9 開發前端程式、與後端 API 串接</Li>
            <Li>完成 Code Review 與單元測試後交付成品</Li>
            <Li>持續關注並導入新技術</Li>
          </Ul>
        </section>

        <section>
          <H2>經營企劃人員</H2>
          <Ul>
            <Li>擬定經營目標與發展策略</Li>
            <Li>設計績效獎酬制度與管理辦法</Li>
            <Li>分析公司營運資訊與市場動態</Li>
            <Li>編制企業永續報告，規劃與追蹤永續會議</Li>
            <Li>管理與追蹤客戶淨推薦值 (NPS) 制度</Li>
            <Li>統籌專案執行與議事流程規劃</Li>
          </Ul>
        </section>
      </div>

      <a
        href="https://reurl.cc/paNzWZ"
        target="_blank"
        rel="noreferrer"
        className="w-fit ml-auto mt-4 px-6 py-2 flex items-center gap-1 cursor-pointer rounded-lg border border-brand-brown font-medium text-sm leading-none tracking-widest text-brand-brown"
      >
        詳細職缺資訊
        <SquareArrowOutUpRight size={14} />
      </a>
    </>
  );
}
