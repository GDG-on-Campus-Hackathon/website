import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Article from "../components/Article";
import H1 from "../components/H1";
import H2 from "../components/H2";
import P from "../components/P";
import InfoButton from "./InfoButton";
import PrivacyPolicy from "./PrivacyPolicy";
import NoticeComponent from "./NoticeComponent";
import Dialog from "../components/Dialog";

export default function HomeSignUp() {
  const privacyDialogRef = useRef<HTMLDialogElement>(null);
  const noticeDialogRef = useRef<HTMLDialogElement>(null);

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

      <div className="bg-brand-beige-light/20 rounded-lg shadow-[1.5px_2px_3.5px_0px_rgba(0,0,0,0.1),2px_2px_4px_0px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_0px_rgba(0,0,0,0.1)] p-8 max-w-4xl mx-auto">
        <H2>活動時間</H2>
        <P>延長報名：2025/03/15（六）~ 04/27（日）23:59</P>
        <P>決賽名單公布：2025/5/1（四）</P>
        <P>決賽：2025/06/07（六）~ 06/08（日）</P>

        <H2>場地資訊</H2>
        <P>臺北醫學大學跨領域學院杏春樓（台北市信義區吳興街250號杏春樓）</P>

        <H2>報名資格</H2>
        <P>
          高中以上學生（具當學期在學證明），單人或雙人組隊排名，組隊者將視為一單位評選，
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
            <InfoButton onClick={showPrivacyInfo}>個人資料使用辦法</InfoButton>
            <InfoButton onClick={showNoticeInfo}>活動注意事項</InfoButton>
          </div>
          <a
            href="https://forms.gle/LtZqTbtp3eBkLUuN9"
            target="_blank"
            rel="noreferrer"
            className="ml-auto px-6 py-2 font-medium text-sm rounded-xl border border-brand-gray flex items-center justify-center gap-2"
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
