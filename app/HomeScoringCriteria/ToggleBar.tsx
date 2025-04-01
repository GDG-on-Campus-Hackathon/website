import type { StaticImageData } from "next/image";
import { useState } from "react";
import clsx from "clsx";
import H2 from "../components/H2";

interface ToggleBarProps {
  title: string;
  image: StaticImageData;
  mobileImage: StaticImageData;
}

export default function ToggleBar({
  title,
  image,
  mobileImage,
}: ToggleBarProps) {
  const [isSemiOpen, setSemiOpen] = useState(false);

  return (
    <div className="mb-6 px-4">
      <button
        onClick={() => setSemiOpen(!isSemiOpen)}
        className="w-full flex justify-between items-center transition-all duration-300 cursor-pointer"
      >
        <H2 className="mb-0">{title}</H2>
        <svg
          className={clsx(
            "w-6 h-6 transform transition-transform duration-300",
            isSemiOpen && "rotate-180",
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* container for image */}
      <div
        className={clsx(
          "transition-all duration-300 overflow-hidden flex justify-center",
          isSemiOpen ? "max-h-[800px] mt-4" : "max-h-0",
        )}
      >
        <picture>
          <source media="(min-width: 48rem)" srcSet={image.src} />
          <img src={mobileImage.src} alt={title} className="w-full" />
        </picture>
      </div>
    </div>
  );
}
