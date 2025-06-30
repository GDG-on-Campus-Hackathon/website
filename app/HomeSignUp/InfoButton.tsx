import InfoIcon from "./InfoIcon";

interface InfoButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function InfoButton({ onClick, children }: InfoButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-brand-brown text-xs font-medium hover:underline"
      onClick={onClick}
    >
      <InfoIcon />
      <span>{children}</span>
    </button>
  );
}
