import { useEffect, useState } from "react";
import H2 from "../components/H2";
import Image from "next/image";

interface ToggleBarProps {
  title: string;
  image: string;
  mobileImage: string;
}

export default function ToggleBar({
  title,
  image,
  mobileImage,
}: ToggleBarProps) {
  const [isSemiOpen, setSemiOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="mb-4">
      <button
        onClick={() => setSemiOpen(!isSemiOpen)}
        className="w-full flex justify-between items-center p-4 rounded-lg transition-all duration-300 cursor-pointer"
      >
        <H2 className="mb-0">{title}</H2>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isSemiOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* container for image */}
      <div
        className={`transition-all duration-300 overflow-hidden flex justify-center ${
          isSemiOpen ? "max-h-[800px] mt-4" : "max-h-0"
        }`}
      >
        <Image
          src={isMobile ? mobileImage : image}
          alt={title}
          className="rounded-lg w-full md:w-[95%]"
          priority
        />
      </div>
    </div>
  );
}
