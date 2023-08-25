export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="main-others">
        <div className="sun"></div>
        <div className="overlay"></div>
        <div className="overlay glitch"></div>
      </div>
    </>
  );
}
