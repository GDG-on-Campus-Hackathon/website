import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default function NavItem({
  children,
  href,
  isActive,
  onClick,
}: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "hover:text-black pb-1 relative transition-colors",
        isActive && "text-black font-medium",
      )}
    >
      <span>{children}</span>
      {isActive && (
        <span className="active-scroll-spy absolute bottom-0 left-0 w-full transition-all"></span>
      )}
    </Link>
  );
}
