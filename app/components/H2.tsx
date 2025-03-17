import { cn } from "@/lib/utils";

export default function H2({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h2">) {
  const baseClassName =
    "mb-9 font-bold text-lg/tight tracking-widest before:content-['/'] after:content-['/']";

  return <h2 {...props} className={cn(baseClassName, className)} />;
}
