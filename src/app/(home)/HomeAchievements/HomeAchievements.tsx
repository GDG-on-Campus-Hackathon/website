import Image from "next/image";
import image_cover from "./cover.png";

export default function HomeAchievements() {
  return (
    <div className="text-center" id="home-achievements">
      <h1>成果展現</h1>
      <div>
        <h2>/活動花絮/</h2>
        <p>報名表單：https://forms.gle/LtZqTbtp3eBkLUuN9</p>
        <p>
          活動一律透過線上表單報名，並於表單內繳交相關參考資料，主辦方將以表單填寫內容作為錄取參考依據，
          報名先後順序不列入計分標準。
        </p>
        <p>
          活動一律透過線上表單報名，並於表單內繳交相關參考資料，主辦方將以表單填寫內容作為錄取參考依據，
          報名先後順序不列入計分標準。
        </p>
        <p>
          *
          完成報名後，則表示同意接受本辦法之拘束，如有未盡事宜，主辦單位保留各項競賽辦法解釋及變更之權利，敬請在參加前詳閱活動注意事項。
        </p>
      </div>
      <h2>/獲獎作品/</h2>
      <div>
        <div>
          <Image src={image_cover.src} alt={"cover"} width={453} height={341} />
        </div>
        <div>
          <p>敬請期待...</p>
          <p>本屆成果將於 6/8 決賽後公布於官網</p>
        </div>
      </div>
    </div>
  );
}
