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
    <section className={cn("w-5/6 p-4 rounded-sm shadow-info-card", className)}>
      <h3 className="font-bold text-sm leading-none tracking-widest mb-2">
        {title}
      </h3>
      <p className="text-sm text-justify tracking-wider">{text}</p>
    </section>
  );
}
