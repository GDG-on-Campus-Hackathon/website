import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselNavButtonProps {
  direction: "prev" | "next";
  triggerClassName: string;
  positionClassName: string;
  ariaLabel: string;
}

export default function CarouselNavButton({
  direction,
  triggerClassName,
  positionClassName,
  ariaLabel,
}: CarouselNavButtonProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onMouseDown={(e) => e.preventDefault()}
      className={cn(
        triggerClassName,
        positionClassName,
        "absolute top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/40 p-2 leading-none opacity-0 transition-all duration-300 hover:bg-white/60 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
      )}
    >
      <Icon size={16} />
    </button>
  );
}
