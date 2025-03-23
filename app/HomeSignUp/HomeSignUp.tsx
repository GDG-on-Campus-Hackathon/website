import React from "react";
import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import Article from "../components/Article";
import H1 from "../components/H1";
import H2 from "../components/H2";
import P from "../components/P";
import InfoIcon from "./InfoIcon";
import ArrowIcon from "./ArrowIcon";

export default function HomeSignUp() {
  const ShowInfo = () => {
    Swal.fire({
      confirmButtonText: "關閉",
      color: "black",
      background: "rgba(237, 234, 229, 1)",
      width: "80%",
      backdrop: `
        rgba(0, 0, 0, 0.4)
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='rgba(255, 255, 255, 0.3)'/%3E%3C/svg%3E")
        left top
        no-repeat
        backdrop-filter: blur(1px);
      `,
      html: ReactDOMServer.renderToString(
        <div className="text-left">
          <h2 className="text-left text-2xl font-bold">
            DevJam TW 2025個人資料使用辦法
          </h2>
          <h2 className="text-[1rem] m-3">
            以上說明DevJam TW 2025
            黑客松（以下稱本競賽）所收集、處理及利用個人資料之情形
          </h2>
          <div className="text-left">
            <div className="my-5">
              <p className="text-left text-xl font-bold">
                一、個人資料之蒐集目的：
              </p>
              <p className="text-[1rem]">
                本競賽執行DevJam TW
                2025黑客松之相關業務時，將收集參賽者的個人資料。
                <br />
                參賽者同意提供個人資料以利競賽進行，包括但不限於
                姓名、聯絡電話、電子郵件、身分證字號、匯款戶資訊、親屬資訊、學校/單位、系級、作品集
                等資訊。
                <br />
                主辦單位收集的個人資料夾用於競賽相關業務，使用期限為即日起至2025年12月31日止，並以電子郵件、電話、社群媒體或其他適當方式聯繫參賽者
                <br />
              </p>
            </div>
            <div className="my-5">
              <p className="text-left text-xl font-bold">
                二、個人資料之使用方式：
              </p>
              <p className="text-[1rem]">
                本競賽依據 中華民國個人資料保護法
                及相關法規範，合理處理及利用參賽者的個人資料。
                <br />
                參賽者可向主辦單位查詢或請求補充、更正所提供的個人資料，亦可請求停止使用或刪除資料（但因競賽執行職務所需者，不在此限）。
                <br />
                參賽者同意主辦單位得基於競賽執行之需要，於活動期間使用個人資料，以利賽事通知、獎勵發放、成果展示、後續聯繫等用途。
                <br />
              </p>
            </div>
            <div className="my-5">
              <p className="text-left text-xl font-bold">三、個人資料之保護</p>
              <p className="text-[1rem]">
                參賽者個人資料將受 個人資料保護法 規範，並由主辦單位妥善保存。
                <br />
                若因不可抗力（如天災、系統故障、駭客攻擊等）導致個人資料洩漏，主辦單位將依法通報，並採取補救措施，確保個人資料安全。
                <br />
              </p>
            </div>
            <div className="my-5">
              <p className="text-left text-xl font-bold">四、同意及效力</p>
              <p className="text-[1rem]">
                當參賽者填寫報名表並提交，即代表已閱讀、理解並同意本競賽之
                個人資料使用條款。
                <br />
                若主辦單位有必要調整本條款內容，將於官方網站公告，不另行個別通知。若參賽者對修改內容有異議，請於公告
                30 日內聯繫主辦單位，否則視為同意修正內容。
                <br />
                如有爭議，應依據中華民國法律為準。
                <br />
              </p>
            </div>
            <div className="my-5">
              <p className="text-left text-xs font-bold">
                📌 聯繫方式：如有個人資料相關問題，請聯絡 DevJam TW 2025
                黑客松主辦單位 Email：devjamtw@gmail.com
              </p>
            </div>
          </div>
        </div>,
      ),
    });
  };

  return (
    <Article id="home-sign-up">
      <H1>報名資訊</H1>

      <div className="bg-[#F2F1EF33] rounded-lg shadow-[1.5px_2px_3.5px_0px_rgba(0,0,0,0.1),2px_2px_4px_0px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_0px_rgba(0,0,0,0.1)] p-8 mb-9 max-w-4xl mx-auto">
        <H2>活動時間</H2>
        <P>報名：2025/03/15(六)~04/15(二)23:59</P>
        <P>決賽名單公布：2025/5/1 (四)</P>
        <P>決賽：2025/06/07 (六) ~ 06/08 (日)</P>

        <H2>活動地點</H2>
        <P>
          決賽：臺北醫學大學跨領域學院杏春樓（台北市信義區吳興街250號杏春樓）
        </P>
        <P>成果發表: 未定</P>

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
              className="flex items-center gap-2 text-[#A07E3A] font-medium hover:underline align-middle"
              onClick={() => ShowInfo()}
            >
              <InfoIcon />
              <span>個人資料使用辦法</span>
            </button>
            <a
              className="flex items-center gap-2 text-[#A07E3A] font-medium hover:underline align-middle"
              href="#notice"
            >
              <InfoIcon />
              <span>活動注意事項</span>
            </a>
          </div>
          <a
            href="https://forms.gle/LtZqTbtp3eBkLUuN9"
            target="_blank"
            className="ml-auto px-6 py-2 text-[#4c4c4c] font-medium text-xl rounded-xl border border-[#4c4c4c] flex items-center justify-center gap-2"
          >
            <span className="inline-flex items-center content-center gap-2">
              馬上報名 <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </Article>
  );
}
