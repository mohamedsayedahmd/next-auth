import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth"; // check if the user already logged in
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    // if you logged in ?
    redirect("/dashboard");
  }

  return (
    <main>
      <LoginForm />
    </main>
  );
}
