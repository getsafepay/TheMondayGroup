import { Footer } from "../Footer";
import { Header } from "../Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full min-h-screen bg-palette-white">
      <Header children={undefined} />
      <main className="flex flex-1 h-full mt-20 w-full z-0">
        <div className="pt-0 w-full">{children}</div>
      </main>
      <Footer children={undefined} />
    </div>
  );
}
