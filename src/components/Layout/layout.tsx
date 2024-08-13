import { Header } from "@/components/Header";
import { navigation } from "@/data/navigation";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full min-h-screen bg-palette-white">
      <Header navigation={navigation} />
      <main className="flex flex-1 min-h-screen w-full z-999 mb-12">
        <div className=" h-20 opacity-10 w-full bg-white absolute top-0 border-b border-black"></div>
        <div className="pt-0 w-full">{children}</div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
