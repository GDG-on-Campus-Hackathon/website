"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import H1 from "../components/H1";
import H2 from "../components/H2";
import Article from "../components/Article";
import ClickFocus from "./components/ClickFocus";
import { images, type ImageItem } from "./data/Images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeEventHighlights() {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openModal = (image: ImageItem) => {
    const index = images.findIndex((img) => img.id === image.id);
    setSelectedIndex(index);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Article id="home-achievements">
      <H1>成果展現</H1>
      <H2>活動花絮</H2>
      <div className="relative max-w-6xl mx-auto mt-8 overflow-hidden group md:h-64">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            // Mobile
            320: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
            // Mobile L
            480: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
            // Tablet
            768: {
              slidesPerView: 2,
              spaceBetween: 11,
            },
            // Desktop
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            // Desktop L
            1280: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-highlights",
            prevEl: ".swiper-button-prev-highlights",
          }}
          className="w-full h-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              {({ isActive }) => (
                <button
                  type="button"
                  className={`h-full transition-transform duration-300 ease-in-out ${isActive ? "scale-100" : "scale-75 opacity-60"} w-full`}
                  onClick={() => openModal(image)}
                  aria-label={`View ${image.alt}`}
                >
                  <div className="relative w-full aspect-video md:h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 33vw"
                      className="object-cover rounded-md"
                      priority={image.id === 1}
                    />
                  </div>
                </button>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev-highlights absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full leading-none bg-white bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 opacity-0 group-hover:opacity-100">
          <ChevronLeft size={16} />
        </div>
        <div className="swiper-button-next-highlights absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full leading-none bg-white bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 opacity-0 group-hover:opacity-100">
          <ChevronRight size={16} />
        </div>
      </div>
      {selectedImage && (
        <ClickFocus
          closeModal={closeModal}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      )}
      <a
        href="https://photos.app.goo.gl/MwV2tBbE1YxWxuL18"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 underline hover:text-blue-600 cursor-pointer"
      >
        前往共用相簿
      </a>
    </Article>
  );
}
