import { Header } from "@/components/Header";
import { navigation } from "@/data/navigation";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full min-h-screen bg-white">
      <Header navigation={navigation} />
      <main className="flex flex-1 min-h-screen w-full">
        <div className="pt-0 w-full">{children}</div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
