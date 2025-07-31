"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import H2 from "../components/H2";
import Article from "../components/Article";
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
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 8000,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-winners",
              prevEl: ".swiper-button-prev-winners",
            }}
            className="w-full"
            onInit={(swiper) => {
              setTimeout(() => {
                const slides = swiper.slides;
                let maxHeight = 0;

                slides.forEach((slide) => {
                  slide.style.height = "auto";
                  const slideHeight = slide.offsetHeight;
                  if (slideHeight > maxHeight) {
                    maxHeight = slideHeight;
                  }
                });

                slides.forEach((slide) => {
                  slide.style.height = `${maxHeight}px`;
                });
              }, 100);
            }}
          >
            {winnerSectionList.map((section: winnerSectionProps) => (
              <SwiperSlide
                key={section.id}
                className="flex items-center justify-center bg-[#F2F1EF33] rounded-lg shadow-[1.5px_2px_3.5px_0px_rgba(0,0,0,0.1),2px_2px_4px_0px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_0px_rgba(0,0,0,0.1)]"
              >
                <WinnerSectionCard {...section} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev-winners absolute left-1 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full leading-none bg-white bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 opacity-0 group-hover:opacity-100">
            <ChevronLeft size={16} />
          </div>
          <div className="swiper-button-next-winners absolute right-1 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full leading-none bg-white bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 opacity-0 group-hover:opacity-100">
            <ChevronRight size={16} />
          </div>
        </div>
      </Article>
    </div>
  );
}
