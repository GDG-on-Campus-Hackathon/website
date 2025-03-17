import { cn } from "@/lib/utils";

export default function P({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  const baseClassName = "mb-5 text-sm/relaxed text-justify tracking-wide";

  return <p {...props} className={cn(baseClassName, className)} />;
}
