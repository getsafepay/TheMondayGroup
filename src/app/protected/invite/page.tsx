import { FormMessage, Message } from "@/components/auth/forms/form-message";
import { Input } from "@/components/auth/forms/input";
import { Label } from "@/components/auth/forms/label";
import { SubmitButton } from "@/components/auth/forms/submit-button";
import { createClient } from "@/utils/supabase/server";
import { encodedRedirect } from "@/utils/utils";
import { headers } from "next/headers";
import Link from "next/link";

export default function Signup({ searchParams }: { searchParams: Message }) {
  const signUp = async (formData: FormData) => {
    "use server";
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const firstname = formData.get("firstname")?.toString();
    const lastname = formData.get("lastname")?.toString();
    const isAdmin = formData.get("isAdmin");
    const supabase = createClient();
    const origin = headers().get("origin");
    console.log(isAdmin);

    if (!email || !password || !firstname || !lastname) {
      return { error: "All fields are required" };
    }

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          firstname,
          lastname,
          isAdmin: isAdmin ? true : false,
        },
      },
    });

    if (error) {
      console.error(error.code + " " + error.message);
      return encodedRedirect(
        "error",
        "/protected/invite",
        "Error trying to invite a member"
      );
    } else {
      return encodedRedirect(
        "success",
        "/protected/invite",
        "Invite has been sent! Please ask member to check his email for a verification link."
      );
    }
  };

  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="w-full flex-1 flex items-center h-screen justify-center gap-2 p-4">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form className="flex flex-col w-full justify-center gap-2 text-foreground [&>input]:mb-6 max-w-md">
        <h1 className="text-2xl font-medium">Invite member</h1>
        <p className="text-sm text text-foreground/60">
          Invite new member or invite member with admin rights.
        </p>
        <div className="mt-8 flex flex-col gap-2 [&>input]:mb-3">
          <Label htmlFor="firstname">First name*</Label>
          <Input name="firstname" placeholder="First name ..." required />
          <Label htmlFor="lastname">Last name*</Label>
          <Input name="lastname" placeholder="Last name ..." required />
          <Label htmlFor="email">Email*</Label>
          <Input name="email" placeholder="you@example.com" required />
          <Label htmlFor="password">Password*</Label>
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <div className="inline-flex items-center py-2">
            <label className="flex items-center cursor-pointer relative">
              <Input
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                id="isAdmin"
                name="isAdmin"
                defaultChecked={false}
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label className="cursor-pointer ml-2 text-slate-600 text-sm">
              Add as Admin
            </label>
          </div>

          <SubmitButton formAction={signUp} pendingText="Sending invite...">
            Send invite
          </SubmitButton>
        </div>
        <FormMessage message={searchParams} />
      </form>
    </div>
  );
}
