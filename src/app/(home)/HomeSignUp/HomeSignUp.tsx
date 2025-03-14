export default function HomeSignUp() {
  return (
    <div className="text-center" id="home-sign-up">
      <h1 className="text-4xl text-gray-700 font-extrabold font-sans py-2 text-left pl-20 pt-3">
        報名資訊
      </h1>
      <div className="text-left leading-12 pl-40 pr-40">
        <h2 className="text-3xl text-gray-700 font-semibold text-left pt-10">
          /報名方式/
        </h2>
        <div className="text-lg pt-10 flex flex-row">
          <p>報名表單：</p>
          <a className="underline" href="https://forms.gle/LtZqTbtp3eBkLUuN9">
            Sign Up Form
          </a>
        </div>
        <p className="text-lg pt-4 tracking-wide">
          活動一律透過線上表單報名，並於表單內繳交相關參考資料，主辦方將以表單填寫內容作為錄取參考依據，
          報名先後順序不列入計分標準。
        </p>
        <p className="text-sm pt-3">
          *
          完成報名後，則表示同意接受本辦法之拘束，如有未盡事宜，主辦單位保留各項競賽辦法解釋及變更之權利，敬請在參加前詳閱活動注意事項。
        </p>
      </div>
      <div className="text-left leading-10 pl-40">
        <h2 className="text-3xl text-gray-700 font-semibold text-left pt-10">
          /報名資格/
        </h2>
        <div>
          <p className="text-lg pt-4 tracking-wide">
            高中以上學生（具當學期在學證明）
          </p>
        </div>
      </div>
      <div className="text-left leading-10 pl-40">
        <h2 className="text-3xl text-gray-700 font-semibold text-left pt-10">
          /活動時間/
        </h2>
        <div>
          <p className="text-lg pt-4 tracking-wide">
            報名：2025/03/15（六）～2025/04/15（二）23:59
          </p>
          <p className="text-lg pt-4 tracking-wide">
            決賽名單公布：2025/5/1 (四)
          </p>
          <p className="text-lg pt-4 tracking-wide">
            決賽：2025/06/07 (六) ~ 2025/06/08 (日)
          </p>
        </div>
      </div>
      <div className="text-left leading-10 pl-40">
        <h2 className="text-3xl text-gray-700 font-semibold text-left pt-10">
          /活動地點/
        </h2>
        <div>
          <p className="text-lg pt-4 tracking-wide">
            決賽：臺北醫學大學跨領域學院杏春樓（台北市信義區吳興街250號杏春樓）
          </p>
          <p className="text-lg pt-4 tracking-wide">成果發表: 未定</p>
        </div>
      </div>
    </div>
  );
}
