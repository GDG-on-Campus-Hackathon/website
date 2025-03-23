import React from "react";
import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import Article from "../components/Article";
import H1 from "../components/H1";
import H2 from "../components/H2";
import P from "../components/P";

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

  const InfoIcon = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g mask="url(#mask0_551_723)">
          <path
            d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.5208 8.90417 12.7125 8.7125C12.9042 8.52083 13 8.28333 13 8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8C11 8.28333 11.0958 8.52083 11.2875 8.7125C11.4792 8.90417 11.7167 9 12 9ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
            fill="#A07E3A"
          />
        </g>
      </svg>
    );
  };

  const ArrowIcon = () => {
    return (
      <svg
        fill="none"
        width="16"
        height="16"
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
          fill="#4c4c4c"
        />
      </svg>
    );
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
