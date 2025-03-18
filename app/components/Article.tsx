import { cn } from "@/lib/utils";

export default function Article({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"article">) {
  const baseClassName = "max-w-3xl mx-auto mb-9 px-6";

  return <article {...props} className={cn(baseClassName, className)} />;
}
