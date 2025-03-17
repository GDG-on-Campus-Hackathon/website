import { cn } from "@/lib/utils";

interface InformationCardProps {
  className?: string;
  title: string;
  text: string;
}

export default function InformationCard({
  className,
  title,
  text,
}: InformationCardProps) {
  return (
    <section
      className={cn(
        "w-5/6 p-4 rounded-sm shadow-[inset_1px_1px_2px_0px_rgba(255,255,255,0.28),inset_-1px_-1px_2px_0px_rgba(0,0,0,0.08),0.75px_1px_1.75px_0px_rgba(0,0,0,0.08)]",
        className,
      )}
    >
      <h3 className="font-bold text-sm leading-none tracking-widest mb-2">
        {title}
      </h3>
      <p className="text-sm text-justify tracking-wider">{text}</p>
    </section>
  );
}
