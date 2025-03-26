interface Props {
  children: React.ReactNode;
}

function H2({ children }: Props) {
  return (
    <h2 className="mt-5 mb-3 font-bold text-sm/relaxed tracking-wide">
      {children}
    </h2>
  );
}

function P({ children }: Props) {
  return (
    <p className="mb-3 text-sm/relaxed text-justify tracking-wide">
      {children}
    </p>
  );
}

export default function PrivacyPolicy() {
  return (
    <article className="overflow-y-auto px-[3vw] text-justify">
      <h1 className="mb-6 font-bold text-lg">
        DevJam TW 2025 個人資料使用辦法
      </h1>
      <P>
        以下說明 DevJam TW 2025
        黑客松（以下稱本競賽）所收集、處理及利用個人資料之情形。
      </P>

      <H2>一、個人資料之蒐集目的</H2>
      <P>
        本競賽執行 DevJam TW 2025 黑客松之相關業務時，將收集參賽者的個人資料。
      </P>
      <P>
        參賽者同意提供個人資料以利競賽進行，包括但不限於姓名、聯絡電話、電子郵件、身分證字號、匯款戶資訊、親屬資訊、學校/單位、系級、作品集等資訊。
      </P>
      <P>
        主辦單位收集的個人資料夾用於競賽相關業務，使用期限為即日起至2025年12月31日止，並以電子郵件、電話、社群媒體或其他適當方式聯繫參賽者
      </P>

      <H2>二、個人資料之使用方式</H2>
      <P>
        本競賽依據中華民國個人資料保護法及相關法規範，合理處理及利用參賽者的個人資料。
      </P>
      <P>
        參賽者可向主辦單位查詢或請求補充、更正所提供的個人資料，亦可請求停止使用或刪除資料（但因競賽執行職務所需者，不在此限）。
      </P>
      <P>
        參賽者同意主辦單位得基於競賽執行之需要，於活動期間使用個人資料，以利賽事通知、獎勵發放、成果展示、後續聯繫等用途。
      </P>

      <H2>三、個人資料之保護</H2>
      <P>參賽者個人資料將受個人資料保護法規範，並由主辦單位妥善保存。</P>
      <P>
        若因不可抗力（如天災、系統故障、駭客攻擊等）導致個人資料洩漏，主辦單位將依法通報，並採取補救措施，確保個人資料安全。
      </P>

      <H2>四、同意及效力</H2>
      <P>
        當參賽者填寫報名表並提交，即代表已閱讀、理解並同意本競賽之個人資料使用條款。
      </P>
      <P>
        若主辦單位有必要調整本條款內容，將於官方網站公告，不另行個別通知。若參賽者對修改內容有異議，請於公告
        30 日內聯繫主辦單位，否則視為同意修正內容。
      </P>
      <P>如有爭議，應依據中華民國法律為準。</P>

      <P>
        📌 聯繫方式：如有個人資料相關問題，請聯絡 DevJam TW 2025 黑客松主辦單位
        （Email：devjamtw@gmail.com）。
      </P>
    </article>
  );
}
