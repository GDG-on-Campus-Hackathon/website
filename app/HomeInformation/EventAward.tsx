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
        className={`${prizeAppearance[prize].className} shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-prize-medal`}
      >
        <span className="font-bold">{prizeAppearance[prize].text}</span>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
}
