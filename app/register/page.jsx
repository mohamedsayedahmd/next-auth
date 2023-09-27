import RegisterForm from "@/components/RegisterForm";
import React from "react";
import { getServerSession } from "next-auth"; // check if the user already logged in
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
const Register = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    // if you logged in ?
    redirect("/dashboard");
  }
  // else register form
  return <RegisterForm />;
};

export default Register;
