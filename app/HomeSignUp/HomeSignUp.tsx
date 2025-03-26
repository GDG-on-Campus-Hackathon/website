import { useRef } from "react";
import Article from "../components/Article";
import H1 from "../components/H1";
import H2 from "../components/H2";
import P from "../components/P";
import InfoIcon from "./InfoIcon";
import ArrowIcon from "./ArrowIcon";
import PrivacyPolicy from "./PrivacyPolicy";

export default function HomeSignUp() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const showInfo = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <Article id="home-sign-up">
      <H1>報名資訊</H1>

      <div className="bg-[#F2F1EF33] rounded-lg shadow-[1.5px_2px_3.5px_0px_rgba(0,0,0,0.1),2px_2px_4px_0px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_0px_rgba(0,0,0,0.1)] p-8 max-w-4xl mx-auto">
        <H2>活動時間</H2>
        <P>報名：2025/03/15(六) ~ 04/15(二) 23:59</P>
        <P>決賽名單公布：2025/5/1 (四)</P>
        <P>決賽：2025/06/07 (六) ~ 06/08 (日)</P>

        <H2>場地資訊</H2>
        <P>臺北醫學大學跨領域學院杏春樓（台北市信義區吳興街250號杏春樓）</P>

        <H2>報名資格</H2>
        <P>
          高中以上學生(具當學期在學證明)，單人或雙人組隊排名，組隊者將視為一單位評選，
          入選或落選皆為整組計算，無法拆分個別晉級。
        </P>

        <H2>報名方式</H2>
        <P>
          活動一律透過線上表單報名，並於表單內繳交相關參考資料，主辦方將以表單填寫內容作為錄取參考依據，
          報名先後順序不列入計分標準。
        </P>
        <p className="mb-5 text-xs text-justify tracking-wide">
          *
          完成報名後，則表示同意接受本辦法之拘束，如有未盡事宜，主辦單位保留各項競賽辦法解釋及變更之權利，敬請在參加前詳閱活動注意事項。
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col gap-2">
            <button
              className="flex items-center gap-2 text-[#A07E3A] text-xs font-medium hover:underline"
              onClick={showInfo}
            >
              <InfoIcon />
              <span>個人資料使用辦法</span>
            </button>
            <a
              className="flex items-center gap-2 text-[#A07E3A] text-xs font-medium hover:underline"
              href="#notice"
            >
              <InfoIcon />
              <span>活動注意事項</span>
            </a>
          </div>
          <a
            href="https://forms.gle/LtZqTbtp3eBkLUuN9"
            target="_blank"
            className="ml-auto px-6 py-2 font-medium text-sm rounded-xl border border-[#4c4c4c] flex items-center justify-center gap-2"
          >
            <span className="inline-flex items-center content-center gap-2">
              馬上報名 <ArrowIcon />
            </span>
          </a>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="open:flex flex-col m-auto py-2 rounded-lg backdrop:bg-black/60 text-[#4c4c4c]"
      >
        <div className="flex justify-end sticky top-0 bg-white">
          <button
            onClick={closeDialog}
            className="px-4 py-2 hover:brightness-50 hover:cursor-pointer"
          >
            &#10006;
          </button>
        </div>
        <PrivacyPolicy />
      </dialog>
    </Article>
  );
}
