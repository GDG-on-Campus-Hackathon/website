import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Article from "../components/Article";
import H1 from "../components/H1";
import H2 from "../components/H2";
import P from "../components/P";
import InfoButton from "./InfoButton";
import PrivacyPolicy from "./PrivacyPolicy";
import NoticeComponent from "./NoticeComponent";
import CountdownTimer, { useCountdown } from "./CountdownTimer";
import Dialog from "../components/Dialog";

export default function HomeSignUp() {
  const privacyDialogRef = useRef<HTMLDialogElement>(null);
  const noticeDialogRef = useRef<HTMLDialogElement>(null);
  const countdown = useCountdown();

  const showPrivacyInfo = () => {
    privacyDialogRef.current?.showModal();
  };

  const showNoticeInfo = () => {
    noticeDialogRef.current?.showModal();
  };

  const closePrivacyDialog = () => {
    privacyDialogRef.current?.close();
  };

  const closeNoticeDialog = () => {
    noticeDialogRef.current?.close();
  };

  return (
    <Article id="home-sign-up">
      <H1>報名資訊</H1>

      <div className="bg-[#F2F1EF33] rounded-lg shadow-[1.5px_2px_3.5px_0px_rgba(0,0,0,0.1),2px_2px_4px_0px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_0px_rgba(0,0,0,0.1)] p-8 max-w-4xl mx-auto">
        <div className={cn(countdown && "sm:relative")}>
          <H2>活動時間</H2>
          {countdown && (
            <CountdownTimer
              state={countdown}
              className="mb-4 sm:absolute sm:right-0 sm:top-0 sm:mb-0"
            />
          )}
          <div className={cn(countdown && "sm:pr-[240px]")}>
            <P>報名：2026/04/27（一）~ 05/31（日）23:59</P>
            <P>正賽名單公布：2026/06/06（六）</P>
            <P>遞補名單公布：2026/07/11（六）</P>
            <P>賽前工作坊：2026/08/01（六）</P>
            <P>黑客松競賽：2026/08/17（一）~ 08/18（二）</P>
          </div>
        </div>

        <H2>場地資訊</H2>
        <P className="mb-0">
          競賽首日：臺北醫學大學跨領域學院杏春樓（臺北市信義區吳興街250號杏春樓）
        </P>
        <P>競賽次日：Google 101 總部（臺北市信義區西村里信義路五段7號）</P>

        <H2>報名資格</H2>
        <P>
          高中以上學生（具當學期在學證明），單人報名為主，至多可選擇一位欲同組之組員，
          初賽入選與落選以個人為單位評估。主辦方保有決定最終分組之權利。
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
            <InfoButton onClick={showPrivacyInfo}>個人資料使用辦法</InfoButton>
            <InfoButton onClick={showNoticeInfo}>活動注意事項</InfoButton>
          </div>
          <a
            href="https://forms.gle/ThjV82e3UQLgzKgi7"
            target="_blank"
            rel="noreferrer"
            className="ml-auto px-6 py-2 font-medium text-sm rounded-xl border border-[#4c4c4c] flex items-center justify-center gap-2"
          >
            <span className="inline-flex items-center content-center gap-2">
              馬上報名
              <ArrowRight size={14} />
            </span>
          </a>
        </div>
      </div>

      <Dialog ref={privacyDialogRef} onClose={closePrivacyDialog}>
        <PrivacyPolicy />
      </Dialog>

      <Dialog ref={noticeDialogRef} onClose={closeNoticeDialog}>
        <NoticeComponent />
      </Dialog>
    </Article>
  );
}
