export default function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-9 font-bold text-lg/tight tracking-widest before:content-['/'] after:content-['/']">
      {children}
    </h2>
  );
}
