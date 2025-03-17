export default function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-sm/relaxed text-justify tracking-wide">
      {children}
    </p>
  );
}
