import AuthButton from "@/components/auth/AuthButton";
import DeployButton from "@/components/auth/DeployButton";
import FetchDataSteps from "@/components/auth/tutorial/FetchDataSteps";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 pt-20 items-center">
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-10">
          <div className="w-full max-w-6xl flex justify-end items-center p-3 text-sm">
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-2xl mb-4">Yet to decide</h2>
          <p>
            Work in Progress: This is yet to decide what do we need to land a
            member or admin on?
          </p>
        </main>
      </div>
    </div>
  );
}
