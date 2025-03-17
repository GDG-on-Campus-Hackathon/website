export default function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-8 font-bold text-2xl tracking-widest leading-none w-fit px-2 relative before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1/2 before:-z-10 before:bg-[#FFDB72]">
      {children}
    </h1>
  );
}
