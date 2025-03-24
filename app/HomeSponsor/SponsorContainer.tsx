interface SponsorContainerProps {
  children: React.ReactNode;
}

export default function SponsorContainer({ children }: SponsorContainerProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-9">
      {children}
    </div>
  );
}
