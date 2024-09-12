import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function AuthBtn() {
  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };
  const gotoProfile = () => {
    return redirect("/protected/profile");
  };
  return (
    <>
      <form action={gotoProfile}>
        <button className="py-2 px-4 text-sm rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Your profile
        </button>
      </form>
      <form action={signOut}>
        <button className="py-2 px-4 text-sm rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </>
  );
}
