import { Info } from "lucide-react";

interface InfoButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function InfoButton({ onClick, children }: InfoButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-brand-brown text-xs font-medium cursor-pointer hover:underline"
      onClick={onClick}
    >
      <Info />
      <span>{children}</span>
    </button>
  );
}
