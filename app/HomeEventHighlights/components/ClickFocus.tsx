import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { images, type ImageItem } from "../data/Images";

interface Props {
  closeModal: () => void;
  selectedImage: ImageItem;
  setSelectedImage: (image: ImageItem) => void;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export default function ClickFocus({
  closeModal,
  selectedImage,
  setSelectedImage,
  selectedIndex,
  setSelectedIndex,
}: Props) {
  const goToPrevious = () => {
    const newIndex =
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex =
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90"
      onClick={closeModal}
      onKeyDown={(e) => {
        if (e.key === "Escape") closeModal();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4 lg:p-8">
        <div className="relative w-full h-full max-w-7xl max-h-full">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            fill
            quality={100}
            style={{ objectFit: "contain" }}
            className="drop-shadow-2xl"
            unoptimized={true}
          />
        </div>

        {/* standard ui*/}
        <div className="hidden sm:block">
          {/* Previous button */}
          <button
            type="button"
            className="absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 
                        text-white p-2 md:p-3 lg:p-4 
                        rounded-full leading-none bg-black bg-opacity-40 hover:bg-yellow-500 hover:bg-opacity-70 
                        transition-all duration-300 
                        backdrop-blur-sm border-2 border-white border-opacity-20
                        focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
          </button>

          {/* Next button */}
          <button
            type="button"
            className="absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 
                        text-white p-2 md:p-3 lg:p-4 
                        rounded-full leading-none bg-black bg-opacity-40 hover:bg-yellow-500 hover:bg-opacity-70 
                        transition-all duration-300 
                        backdrop-blur-sm border-2 border-white border-opacity-20
                        focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
          </button>
        </div>

        {/* Mobile ui*/}
        <button
          type="button"
          className="sm:hidden absolute inset-y-0 left-0 w-20 flex items-center justify-start pl-2 z-10"
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          aria-label="Previous image"
        >
          <div className="p-3 rounded-full leading-none bg-black bg-opacity-50 backdrop-blur-sm border-2 border-white border-opacity-20 opacity-80 active:opacity-100 transition-all duration-200">
            <ChevronLeft className="h-3 w-3 text-white" />
          </div>
        </button>

        <button
          type="button"
          className="sm:hidden absolute inset-y-0 right-0 w-20 flex items-center justify-end pr-2 z-10"
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          aria-label="Next image"
        >
          <div className="p-3 rounded-full leading-none bg-black bg-opacity-50 backdrop-blur-sm border-2 border-white border-opacity-20 opacity-80 active:opacity-100 transition-all duration-200">
            <ChevronRight className="h-3 w-3 text-white" />
          </div>
        </button>

        {/* Image counter */}
        <div
          className="absolute bottom-4 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10
                         text-white text-sm sm:text-sm md:text-base lg:text-lg 
                         bg-black bg-opacity-50 backdrop-blur-sm 
                         px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-2 
                         rounded-full leading-none border-2 border-white border-opacity-20
                         font-medium tracking-wide"
        >
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Close button - positioned at the top right */}
      <button
        type="button"
        className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 z-20
                      text-white
                      p-1 sm:p-2 md:p-3 
                      rounded-full leading-none bg-black bg-opacity-50 hover:bg-yellow-500 hover:bg-opacity-70 
                      transition-all duration-300 
                      backdrop-blur-sm border-2 border-white border-opacity-20
                      focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        aria-label="Close lightbox"
      >
        <X size={16} />
      </button>
    </div>
  );
}
