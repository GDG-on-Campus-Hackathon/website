type Prize = "gold" | "silver" | "bronze";

interface PrizeAppearance {
  className: string;
  text: string;
}

interface EventAwardProps {
  description: string;
  prize: Prize;
}

export default function EventAward({ description, prize }: EventAwardProps) {
  const prizeAppearance: Record<Prize, PrizeAppearance> = {
    gold: { className: "bg-prize-gold", text: "1" },
    silver: { className: "bg-prize-silver", text: "2" },
    bronze: { className: "bg-prize-bronze", text: "3" },
  };

  return (
    <div className="flex gap-4 mb-5 items-center">
      <div
        className={`${prizeAppearance[prize].className} flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-[3px_4px_7px_0px_rgba(0,0,0,0.1),inset_4px_4px_8px_0px_rgba(255,255,255,0.3),inset_-4px_-4px_8px_0px_rgba(0,0,0,0.1)]`}
      >
        <span className="font-bold">{prizeAppearance[prize].text}</span>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
}
