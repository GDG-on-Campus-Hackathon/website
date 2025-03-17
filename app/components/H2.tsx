export default function H2({ children }: { children: React.ReactNode} ) {
  return (
    <h2 className="w-fit mx-auto mb-5 font-bold leading-none tracking-widest">
      {children}
    </h2>
  );
}
