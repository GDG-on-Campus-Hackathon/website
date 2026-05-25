"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import H2 from "../components/H2";
import Article from "../components/Article";
import CarouselNavButton from "../components/CarouselNavButton";
import WinnerSectionCard from "./component/winnerSectionCard";
import {
  type winnerSectionProps,
  winnerSectionList,
} from "./component/winnerSectionProps";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeWinnerCarousel() {
  return (
    <div className="mt-20">
      <Article id="home-winner-carousel">
        <H2>優勝作品</H2>
        <div className="relative max-w-6xl mx-auto mt-8 overflow-hidden group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-winners",
              prevEl: ".swiper-button-prev-winners",
            }}
            className="w-full select-none pb-10 [&_.swiper-slide]:h-auto [&_.swiper-wrapper]:items-stretch"
          >
            {winnerSectionList.map((section: winnerSectionProps) => (
              <SwiperSlide key={section.id} className="!flex">
                <div className="w-full flex items-center justify-center bg-[#F2F1EF33] rounded-lg shadow-[1.5px_2px_3.5px_0px_rgba(0,0,0,0.1),2px_2px_4px_0px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_0px_rgba(0,0,0,0.1)]">
                  <WinnerSectionCard {...section} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <CarouselNavButton
            direction="prev"
            triggerClassName="swiper-button-prev-winners"
            positionClassName="left-1"
            ariaLabel="上一個優勝作品"
          />
          <CarouselNavButton
            direction="next"
            triggerClassName="swiper-button-next-winners"
            positionClassName="right-1"
            ariaLabel="下一個優勝作品"
          />
        </div>
      </Article>
    </div>
  );
}
