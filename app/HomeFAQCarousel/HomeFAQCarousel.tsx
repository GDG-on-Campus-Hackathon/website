"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Article from "../components/Article";
import H1 from "../components/H1";
import H2 from "../components/H2";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const faqItems = [
  {
    id: 1,
    title: "隊伍成員可以包含完全沒有程式經驗的嗎？",
    content: (
      <>
        <p>可以！只要組員間彼此協調分工沒問題，我們都非常歡迎。</p>
        <p>
          報名須知：本次採單人報名為主，至多可選擇一位欲同組之組員；是否晉級複賽將以個人為單位篩選，入選後主辦團隊會再多方評估，協助大家安排複賽中適合的隊伍配置。
        </p>
        <p>
          一個好的科技專案不僅僅包含技術實力，視覺介面、可能獲得考量差異化、商業潛力等層面，而且更多人一起集思廣益，說不定能激發意想不到的創意呢。
        </p>
        <p>
          既然如此，為何不就此踏出第一步，讓
          <span className="text-[#2EA65A]"> DevJam </span>
          成為你的
          <span className="text-[#3F7DE8]">第一次經驗</span>
          呢？
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "初選前 100 名是根據什麼標準進行評選？",
    content: (
      <>
        <p>
          評審團隊將全面審核所有報名資料，並主要考量以下要素
          <span className="text-[#4C4C4C]">（依優先度排序）</span>：
        </p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>賽道主題經驗：展現出與本次三大賽道相關的技術背景與理解。</li>
          <li>程式開發：整體的程式設計能力與開發經驗。</li>
          <li>作品集呈現：過往專案成果與創意展現。</li>
        </ol>
        <p>
          若想在初選中脫穎而出，請務必在報名資料中清楚呈現你的專長與相關經驗。
        </p>
        <p>
          現在就提交申請，在
          <span className="text-[#F2A100]"> DevJam TW 2026 </span>
          的舞臺上綻放熱情與潛力吧！
        </p>
      </>
    ),
  },
  {
    id: 3,
    title:
      "複賽由主辦方分組，萬一跟不認識的人同隊，會有什麼機制幫助大家合作嗎？",
    content: (
      <>
        <p>
          <span className="text-[#3F7DE8]">前置工作坊</span>
          就是為了這件事而設計的！
        </p>
        <p>
          這場一天的活動包含小型技術工作坊、破冰遊戲、小組討論、專案導師引導等精彩內容，以幫助隊員彼此熟悉、建立默契，在正式進入開發前就能進行角色分配與溝通協調。
        </p>
        <p>
          這同時也是一個難得的機會，讓你認識不同背景、不同技術強項的夥伴，培養跨領域合作的經驗，讓團隊在正賽中合作更順利。
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "前置工作坊的內容是什麼？不參加會不會影響比賽表現？",
    content: (
      <>
        <p>
          <span className="text-[#2EA65A]">前置工作坊</span>
          不只是暖身，更是建立
          <span className="text-[#E95A58]">團隊合作</span>
          的關鍵！
        </p>
        <p>
          這場活動結合技術導入、團隊破冰、小組討論、專案導師指導，讓你在比賽開始前就能熟悉團隊、明確角色分工，為正式比賽做好萬全準備。
        </p>
        <p>
          雖然工作坊並非強制參加，但若缺席將會錯失與隊友建立默契與提前準備的寶貴機會，也可能讓團隊在比賽初期運作較不順暢。
        </p>
        <p>
          我們會在
          <span className="text-[#3F7DE8]">複賽入選名單公布</span>
          後再次確認大家的參與狀況，鼓勵大家盡量出席，以爭取最佳表現。
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "比賽期間需要準備什麼？睡覺、飲食怎麼安排？",
    content: (
      <>
        <p>
          帶著你的
          <span className="text-[#F2A100]">電腦、盥洗用品</span>
          ，還有滿滿的
          <span className="text-[#E95A58]">熱情</span>
          來就對了。
        </p>
        <p>
          比賽的整整兩天中，飲食與基礎生活需求由
          <span className="text-[#2EA65A]">主辦單位全額負責</span>
          ，讓你能專注在開發與挑戰上。
        </p>
        <p>
          至於睡覺，雖然大家都會拚到最後一刻，但我們也貼心地準備讓你短暫休息的小憩空間，不需要擔心真的「通宵爆肝」。
        </p>
        <p>
          懂得休息才能走更遠，我們也鼓勵團隊
          <span className="text-[#3F7DE8]">妥善分配體力</span>。
        </p>
      </>
    ),
  },
];

export default function HomeFAQCarousel() {
  return (
    <Article id="home-faq">
      <H1>常見問題</H1>
      <H2>報名前 FAQ</H2>

      <div className="relative mx-auto mt-8 overflow-hidden group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={14}
          slidesPerView={1.06}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3600,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 1.32,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 1.32,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-faq",
            prevEl: ".swiper-button-prev-faq",
          }}
          className="w-full pb-10 [&_.swiper-slide]:h-auto [&_.swiper-wrapper]:items-stretch"
        >
          {faqItems.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <article
                  className={`w-full transition-transform duration-300 ease-in-out ${
                    isActive ? "scale-100" : "scale-95 opacity-70"
                  }`}
                >
                  <div className="relative flex h-[540px] flex-col overflow-hidden rounded-md bg-[#F3F1EC] p-6 text-[#4C4C4C] shadow-[1.5px_2px_3.5px_0px_rgba(0,0,0,0.1),2px_2px_4px_0px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_0px_rgba(0,0,0,0.06)] sm:h-[520px] sm:p-7 md:h-[505px]">
                    <div className="absolute right-5 top-0 h-16 w-9 border-l-4 border-[#1E1E1E] bg-[#39A85A]" />
                    <div className="absolute -left-12 -top-16 h-32 w-32 rounded-full bg-[#F5B600]" />

                    <div className="relative z-10 mb-5 w-fit bg-[#4E86DF] px-5 py-2 text-lg font-bold tracking-wide text-white">
                      FAQs - {item.id}
                    </div>

                    <h3 className="relative z-10 mb-5 text-center text-lg font-bold leading-snug tracking-wide text-black">
                      {item.title}
                    </h3>

                    <div className="relative z-10 space-y-3 text-sm font-medium leading-7 tracking-wide sm:text-base sm:leading-8">
                      {item.content}
                    </div>
                  </div>
                </article>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="swiper-button-prev-faq absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/60 p-2 leading-none opacity-0 transition-all duration-300 hover:bg-white/80 group-hover:opacity-100"
          aria-label="上一張 FAQ"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          className="swiper-button-next-faq absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/60 p-2 leading-none opacity-0 transition-all duration-300 hover:bg-white/80 group-hover:opacity-100"
          aria-label="下一張 FAQ"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </Article>
  );
}
