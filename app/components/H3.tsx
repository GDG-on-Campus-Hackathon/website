import { cn } from "@/lib/utils";

export default function H3({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h3">) {
  const baseClassName =
    "mb-5 font-bold text-sm uppercase tracking-wider relative pl-3 border-l-4 border-[#4c4c4c]";

  return <h3 {...props} className={cn(baseClassName, className)} />;
}
