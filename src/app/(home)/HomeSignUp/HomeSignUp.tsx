"use client";
import React from "react";
import Swal from "sweetalert2";
import HomeNotice from "@/app/(home)/HomeNotice/HomeNotice";
import ReactDOMServer from "react-dom/server";

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
  const ShowNotice = () => {
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
      html: ReactDOMServer.renderToString(<HomeNotice />),
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

  return (
    <div className="pt-20 text-center md:text-left md:px-20" id="home-sign-up">
      <h1 className="text-5xl text-gray-700 font-extrabold font-sans text-center md:text-left">
        報名資訊
      </h1>
      <div className="py-2 px-4 md:px-6 lg:px-8 mx-auto max-w-7xl text-left leading-10">
        <h2 className="text-title text-left pt-10">/活動時間/</h2>
        <div>
          <p className="text-lg pt-4 tracking-wide">
            報名：2025/03/15(六)~04/15(二)23:59
          </p>
          <p className="text-lg pt-4 tracking-wide">
            決賽名單公布：2025/5/1 (四)
          </p>
          <p className="text-lg pt-4 tracking-wide">
            決賽：2025/06/07 (六) ~ 06/08 (日)
          </p>
        </div>
      </div>
      <div className="py-2 px-4 md:px-6 lg:px-8 mx-auto max-w-7xl text-left leading-10">
        <h2 className="text-title text-left pt-10">/活動地點/</h2>
        <div>
          <p className="text-lg pt-4 tracking-wide">
            決賽：臺北醫學大學跨領域學院杏春樓（台北市信義區吳興街250號杏春樓）
          </p>
          <p className="text-lg pt-4 tracking-wide">成果發表: 未定</p>
        </div>
      </div>
      <div className="py-2 px-4 md:px-6 lg:px-8 mx-auto max-w-7xl text-left leading-10">
        <h2 className="text-title font-semibold text-left pt-10">/報名資格/</h2>
        <div>
          <p className="text-lg pt-4 tracking-wide">
            高中以上學生(具當學期在學證明)，單人或雙人組隊排名，組隊者將視為一單位評選，
            入選或落選皆為整組計算，無法拆分個別晉級。
          </p>
        </div>
      </div>
      <div className="py-2 px-4 md:px-6 lg:px-8 mx-auto max-w-7xl text-left leading-10">
        <h2 className="text-title text-left pt-4">/報名方式/</h2>
        <p className="text-lg pt-4 tracking-wide">
          活動一律透過線上表單報名，並於表單內繳交相關參考資料，主辦方將以表單填寫內容作為錄取參考依據，
          報名先後順序不列入計分標準。
        </p>
        <p className="text-sm pt-3">
          完成報名後，則表示同意接受本辦法之拘束，如有未盡事宜，主辦單位保留各項競賽辦法解釋及變更之權利，敬請在參加前詳閱活動注意事項。
        </p>
      </div>
      <div className="py-4 px-4 md:px-6 lg:px-8 mx-auto max-w-7xl text-left flex flex-row gap-3">
        <div className="flex flex-col gap-1">
          <button
            className="flex items-center rounded hover:bg-yellow-600"
            onClick={() => ShowInfo()}
          >
            {InfoIcon()}
            <p className=" text-yellow-700 text-left p-1 font-bold w-[10rem]  mb-1 ">
              個人資料使用辦法
            </p>
          </button>
          <button
            className="flex items-center rounded hover:bg-yellow-600"
            onClick={() => ShowNotice()}
          >
            {InfoIcon()}
            <p className=" text-yellow-700 text-left p-1 font-bold w-[10rem] rounded hover:bg-yellow-600 mb-1 ">
              活動注意事項
            </p>
          </button>
        </div>
        <button
          className="bg-yellow-500 text-white p-1 font-bold w-[10rem]  mb-1 ml-auto"
          onClick={() => {
            window.open("https://forms.gle/LtZqTbtp3eBkLUuN9");
          }}
        >
          報名表單
        </button>
      </div>
      <hr />
    </div>
  );
}
