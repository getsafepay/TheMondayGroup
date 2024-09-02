import { Header } from "@/components/Header";
import { navigation } from "@/data/navigation";

export async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full min-h-screen bg-white">
      <Header navigation={navigation} />
      <main className="flex flex-1  w-full">
        <div className=" w-full">{children}</div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
