export default function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 font-bold text-sm uppercase tracking-wider relative pl-3 border-l-4 border-[#4c4c4c]">
      {children}
    </h3>
  );
}
