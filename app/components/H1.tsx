import { cn } from "@/lib/utils";

export default function H1({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h1">) {
  const baseClassName =
    "mb-8 font-bold text-3xl tracking-widest leading-none w-fit px-2 relative before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1/2 before:-z-10 before:bg-brand-yellow";

  return <h1 {...props} className={cn(baseClassName, className)} />;
}
